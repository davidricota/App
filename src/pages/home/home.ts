import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { Service } from '../../providers/service/service';
import { Values } from '../../providers/service/values';
import { Functions } from '../../providers/service/functions';
import { ProductsPage } from '../products/products';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { ProductPage } from '../product/product';

@Component({
    templateUrl: 'home.html'
})
export class Home {
    items: any;
    segment = 'categories';
    showCategories: boolean = true;
    showCoupons : boolean = false;
    showDeals : boolean = false;
    image: any;
    coupons: any;
    tabBarElement: any;

    constructor(public nav: NavController, public popoverCtrl: PopoverController, public service: Service, public values: Values, public functions: Functions) {
        this.items = [];
    }
    getCategory(id, name) {
        this.items.id = id;
        this.items.name = name;
        this.values.onsale = false;
        this.values.newCollections = false;
        this.values.featuredProducts = false;
        this.items.categories = this.service.categories;
        this.nav.push(ProductsPage, this.items);
    }
    getCart() {
        this.nav.push(CartPage);
    }
    getSearch() {
        this.nav.push(SearchPage);
    }
    mySlideOptions = {
        initialSlide: 1,
        loop: true,
        autoplay: 5800,
        pager: true
    }
    getProduct(id) {
        this.nav.push(ProductPage, id);
    }
    getAllCategories() {        
      this.nav.parent.select(1);
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
            this.values.wishlistId[id] = true;
        } else {
            console.log('error');
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
    viewAllBestoffers() {
        this.values.onsale = true;
        this.values.newCollections = false;
        this.values.featuredProducts = false;
        this.nav.push(ProductsPage);
    }
    viewAllFeatured() {
        this.values.onsale = false;
        this.values.newCollections = false;
        this.values.featuredProducts = true;
        this.nav.push(ProductsPage);
    }
    updateSchedule(event) {
        if(event._value == 'categories'){
          this.showCategories = true;
          this.showCoupons = false;
          this.showDeals =  false;
        }
        else if (event._value == 'coupons'){
          this.showCategories = false;
          this.showCoupons = true;
          this.showDeals =  false;
         }
        else if (event._value == 'deals'){
          this.showCategories = false;
          this.showCoupons = false;
          this.showDeals =  true;
         }

    }
    ionViewWillEnter() {
        if(document.querySelector(".tabbar")){
            this.tabBarElement = document.querySelector(".tabbar")['style'];
            this.tabBarElement.display = 'flex'; 
        }
    }
}