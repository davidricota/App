import { Injectable } from '@angular/core';

@Injectable()
export class Values {

  count: number = 0;
  filter: any;
  isLoggedIn: boolean = false;
  customerName: string = "";
  customerId: number = null;
  listview: boolean = false;
  cart: Array<number> = [];
  filterUpdate: boolean = false;
  lan: any;
  logoutUrl: any;
  cartItem: any;
  cartNonce: any;
  avatar: any = "assets/image/icon.jpg";
  currency: any = "USD";
  data: any = {};
  dir: any = 'left';
  deviceId: any;
  platform: any;
  wishlistId: any = [];
  quantity: number = 2;
  max_price: any;
  onsale: boolean = false;
  newCollections: boolean = false;
  featuredProducts : boolean = false;
  cartLoadEnable: boolean = false;
  applyFilter: boolean = false;
  selectedFilter: any = {};
  price: any = {lower: 1, upper: 1000};
  attributes: any;
  attributeTerms: any = [];
  sortType: any;
  showSubcat: boolean = false;
  hideTabbar: boolean = false;
  hideCloseButton: boolean = false;
  loadDeals: boolean = false;

  constructor() {
  	this.filter = {};
    this.sortType = 0;
    this.logoutUrl = "";
  }
  updateCart(crt) {
       this.cartItem = crt.cart_contents;
       this.cart = [];
       this.count = 0;
       for (let item in crt.cart_contents) {
           this.cart[crt.cart_contents[item].product_id] = parseInt(crt.cart_contents[item].quantity);
           this.count += parseInt(crt.cart_contents[item].quantity);
       }
   }
   updateCartTwo(crt) {
       this.cart = [];
       this.count = 0;
       this.cartItem = crt;
       for (let item in crt) {
           this.cart[crt[item].product_id] = parseInt(crt[item].quantity);
           this.count += parseInt(crt[item].quantity);
       }
   }
 }