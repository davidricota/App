import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { CartService } from '../../providers/service/cart-service';
import { Values } from '../../providers/service/values';
import { Functions } from '../../providers/service/functions';
import { Home } from '../home/home';
import { BillingAddressForm } from '../checkout/billing-address-form/billing-address-form';
import { ProductPage } from '../product/product';
import { WishlistPage } from '../account/wishlist/wishlist';

@Component({
    templateUrl: 'cart.html'
})
export class CartPage {
    cart: any;
    status: any;
    obj: any;
    quantity: number;
    update: any;
    options: any;
    number: any;
    addProduct: boolean = true;
    coupon: any;
    a: any;
    disableSubmit: boolean = false;
    buttonCoupon: boolean = false;
    disableSubmitCoupon: boolean = false;
    chosen_shipping: any;
    shipping: any;
    Apply: any;
    Checkout: any;
    enableCoupon: boolean = false;
    tabBarElement: any;

    constructor(public viewCtrl: ViewController, public nav: NavController, public service: CartService, public values: Values, public params: NavParams, public functions: Functions, private toastCtrl: ToastController) {
        this.Apply = "Apply";
        this.Checkout = "Checkout";
        this.quantity = 1;
        this.options = [];
        this.obj = params.data;
        this.service.loadCart()
            .then((results) => this.handleCartInit(results));
    }
    handleCartInit(results) {
        this.cart = results;
        this.shipping = results.zone_shipping;
        this.chosen_shipping = results.chosen_shipping;
    }
    handleCart(results) {
        this.cart = results;
    }
    delete(key) {
        this.service.deleteItem(key).then((results) => this.handleCart(results));
    }
    checkout() {
        this.disableSubmit = true;
        this.Checkout = "Please Wait";
        this.service.checkout().then((results) => this.handleBilling(results));
    }
    handleBilling(results) {
        this.disableSubmit = false;
        this.Checkout = "Checkout";
        this.nav.push(BillingAddressForm, results);
    }
    deleteFromCart(id, key) {
        this.service.deleteFromCart(id, key).then((results) => this.handleCart(results));
    }
    addToCart(id, key) {
        this.service.addToCart(id, key).then((results) => this.handleCart(results));
    }
    updateCart(results) {
        this.service.loadCart().then((results) => this.handleCart(results));
    }
    submitCoupon() {
        if (this.cart.coupon != undefined) {
            this.disableSubmitCoupon = true;
            this.Apply = "Apply";
            this.service.submitCoupon(this.cart.coupon).then((results) => this.handleCoupon(results));
        }
    }
    handleCoupon(results) {
        console.log(results);
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.enableCoupon = false;
        this.cart.coupon = "";
        this.functions.showAlert("STATUS", results._body);
        this.service.loadCart().then((results) => this.handleCart(results));
    }
    removeCoupon() {
        this.service.removeCoupon(this.cart.applied_coupons).then((results) => this.handleRemoveCoupon(results));
    }
    handleRemoveCoupon(results) {
        this.functions.showAlert(results.status, results.message);
        this.service.loadCart().then((results) => this.handleCart(results));
    }
    enableCouponOffer() {
        if (this.enableCoupon) {
            this.enableCoupon = false;
        } else {
            this.enableCoupon = true;
        }
    }
    handleResults(a) {
        if (a.message.status == 'success') {
            this.functions.showAlert(a.message.status, a.message.text);
        } else {
            this.functions.showAlert(a.message.status, a.message.text);
        }
    }
    updateShipping(method) {
        this.chosen_shipping = method;
        this.service.updateShipping(method).then((results) => this.handleShipping(results));
    }
    handleShipping(results) {
        this.cart = results;
    }
    gohome() {
        this.nav.setRoot(Home);
    }
    getProduct(id) {
        this.nav.push(ProductPage, id);
    }
    wishlist() {
        this.nav.push(WishlistPage);
    }
    addToWishlist(id) {
        if (this.values.isLoggedIn) {
            this.service.addToWishlist(id).then((results) => this.updateWishlist(results));
        } else {
            this.presentToastLoginAlert();
        }
    }
    updateWishlist(a) {
        if (a.success == "Success") {
            this.presentToast();
            this.values.wishlistId[this.cart.cart_contents.product_id] = true;
        } else {
            this.functions.showAlert("error", "error");
        }
    }
    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'Item added to wishlist',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }
    presentToastLoginAlert() {
        let toast = this.toastCtrl.create({
            message: 'You must login to add product to wishlist',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }
    ionViewWillEnter() {
        if(document.querySelector(".tabbar")){
           this.tabBarElement = document.querySelector(".tabbar")['style'];
            this.tabBarElement.display = 'none'; 
        }
    }
    ionViewWillLeave() {
        if(document.querySelector(".tabbar"))
        this.tabBarElement.display = 'flex';
    }
}