import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { WishlistService } from '../../../providers/service/wishlist-service';
import { Values } from '../../../providers/service/values';
import { Functions } from '../../../providers/service/functions';
import { CartPage } from '../../cart/cart';
import { ProductPage } from '../../product/product';
import { TabsPage } from '../../tabs/tabs';

@Component({
    templateUrl: 'wishlist.html'
})
export class WishlistPage {

    wishlist: any;
    error: any;
    tabBarElement: any;
    
    constructor(public viewCtrl: ViewController, public nav: NavController, public values: Values, public params: NavParams, public functions: Functions, public service: WishlistService) {
      if(document.querySelector(".tabbar"))
      this.tabBarElement = document.querySelector(".tabbar")['style'];
      this.service.loadWishlist()
            .then((results) => this.wishlist = results);

    }
    removeFromWishlist(id) {
        this.service.deleteItem(id).then((results) => this.updateWish(results, id));
    }
    updateWish(results, id) {
        if (results.status == "success") {
            this.service.loadWishlist().then((results) => this.wishlist = results);
            this.values.wishlistId.splice(id, 1);
        }
    }
    getCart() {
        this.nav.push(CartPage);
    }
    addToCartFromWishlist(id, type) {
        if (type == 'variable') {
            this.nav.push(ProductPage, id);
        } else {
            this.service.addToCart(id).then((results) => this.updateCart(results, id));
        }
    }
    updateCart(results, id) {
        if (results.error) {
            this.functions.showAlert("ERROR", "error");
        } else {
            this.service.deleteItem(id).then((results) => this.updateWishlist(results));
        }
    }
    updateWishlist(results) {
        this.service.loadWishlist().then((results) => this.wishlist = results);
        this.functions.showAlert("SUCCESS", "Item has been added to cart");
    }
    getProduct(id) {
        this.nav.push(ProductPage, id);
    }
    gohome() {
        this.nav.setRoot(TabsPage);
    }
    ionViewWillEnter() {
        if (this.values.hideTabbar) {
            if (document.querySelector(".tabbar")) this.tabBarElement.display = 'none';
        }
    }
    ionViewWillLeave() {
        if (this.values.hideTabbar) {
            if (document.querySelector(".tabbar")) this.tabBarElement.display = 'flex';
        }
    }
}