import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Config } from './config';
import { Values } from './values';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class CartService {
    data: any;
    url: any;
    cart: any;
    status: any;
    billing: any;
    headers: any;
    paymentMethods: any;
    loader: any;
    wishlist: any;
    cartData: any;
    categories: any;
    mainCategories: any;
    constructor(private reqhttp: HTTP, private http: Http, private config: Config, private values: Values, private loadingController: LoadingController) {
        this.mainCategories = [];
        this.reqhttp.setHeader(this.config.url, 'withCredentials', 'false');
        this.reqhttp.clearCookies();
    }
    loadCart() {
       return new Promise(resolve => {
           this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', this.config.options).map(res => res.json()).subscribe(data => {
               this.cart = data;
               this.values.cartNonce = data.cart_nonce;
               this.values.updateCart(this.cart);
               resolve(this.cart);
               this.reqhttp.clearCookies();
               this.reqhttp.get(this.config.setUrl('GET', '/wp-json/wc/v2/products/categories?', false), {}, {}).then(data => {
                   this.categories = JSON.parse(data.data);
                   this.mainCategories = [];
                   for (var i = 0; i < this.categories.length; i++) {
                       if (this.categories[i].parent == '0') {
                           this.mainCategories.push(this.categories[i]);
                       }
                   }
               });
           });
       });
   }
   deleteItem(item_key) {
       return new Promise(resolve => {
           this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_cart_item&item_key=' + item_key, this.config.options).map(res => res.json()).subscribe(data => {
               this.cart = data;
               this.values.updateCart(this.cart);
               resolve(this.cart);
           });
       });
   }
   checkout() {
       return new Promise(resolve => {
           this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', this.config.options).map(res => res.json()).subscribe(data => {
               this.billing = data;
               this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', this.config.options).map(res => res.json()).subscribe(data => {
                   resolve(data);
               });
               resolve(this.billing);
           });
       });
   }
   addToCart(id, key) {
       var params = new URLSearchParams();
       if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
           this.values.cartItem[key].quantity = 0
       } else {
           this.values.cartItem[key].quantity += 1
       };
       if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
           this.values.cart[id] = 0
       } else {
           this.values.cart[id] += 1
       };
       params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
       params.set('_wpnonce', this.values.cartNonce);
       params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
       params.set('update_cart', 'Update Cart');
       return new Promise(resolve => {
           this.http.post(this.config.url + '/cart/', params, this.config.options).map(res => res.json()).subscribe(data => {
               this.cart = data;
               this.values.updateCart(this.cart);
               resolve(this.cart);
           });
       });
   }
   deleteFromCart(id, key) {
       var params = new URLSearchParams();
       if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
           this.values.cartItem[key].quantity = 0;
       } else {
           this.values.cartItem[key].quantity -= 1;
       };
       if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
           this.values.cart[id] = 0
       } else {
           this.values.cart[id] -= 1
       };
       params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
       params.set('_wpnonce', this.values.cartNonce);
       params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
       params.set('update_cart', 'Update Cart');
       return new Promise(resolve => {
           this.http.post(this.config.url + '/cart/', params, this.config.options).map(res => res.json()).subscribe(data => {
               this.cart = data;
               this.values.updateCart(this.cart);
               resolve(this.cart);
           });
       });
   }
   submitCoupon(coupon) {
       var params = new URLSearchParams()
       params.append("coupon_code", coupon);
       return new Promise(resolve => {
           this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params, this.config.options).subscribe(data => {
               this.status = data;
               resolve(this.status);
           });
       });
   }
   removeCoupon(coupon) {
       var params = new URLSearchParams()
       params.append("coupon", coupon);
       return new Promise(resolve => {
           this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_coupon', params, this.config.options).subscribe(data => {
               this.status = data;
               resolve(this.status);
           });
       });
   }
   updateShipping(method) {
       var params = new URLSearchParams()
       params.append("shipping_method[0]", method);
       return new Promise(resolve => {
           this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_shipping_method', params, this.config.options).map(res => res.json()).subscribe(data => {
               this.cart = data;
               this.values.cartNonce = data.cart_nonce;
               this.values.updateCart(this.cart);
               resolve(this.cart);
           });
       });
   }
   loadWishlist() {
       var params = new URLSearchParams();
       params.append("customer_id", this.values.customerId.toString());
       return new Promise(resolve => {
           this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, this.config.options).map(res => res.json()).subscribe(data => {
               this.wishlist = data;
               resolve(this.wishlist);
           });
       });
   }
   deleteWishlistItem(id) {
       var params = new URLSearchParams();
       params.append("product_id", id);
       params.append("customer_id", this.values.customerId.toString());
       return new Promise(resolve => {
           this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, this.config.options).map(res => res.json()).subscribe(data => {
               this.wishlist = data;
               resolve(this.wishlist);
           });
       });
   }
   addToCartFromWishlist(id) {
       var params = new URLSearchParams();
       params.append("quantity", "1");
       params.append("product_id", id);
       return new Promise(resolve => {
           this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', params, this.config.options).map(res => res.json()).subscribe(data => {
               this.cartData = data;
               this.values.cartNonce = data.cart_nonce;
               this.values.updateCartTwo(data.cart);
               resolve(this.cartData);
           });
       });
   }
   addToWishlist(id) {
       return new Promise(resolve => {
           var params = new URLSearchParams();
           params.append("product_id", id);
           params.append("customer_id", this.values.customerId.toString());
           this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, this.config.options).map(res => res.json()).subscribe(data => {
               this.status = data;
               resolve(this.status);
           });
       });
   }
   presentLoading(text) {
       this.loader = this.loadingController.create({
           content: text,
       });
       this.loader.present();
   }
   dismissLoading() {
       this.loader.dismiss();
   }
}