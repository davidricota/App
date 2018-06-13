import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchService } from '../../providers/service/search-service';
import { Service } from '../../providers/service/service';
import { Values } from '../../providers/service/values';
import { Functions } from '../../providers/service/functions';
import { ModalController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { ProductPage } from '../product/product';
import { ProductsPage } from '../products/products';
import { Filter } from '../filter/filter';
import { Sort } from '../sort/sort';

@Component({
    templateUrl: 'search.html'
})
export class SearchPage {
    @ViewChild("contentRef") contentHandle: Content;
    search: any;
    id: any;
    searchKey: any;
    has_more_items: boolean = true;
    options: any;
    status: any;
    products: any;
    moreProducts: any;
    quantity: any;
    filter: any;
    shouldShowCancel: boolean = true;
    loading : boolean = false;
    searchedName: any;
    hidecategory: boolean = false;
    items: any;
    catId: any;
    subcat: boolean = false;
    categories: any;
    subCategories: any;
    popularSearches: any;
    private tabBarHeight;
    private topOrBottom:string;
    private contentBox;

    constructor(public mainservice: Service, public modalCtrl: ModalController, public nav: NavController, public service: SearchService, public values: Values, params: NavParams, public functions: Functions) {
        this.filter = {};
        this.values.filter = {};
        this.options = [];
        this.quantity = "1";
        this.filter.page = 1;
        this.items = [];
        this.popularSearches = [];       
    }
    getCart() {
        this.nav.push(CartPage);
    }
    onInput($event) {
        this.loading = true;
        this.hidecategory = true;
        this.filter.page = 1;
        this.filter.search = $event.srcElement.value;
        this.values.filter = {};
        this.searchedName = $event.srcElement.value;
        this.service.getSearch(this.filter).then((results) => {
            this.loading = false;
            this.products = results;
        });
    }
    getCategory(id, image, name) {
        this.values.onsale = false;
        this.values.newCollections = false;
        this.values.featuredProducts = false;
        this.items.id = id;
        this.items.image = image;
        this.items.name = name;
        this.items.categories = this.service.categories;
        this.nav.push(ProductsPage, this.items);
    }
    getSubCategoryDropdown(id, name) {
        this.subCategories = "";
        this.subCategories = [];
        for (var i = 0; i < this.mainservice.categories.length; i++) {
            if (this.mainservice.categories[i].parent == id) {
                this.subCategories.push(this.mainservice.categories[i]);
            }
            this.subcat = true;
            this.catId = id;
        }
    }
    getSubCategoryDropup(id) {
        if (id == this.catId) {
            this.subCategories = "";
            this.subcat = false;
            this.catId = "";
        } else {
            this.subCategories = "";
            this.subCategories = [];
            for (var i = 0; i < this.mainservice.categories.length; i++) {
                if (this.mainservice.categories[i].parent == id) {
                    this.subCategories.push(this.mainservice.categories[i]);
                }
                this.subcat = true;
                this.catId = id;
            }
        }
    }
    onCancel($event) {
        console.log('cancelled');
        this.hidecategory = false;
    }
    getProduct(id) {
        this.nav.push(ProductPage, id);
    }
    doInfinite(infiniteScroll) {
        this.filter.page += 1;
        this.service.getSearch(this.filter).then((results) => this.handleMore(results, infiniteScroll));
    }
    handleMore(results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            };
        }
        if (results == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    }
    deleteFromCart(id) {
        this.service.deleteFromCart(id).then((results) => this.status = results);
    }
    addToCart(id, type) {
        if (type == 'variable') {
            this.nav.push(ProductPage, id);
        } else {
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(":");
                text += '"' + res[0] + '":"' + res[1] + '",';
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then((results) => this.updateCart(results));
        }
    }
    updateCart(a) {}
    setListView() {
        this.values.listview = true;
    }
    setGridView() {
        this.values.listview = false;
    }
    addToWishlist(id) {
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then((results) => this.update(results, id));
        } else {
            this.functions.showAlert("Warning", "You must login to add product to wishlist");
        }
    }
    update(results, id) {
        if (results.success == "Success") {
            //this.functions.showAlert(a.success, a.message);
            this.values.wishlistId[id] = true;
        } else {}
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
    getFilter() {
        let modal = this.modalCtrl.create(Filter, this.filter);
        modal.onDidDismiss(data => {
            if (this.values.applyFilter) {
                this.filter = this.values.filter;
                this.has_more_items = true;
                this.filter.page = 1;
                this.filter.opts = undefined;
                this.filter.component = undefined;
                this.service.getSearch(this.filter).then((results) => this.handleFilterResults(results));
            }
        });
        modal.present();
    }
    handleFilterResults(results) {
        this.products = results;
    }
    getSort() {
        let modal = this.modalCtrl.create(Sort, this.filter);
        modal.onDidDismiss(data => {
            if (this.values.applyFilter) {
                this.filter = this.values.filter;
                this.has_more_items = true;
                this.filter.page = 1;
                this.filter.opts = undefined;
                this.filter.component = undefined;
                this.service.getSearch(this.filter).then((results) => this.handleFilterResults(results));
            }
        });
        modal.present();
    }
    scrollingFun(e) {
        if (e.scrollTop > this.contentHandle.getContentDimensions().contentHeight) {
            if (document.querySelector(".tabbar")) document.querySelector(".tabbar")['style'].display = 'none';
            if (this.topOrBottom == "top") {
                this.contentBox.marginTop = 0;
            } else if (this.topOrBottom == "bottom") {
                this.contentBox.marginBottom = 0;
            }
        } else {
            if (document.querySelector(".tabbar")) document.querySelector(".tabbar")['style'].display = 'flex';
            if (this.topOrBottom == "top") {
                this.contentBox.marginTop = this.tabBarHeight;
            } else if (this.topOrBottom == "bottom") {
                this.contentBox.marginBottom = this.tabBarHeight;
            }
        } //if else
    }
    ionViewDidEnter() {
        this.topOrBottom = this.contentHandle._tabsPlacement;
        this.contentBox = document.querySelector(".scroll-content")['style'];
        if (this.topOrBottom == "top") {
            this.tabBarHeight = this.contentBox.marginTop;
        } else if (this.topOrBottom == "bottom") {
            this.tabBarHeight = this.contentBox.marginBottom;
        }
    }
}