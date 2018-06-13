import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, FabContainer, LoadingController, PopoverController, ViewController } from 'ionic-angular';
import { ProductService } from '../../providers/service/product-service';
import { Values } from '../../providers/service/values';
import { Functions } from '../../providers/service/functions';
import { md5 } from './md5';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ModalController } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { PopoverPage } from '../about-popover/about-popover';
import { CartPage } from '../cart/cart';
import { Slides } from 'ionic-angular';

@Component({
    templateUrl: 'product.html'
})
export class ProductPage {
    @ViewChild(Slides) slides: Slides;
    product: any;
    id: any;
    status: any;
    options: any;
    opt: any;
    message: any;
    wishlist: any;
    quantity: any;
    reviews: any;
    reviewForm: any;
    nickname: any;
    details: any;
    AddToCart: any;
    wishlistIcon: boolean = false;
    showSpecification: boolean = false;
    moreDescription: boolean = false;
    related: any;
    crossSell: any;
    upsell:any;
    items: any;
    disableBuyNow: boolean = false;
    disableAddButton: boolean = false;
    tabBarElement: any;
    showOverview: boolean = true;
    showRelated : boolean = false;
    showReviews : boolean = false;
    segment = 'overview';
    form: any = {};
    buttonSubmitLogin: boolean = false;
    showAddReview:  boolean = false;
    count: any;
    count5: number = 0;
    count4: number = 0;
    count3: number = 0;
    count2: number = 0;
    count1: number = 0;
    count5Percentage: string = '0' + '%';
    count4Percentage: string = '0' + '%';
    count3Percentage: string = '0' + '%';
    count2Percentage: string = '0' + '%';
    count1Percentage: string = '0' + '%';
    variations: any;

    constructor(public viewCtrl: ViewController, private photoViewer: PhotoViewer, public popoverCtrl: PopoverController, public nav: NavController, public service: ProductService, params: NavParams, public functions: Functions, public values: Values, private socialSharing: SocialSharing, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
        this.id = params.data;
        this.options = [];
        this.quantity = "1";
        this.AddToCart = "Add To Cart";
        if(document.querySelector(".tabbar"))
        this.tabBarElement = document.querySelector(".tabbar")['style'];
        this.service.getProduct(this.id)
            .then((results) => this.handleProductResults(results));
    }
    handleProductResults(results) {
        this.product = results;
        if ((this.product.type == 'variable') && this.product.variations.length) this.getVariationProducts();
        this.getReviews();
        this.getRelatedProducts();
        this.getUpsellProducts();
        this.getCrossSellProducts();
    }
    getVariationProducts() {
        this.service.getVariationProducts(this.product.id).then((results) => this.variations = results);
    }
    getProduct(id) {
        this.nav.push(ProductPage, id);
    }
    addToCart(id) {
        if (this.product.type == 'variable' && this.options.length == 0) {
            this.functions.showAlert('Eroor', 'Please Select Product Option...')
        } else {
            this.disableAddButton = true;
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(":");
                for (var j = 0; j < res.length; j = j + 2) {
                    text += '"' + res[j] + '":"' + res[j + 1] + '",';
                }
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then((results) => this.updateCart());
        }
    }
    buyNow(id) {
        if (this.product.type == 'variable' && this.options.length == 0) {
            this.functions.showAlert('Eroor', 'Please Select Product Option...')
        } else {
            this.disableBuyNow = true;
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(":");
                for (var j = 0; j < res.length; j = j + 2) {
                    text += '"' + res[j] + '":"' + res[j + 1] + '",';
                }
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then((results) => this.updateBuynowResults(results));
        }
    }
    changeProduct() {
        var text = '{';
        var i;
        for (i = 0; i < this.options.length; i++) {
            var res = this.options[i].split(":");
            for (var j = 0; j < res.length; j = j + 2) {
                text += '"' + res[j] + '":"' + res[j + 1] + '",';
            }
        }
        text += '"quantity":"' + this.quantity + '"}';
        var obj = JSON.parse(text);
        for (let item in this.variations) {
            if (this.variations[item].id == obj.variation_id) {
                this.product.in_stock = this.variations[item].in_stock;
                this.product.price = this.variations[item].price;
                this.product.regular_price = this.variations[item].regular_price;
                this.product.sale_price = this.variations[item].sale_price;
            }
        }
    }
    updateBuynowResults(a) {
        this.disableBuyNow = false;
        this.nav.push(CartPage);
    }
    updateCart() {
        this.disableAddButton = false;
        this.AddToCart = "Add To Cart";
    }
    getCart() {
        this.values.hideTabbar = true;
        this.nav.push(CartPage);
    }
    mySlideOptions = {
        initialSlide: 1,
        loop: true,
        autoplay: 5800,
        pager: true
    }
    getReviews() {
        this.service.getReviews(this.id).then((results) => this.handleReview(results));
    }
    handleReview(a) {
        this.reviews = a;
        this.count = this.product.rating_count;
        for (let item in this.reviews) {
            this.reviews[item].avatar = md5(this.reviews[item].email);
        }
        this.reviews.forEach(review => {
            if (review.rating == 5) {
                this.count5 = this.count5 + 1;
            }
            if (review.rating == 4) {
                this.count4 = this.count4 + 1;
            }
            if (review.rating == 3) {
                this.count3 = this.count3 + 1;
            }
            if (review.rating == 2) {
                this.count2 = this.count2 + 1;
            }
            if (review.rating == 1) {
                this.count1 = this.count1 + 1;
            }
        });
        this.count5Percentage = ((this.count5 / this.count) * 100) + '%';
        this.count4Percentage = ((this.count4 / this.count) * 100) + '%';
        this.count3Percentage = ((this.count3 / this.count) * 100) + '%';
        this.count2Percentage = this.count2 + '%';
        this.count1Percentage = this.count1 + '%';
    }
    addToWishlist(id) {
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then((results) => this.update(results));
        } else {
            this.functions.showAlert("Warning", "You must login to add product to wishlist");
        }
    }
    update(a) {
        if (a.success == "Success") {
            this.values.wishlistId[this.product.id] = true;
        } else {
            this.functions.showAlert("error", "error");
        }
    }
    removeFromWishlist(id) {
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then((results) => this.updateWish(results, id));
    }
    updateWish(results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    }
    showSpecs() {
        if (this.showSpecification) {
            this.showSpecification = false;
        } else {
            this.showSpecification = true;
        }
    }
    showMore() {
        this.moreDescription = true;
    }
    showLess() {
        this.moreDescription = false;
    }
    getRelatedProducts() {
        if (this.product.related_ids != 0) {
            this.service.getRelatedProducts(this.product.related_ids).then((results) => this.related = results);
        }
    }
    getRelatedProduct(id) {
        this.nav.push(ProductPage, id);
    }
    getUpsellProducts() {
        if (this.product.upsell_ids != 0) {
            this.service.getRelatedProducts(this.product.upsell_ids).then((results) => this.upsell = results);
        }
    }
    getCrossSellProducts() {
        if (this.product.cross_sell_ids != 0) {
            this.service.getRelatedProducts(this.product.cross_sell_ids).then((results) => this.crossSell = results);
        }
    }
    share(product, network: string, fab: FabContainer) {
        var options = {
            message: 'Hey check this product', // not supported on some apps (Facebook, Instagram)
            subject: product.title, // fi. for email
            files: ['', ''], // an array of filenames either locally or remotely
            url: product.permalink,
            chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
        }
        let loading = this.loadingCtrl.create({
            content: `Posting to ${network}`,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(() => {
            fab.close();
        });
        loading.present();
        this.socialSharing.shareWithOptions(options);
    }
    showMoreReviews() {
        this.showRelated = false;
        this.showOverview = false;
        this.showReviews = true;
        this.segment = 'reviews';
    }
    viewPhoto(index) {
        this.slides.slideTo(index + 1, 500);
    }
    zoomPhoto(src) {
        this.photoViewer.show(src, this.product.name);
    }
    presentPopover(event: Event) {
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present({
            ev: event
        });
    }
    ionViewDidLoad() {
        if (document.querySelector(".tabbar")) this.tabBarElement.display = 'none';
    }
    ionViewWillLeave() {
        if (document.querySelector(".tabbar")) this.tabBarElement.display = 'flex';
    }
    similar() {
        this.showRelated = true;
        this.showOverview = false;
        this.showReviews = false;
        this.segment = 'related';
    }
    updateSchedule(event) {
        if (event._value == 'overview') {
            this.showOverview = true;
            this.showRelated = false;
            this.showReviews = false;
        } else if (event._value == 'related') {
            this.showOverview = false;
            this.showRelated = true;
            this.showReviews = false;
        } else if (event._value == 'reviews') {
            this.showOverview = false;
            this.showRelated = false;
            this.showReviews = true;
        }
    }
    yourRating(rating) {
        this.form.rating = rating;
    }
    submitComment() {
        this.form.id = this.id;
        if (this.validate()) {
            this.buttonSubmitLogin = true;
            this.service.submitComment(this.form).then((results) => {
                this.status = results;
                this.buttonSubmitLogin = false;
                this.functions.showAlert("Success", "Thank you for your review! Your review is awaiting approval");
            });
        }
    }
    validate() {
        if (!this.values.isLoggedIn) {
            if (this.form.author == undefined || this.form.author == "") {
                this.functions.showAlert("ERROR", "Please Enter Name");
                return false
            }
            if (this.form.email == undefined || this.form.email == "") {
                this.functions.showAlert("ERROR", "Please Enter Email");
                return false
            }
        }
        if (this.form.comment == undefined || this.form.comment == "") {
            this.functions.showAlert("ERROR", "Please Enter Comment");
            return false
        } else return true;
    }
    showSubmitReview() {
        if (this.showAddReview) this.showAddReview = false;
        else this.showAddReview = true;
    }
}