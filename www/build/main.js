webpackJsonp([0],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Values; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Values = /** @class */ (function () {
    function Values() {
        this.count = 0;
        this.isLoggedIn = false;
        this.customerName = "";
        this.customerId = null;
        this.listview = false;
        this.cart = [];
        this.filterUpdate = false;
        this.avatar = "assets/image/icon.jpg";
        this.currency = "USD";
        this.data = {};
        this.dir = 'left';
        this.wishlistId = [];
        this.quantity = 2;
        this.onsale = false;
        this.newCollections = false;
        this.featuredProducts = false;
        this.cartLoadEnable = false;
        this.applyFilter = false;
        this.selectedFilter = {};
        this.price = { lower: 1, upper: 1000 };
        this.attributeTerms = [];
        this.showSubcat = false;
        this.hideTabbar = false;
        this.hideCloseButton = false;
        this.loadDeals = false;
        this.filter = {};
        this.sortType = 0;
        this.logoutUrl = "";
    }
    Values.prototype.updateCart = function (crt) {
        this.cartItem = crt.cart_contents;
        this.cart = [];
        this.count = 0;
        for (var item in crt.cart_contents) {
            this.cart[crt.cart_contents[item].product_id] = parseInt(crt.cart_contents[item].quantity);
            this.count += parseInt(crt.cart_contents[item].quantity);
        }
    };
    Values.prototype.updateCartTwo = function (crt) {
        this.cart = [];
        this.count = 0;
        this.cartItem = crt;
        for (var item in crt) {
            this.cart[crt[item].product_id] = parseInt(crt[item].quantity);
            this.count += parseInt(crt[item].quantity);
        }
    };
    Values = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Values);
    return Values;
}());

//# sourceMappingURL=values.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgotten_forgotten__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_service_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_tabs__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
var AccountLogin = /** @class */ (function () {
    function AccountLogin(nav, service, functions, config, values /*, public fb: Facebook, public googlePlus: GooglePlus*/) {
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.config = config;
        this.values = values; /*, public fb: Facebook, public googlePlus: GooglePlus*/
        this.disableSubmit = false;
        this.showPasswordEnable = false;
        this.facebookSpinner = false;
        this.googleSpinner = false;
        this.loginData = [];
        this.LogIn = "LogIn";
    }
    AccountLogin.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.LogIn = "Logging In";
            this.service.login(this.loginData)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    AccountLogin.prototype.validateForm = function () {
        if (this.loginData.username == undefined || this.loginData.username == "") {
            return false;
        }
        if (this.loginData.password == undefined || this.loginData.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    AccountLogin.prototype.handleResults = function (results) {
        this.disableSubmit = false;
        this.LogIn = "LogIn";
        if (!results.errors && results.data) {
            this.functions.showAlert('Success', 'You have successfully logged in');
            if (this.values.cartLoadEnable) {
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
            }
            else {
                if (document.querySelector(".tabbar"))
                    this.nav.parent.select(0);
                else
                    this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a" /* TabsPage */]);
            }
        }
        else if (results.errors) {
            this.functions.showAlert('Error', 'invalid username/password');
        }
    };
    AccountLogin.prototype.forgotten = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__forgotten_forgotten__["a" /* AccountForgotten */]);
    };
    AccountLogin.prototype.dismiss = function () {
        this.nav.pop();
    };
    AccountLogin.prototype.showPassword = function () {
        this.showPasswordEnable = true;
    };
    AccountLogin.prototype.hidePassword = function () {
        this.showPasswordEnable = false;
    };
    /* facebookLogin() {
           this.facebookSpinner = true;
          this.fb.login(['public_profile', 'user_friends', 'email']).then((response) => {
               this.service.sendToken(response.authResponse.accessToken).then((results) => {
                   this.facebookSpinner = false;
                   this.nav.setRoot(TabsPage);
                   
                   this.functions.showAlert('success', 'Logged in successfully');
               });
           }).catch((error) => {
               console.log(error)
               this.facebookSpinner = false;
               this.functions.showAlert('Error', error);
           });
       }
       gmailLogin() {
           this.googleSpinner = true;
           this.googlePlus.login({
               'scopes': '',
               'webClientId': this.config.webClientId,
               'offline': true
           }).then((res) => {
                this.gres = res;
                console.log(this.gres);
               this.googleSpinner = false;
               this.values.avatar = res.imageUrl;
               
               this.service.googleLogin(res).then((results) => {
                   this.functions.showAlert('success', 'Logged in successfully');
                   this.nav.setRoot(TabsPage);
               });
           }).catch((err) => {
               this.googleSpinner = false;
               this.error = err;
               this.functions.showAlert('Error', err);
               console.error(err);
           });
       }*/
    AccountLogin.prototype.signup = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* AccountRegister */]);
    };
    AccountLogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/account/login/login.html"*/'<ion-header no-border class="login-header">\n    <ion-navbar> <button ion-button menuToggle style="color: #ffffff;">\n      <ion-icon name="menu">\n      </ion-icon>\n    </button> </ion-navbar>\n</ion-header>\n<ion-content class="account-login">\n    <div class="shop-info">\n        <h1 text-uppercase>{{"Shop name" | translate}}</h1>\n        <h2>{{"The most fulfilling shopping experience" | translate}}.</h2>\n    </div>\n    <!--div>\n        <ion-row class="login-div">\n            <ion-col class="col1"> <button ion-button outline full type="submit" text-uppercase [disabled]="disableSubmit" (click)="facebookLogin()">{{"Facebook" | translate}}</button> </ion-col>\n            <ion-col class="col2"> <button ion-button outline full type="submit" text-uppercase [disabled]="disableSubmit" (click)="gmailLogin()">{{"Google" | translate}}</button> </ion-col>\n        </ion-row>\n    </div-->\n    <div class="or-button"> <br> <br> <button ion-button block clear type="submit" class="button button-block button-default">{{"Or login via e-mail" | translate}}\n    </button> </div>\n    <div>\n        <form #f="ngForm" class="login">\n            <ion-list>\n                <ion-item>\n                    <ion-label fixed>{{"Username" | translate}}</ion-label>\n                    <ion-input required type="email" [(ngModel)]="loginData.username" name="firstname"> </ion-input>\n                </ion-item>\n                <ion-item *ngIf="!showPasswordEnable">\n                    <ion-label fixed>{{"Password" | translate}}</ion-label>\n                    <ion-input required type="password" [(ngModel)]="loginData.password" name="password"> </ion-input>\n                    <ion-icon *ngIf="loginData.password" item-right name="ios-eye" (click)="showPassword()" style="font-size: 2.5rem;z-index:10"></ion-icon>\n                </ion-item>\n                <ion-item *ngIf="showPasswordEnable">\n                    <ion-label fixed>{{"Password" | translate}}</ion-label>\n                    <ion-input required type="text" [(ngModel)]="loginData.password" name="password"> </ion-input>\n                    <ion-icon item-right name="ios-eye-off" (click)="hidePassword()" style="font-size: 2.5rem;z-index:10"></ion-icon>\n                </ion-item>\n                <h2 tappable (click)="forgotten()">{{"Forgot Password" | translate}}?</h2>\n            </ion-list> <button ion-button outline full type="submit" text-uppercase [disabled]="disableSubmit" (click)="login()">{{LogIn | translate}}\n      </button> <br> </form>\n        <div class="signup">\n            <h2>{{"Don\'t have an account" | translate}}? <a (click)="signup()"> {{"SIGN UP" | translate}}</a></h2>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/account/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_8__providers_service_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */] /*, public fb: Facebook, public googlePlus: GooglePlus*/])
    ], AccountLogin);
    return AccountLogin;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForgotten; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountForgotten = /** @class */ (function () {
    function AccountForgotten(nav, service, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.Reset = "Send reset link";
        this.loadForgotten = null;
        this.forgottenData = [];
        this.service.passwordResetNonce()
            .then(function (results) { return _this.handleNonce(results); });
    }
    AccountForgotten.prototype.forgotten = function (email) {
        var _this = this;
        if (this.validateForm()) {
            this.Reset = "Sending";
            this.disableSubmit = true;
            this.service.passwordreset(email, this.nonce, this.url)
                .then(function (results) { return _this.handleResult(results, email); });
        }
    };
    AccountForgotten.prototype.validateForm = function () {
        if (this.forgottenData.email == undefined || this.forgottenData.email == "") {
            return false;
        }
        else {
            return true;
        }
    };
    AccountForgotten.prototype.handleNonce = function (results) {
        this.nonce = results.nonce;
        this.url = results.url;
    };
    AccountForgotten.prototype.handleResult = function (results, email) {
        this.Reset = "Send reset link";
        this.disableSubmit = false;
        this.functions.showAlert("SUCCESS", "An email with password reset link has been sent to your mail address " + email);
        this.nav.pop();
    };
    AccountForgotten = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/account/forgotten/forgotten.html"*/'<ion-header no-border class="forgot-header">\n    <ion-navbar color="header"> </ion-navbar>\n</ion-header>\n<ion-content class="forgotten">\n    <div class="margin">\n        <form #f="ngForm">\n            <h4>{{"Forgot Password" | translate}} ?</h4>\n            <h5>{{"It\'s okay, Type in your registered email id in the field and we will send you a link to reset your password" | translate}} </h5>\n            <ion-item style="margin-top: 30px;">\n                <ion-label fixed>{{"Email" | translate}}</ion-label>\n                <ion-input required type="email" [(ngModel)]="forgottenData.email" name="email"> </ion-input>\n            </ion-item> <button ion-button block outline [disabled]="disableSubmit" (click)="forgotten(forgottenData.email)">{{Reset | translate}}\n      </button> </form>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/account/forgotten/forgotten.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], AccountForgotten);
    return AccountForgotten;
}());

//# sourceMappingURL=forgotten.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_products__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_product__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Home = /** @class */ (function () {
    function Home(nav, popoverCtrl, service, values, functions) {
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.segment = 'categories';
        this.showCategories = true;
        this.showCoupons = false;
        this.showDeals = false;
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.items = [];
    }
    Home.prototype.getCategory = function (id, name) {
        this.items.id = id;
        this.items.name = name;
        this.values.onsale = false;
        this.values.newCollections = false;
        this.values.featuredProducts = false;
        this.items.categories = this.service.categories;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */], this.items);
    };
    Home.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    Home.prototype.getSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
    };
    Home.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__product_product__["a" /* ProductPage */], id);
    };
    Home.prototype.getAllCategories = function () {
        this.nav.parent.select(1);
    };
    Home.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.functions.showAlert("Warning", "You must login to add product to wishlist");
        }
    };
    Home.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else {
            console.log('error');
        }
    };
    Home.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    Home.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    Home.prototype.viewAllBestoffers = function () {
        this.values.onsale = true;
        this.values.newCollections = false;
        this.values.featuredProducts = false;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */]);
    };
    Home.prototype.viewAllFeatured = function () {
        this.values.onsale = false;
        this.values.newCollections = false;
        this.values.featuredProducts = true;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */]);
    };
    Home.prototype.updateSchedule = function (event) {
        if (event._value == 'categories') {
            this.showCategories = true;
            this.showCoupons = false;
            this.showDeals = false;
        }
        else if (event._value == 'coupons') {
            this.showCategories = false;
            this.showCoupons = true;
            this.showDeals = false;
        }
        else if (event._value == 'deals') {
            this.showCategories = false;
            this.showCoupons = false;
            this.showDeals = true;
        }
    };
    Home.prototype.ionViewWillEnter = function () {
        if (document.querySelector(".tabbar")) {
            this.tabBarElement = document.querySelector(".tabbar")['style'];
            this.tabBarElement.display = 'flex';
        }
    };
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/home/home.html"*/'<ion-header no-border class="home-header">\n    <ion-navbar color="header"> <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n        <ion-title text-center>{{"Home" | translate}} </ion-title>\n        <ion-buttons end> <button ion-button icon-only light color="shadowlite" (click)="getSearch()">\n        <ion-icon ios="ios-search" md="md-search">\n        </ion-icon>\n      </button> <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n        <ion-icon class="ion-md-cart item-icon">\n        </ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count != 0">{{values.count}}\n        </ion-badge>\n      </button> </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content class="home">\n    <div *ngIf="service?.banners" class="home-banners">\n        <ion-slides pager="true" loop="true" autoplay="5800">\n            <ion-slide *ngFor=\'let value of service.banners\'> <img src="{{value}}"> </ion-slide>\n        </ion-slides>\n    </div>\n    <div class="segment" *ngIf="service.categories">\n        <ion-segment [(ngModel)]="segment" (ionChange)="updateSchedule($event)">\n            <ion-segment-button tappable value="categories">\n                <ion-label text-uppercase>{{"Categories" | translate}}</ion-label>\n            </ion-segment-button>\n            <ion-segment-button tappable value="coupons">\n                <ion-label text-uppercase>{{"Featured" | translate}} </ion-label>\n            </ion-segment-button>\n            <ion-segment-button tappable value="deals">\n                <ion-label text-uppercase>{{"Best Offers" | translate}}</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div *ngIf="showCategories" class="category-class">\n        <ion-spinner *ngIf="!service?.categories" name="crescent"> </ion-spinner>\n\n        <!--div class="shop-name">\n            <ion-item no-lines> \n                <b color="side-heading-color" text-uppercase>{{"Shop By Category"| translate}}\n                </b> \n            </ion-item>\n        </div-->\n        <div *ngIf="service.mainCategories" class="main-categories">\n            <ion-row class="row unlimited-items">\n                <ion-col class="col" *ngFor="let item of service.mainCategories">\n                    <a (click)="getCategory(item.id, item.slug, item.name)">\n                        <ion-card>\n                            <ion-card-content> \n                                <img *ngIf="item.image?.src" src="{{item.image.src}}" /> \n                            </ion-card-content>\n                            <div text-center>\n                                <ion-label text-uppercase [innerHTML]="item.name"> </ion-label>\n                            </div>\n                        </ion-card>\n                    </a>\n                </ion-col>\n            </ion-row>\n        </div>\n\n        \n        <!--div *ngIf="service?.categories">\n            <ion-item no-lines class="item-name">\n                <ion-label>{{"All categories" | translate}}</ion-label> <button ion-button small item-right (click)="getAllCategories()">See All</button> </ion-item>\n            <div *ngIf="service.mainCategories" class="category-class">\n                <div tappable *ngFor="let item of service.mainCategories" class="container"> <img *ngIf="item.image?.src" src="{{item.image.src}}" (click)="getCategory(item.id, item.name)" /> <img *ngIf="!item.image?.src" src="assets/image/category-background.jpg" (click)="getCategory(item.id, item.name)" />\n                    <h5 class="centered" (click)="getCategory(item.id, item.name)" [innerHTML]="item.name"></h5>\n                </div>\n            </div>\n        </div-->\n    </div>\n    <div *ngIf="showCoupons">\n        <ion-spinner *ngIf="!service.featuredProduct" name="crescent"> </ion-spinner>\n        <div *ngIf="service.featuredProduct" class="products-listing">\n            <ion-item no-lines class="item-name">\n                <ion-label>{{"Featured products" | translate}} </ion-label> <button ion-button small item-right (click)="viewAllFeatured()">{{"See All" | translate}}</button> </ion-item>\n            <div class="grid">\n                <ion-row class="row unlimited-items">\n                    <ion-col class="col" *ngFor="let item of service.featuredProduct">\n                        <ion-card [ngClass]="{\'no-stock-active\': !item.in_stock}">\n                            <ion-card-content class="stock"> <img tappable src="{{item.images[0].src}}" (click)="getProduct(item.id)">\n                                <div class="no-stock">\n                                    <!--button ion-button color="danger" *ngIf="!item.in_stock">{{"No Stock" | translate}}\n                           </button-->\n                                </div>\n                                <div *ngIf="item.sale_price && ((item.regular_price - item.sale_price) / item.regular_price*100) >= \'1\'" class="offer-tag" class="offer-tag"> <button ion-button small text-wrap>\n                            <span text-wrap>{{(item.regular_price - item.sale_price) / item.regular_price*100 | number : \'1.0-0\'}}% {{"OFF" | translate}}</span></button> </div>\n                                <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n                                <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n                            </ion-card-content>\n                            <div tappable (click)="getProduct(item.id)" class="card-name">\n                                <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n                                <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n                            </div>\n                            <ion-label> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}</span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}</span> <span class="price-delete" *ngIf="item.sale_price"><del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}} </del> </span> </ion-label>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </div> <br>\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="service.has_more_items">\n                <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading more items..\' | translate}}"> </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </div>\n    </div>\n    <div *ngIf="showDeals" class="deals">\n        <ion-spinner *ngIf="values.loadDeals" name="crescent"> </ion-spinner>\n        <div *ngIf="!values.loadDeals">\n            <div *ngFor="let cat of service.mainCategories">\n                <h2 *ngIf="service.deals[cat.name]?.length">{{"Offers on" | translate}} <span [innerHTML]="cat.name"></span></h2>\n                <div class="scroll-products" *ngIf="service.deals[cat.name]?.length"> <a *ngFor="let item of service.deals[cat.name]">\n                <img src="{{item.images[0].src}}" (click)="getProduct(item.id)"/>\n                  <h5 *ngIf="item.title">{{item.title}} </h5>\n                  <h5 *ngIf="item.name">{{item.name}} </h5>\n                  <ion-label> \n                    <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}} </span>\n                    <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}</span> \n                    <span *ngIf="item.sale_price"><del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}</del>  </span> \n                    <!--h3 style="font-size: 14px;color: #62d200;padding: 0;margin: 5px 0 0 0;" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}% Off</h3-->\n                    <h3 style="font-size: 13px;color: #d33;padding: 0;margin: 5px 0 0 0;"> Save {{(item.regular_price - item.price) | currency:values.currency:symbol:\'1.2-2\'}}</h3> \n                  </ion-label>\n              </a> </div>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], Home);
    return Home;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_wishlist_wishlist__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopoverPage = /** @class */ (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl, values) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.values = values;
    }
    PopoverPage.prototype.gotoWishlist = function () {
        this.values.hideTabbar = true;
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__account_wishlist_wishlist__["a" /* WishlistPage */]);
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list style=\"margin:0\">\n      <button ion-item (click)=\"gotoWishlist()\">{{\"My\" | translate}} {{\"Wishlist\" | translate}}</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=about-popover.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccount; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_rate__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_email_composer__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__address_address__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_information_my_information__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__orders_orders__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wishlist_wishlist__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__post_post__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyAccount = /** @class */ (function () {
    function MyAccount(viewCtrl, appRate, socialSharing, nav, service, values, emailComposer, config) {
        this.viewCtrl = viewCtrl;
        this.appRate = appRate;
        this.socialSharing = socialSharing;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.emailComposer = emailComposer;
        this.config = config;
        this.showtab = false;
    }
    MyAccount.prototype.hidetabs = function () {
        this.showtab = false;
        if (document.querySelector(".tabbar"))
            this.tabBarElement = document.querySelector(".tabbar")['style'].display = 'none';
    };
    MyAccount.prototype.showtabs = function () {
        this.showtab = true;
        if (document.querySelector(".tabbar"))
            this.tabBarElement = document.querySelector(".tabbar")['style'].display = 'flex';
    };
    MyAccount.prototype.Address = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__address_address__["a" /* Address */]);
    };
    MyAccount.prototype.orders = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__orders_orders__["a" /* Orders */]);
    };
    MyAccount.prototype.wishlist = function () {
        this.values.hideTabbar = false;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__wishlist_wishlist__["a" /* WishlistPage */]);
    };
    MyAccount.prototype.myInfo = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__my_information_my_information__["a" /* MyInformation */]);
    };
    MyAccount.prototype.logout = function () {
        this.service.logout();
        if (!this.values.hideCloseButton) {
            this.nav.pop();
        }
    };
    MyAccount.prototype.login = function () {
        this.values.cartLoadEnable = false;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* AccountLogin */]);
    };
    MyAccount.prototype.sinuUp = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_13__register_register__["a" /* AccountRegister */]);
    };
    MyAccount.prototype.rateApp = function () {
        this.appRate.preferences.storeAppURL = {
            ios: this.config.appRateIosAppId,
            android: this.config.appRateAndroidLink,
            windows: 'ms-windows-store://review/?ProductId=' + this.config.appRateWindowsId
        };
        this.appRate.promptForRating(true);
    };
    MyAccount.prototype.shareApp = function () {
        var options = {
            message: this.config.shareAppMessage,
            subject: this.config.shareAppSubject,
            files: ['', ''],
            url: this.config.shareAppURL,
            chooserTitle: this.config.shareAppChooserTitle
        };
        this.socialSharing.shareWithOptions(options);
    };
    MyAccount.prototype.contact = function () {
        var email = {
            to: this.config.supportEmail,
            subject: '',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    MyAccount.prototype.post = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_14__post_post__["a" /* Post */], id);
    };
    MyAccount.prototype.dismiss = function () {
        this.nav.pop();
    };
    MyAccount.prototype.ionViewWillEnter = function () {
        if (document.querySelector(".tabbar")) {
            this.tabBarElement = document.querySelector(".tabbar")['style'];
            this.tabBarElement.display = 'flex';
            this.showtab = true;
        }
    };
    MyAccount = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/account/my-account/my-account.html"*/'<ion-header no-border class="login-header">\n    <ion-navbar> <button ion-button menuToggle style="color: white;">\n      <ion-icon name="menu">\n      </ion-icon>\n    </button> </ion-navbar>\n</ion-header>\n<ion-content class="my-account" [ngClass]="{\'hideTab\' : !showtab, \'showTab\' : showtab}">\n    <div *ngIf="values.isLoggedIn">\n        <div class="account-header"> <span *ngIf="values.avatar"><img src="{{values.avatar}}"></span>\n            <h2 *ngIf="values.customerName">{{values.customerName}}</h2>\n        </div>\n        <div class="logged-in-contents">\n            <ion-row>\n                <ion-col (click)="Address()">\n                    <h1>\n                        <ion-icon item-left ios="ios-person-add" md="md-person-add"></ion-icon>\n                    </h1>\n                    <h2> {{"Address" | translate}} </h2>\n                </ion-col>\n                <ion-col (click)="orders()">\n                    <h1>\n                        <ion-icon item-left ios="ios-list-box" md="md-list-box"></ion-icon>\n                    </h1>\n                    <h2> {{"Orders" | translate}} </h2>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col (click)="wishlist()">\n                    <h1>\n                        <ion-icon ios="ios-heart" md="md-heart" item-left></ion-icon>\n                    </h1>\n                    <h2> {{"Wishlist" | translate}} </h2>\n                </ion-col>\n                <ion-col (click)="myInfo()">\n                    <h1>\n                        <ion-icon ios="ios-information-circle" md="ios-information-circle" item-left></ion-icon>\n                    </h1>\n                    <h2> My {{"Profile" | translate}} </h2>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n    <div *ngIf="!values.isLoggedIn">\n        <div class="shop-info">\n            <h1 text-uppercase>{{"Shop name" | translate}}</h1>\n            <h2>{{"The most fulfilling shopping experience" | translate}}.</h2>\n        </div>\n        <div class="login-div">\n            <ion-row>\n                <ion-col> <button ion-button outline block text-uppercase (click)="login()">{{"LogIn" | translate}}</button> </ion-col>\n                <ion-col> <button ion-button outline block text-uppercase (click)="sinuUp()">{{"Sign Up" | translate}}</button> </ion-col>\n            </ion-row>\n            <!--div style="margin: 5px;"> <button ion-button outline block text-uppercase (click)="login()">{{"Connect with facebook" | translate}}</button> </div-->\n        </div>\n    </div>\n    <div class="footer">\n        <ion-row>\n            <ion-col tappable>\n                <h6 (click)="shareApp()">{{"Share App" | translate}}</h6>\n            </ion-col>\n            <ion-col tappable>\n                <h6 (click)="contact()">{{"Feedback" | translate}}</h6>\n            </ion-col>\n            <ion-col tappable>\n                <h6 (click)="rateApp()">{{"Rate App" | translate}}</h6>\n            </ion-col>\n        </ion-row>\n        <ion-row style="padding:8px 3px 0 3px;">\n            <ion-col tappable>\n                <h6 (click)="contact()">{{"Contact Us" | translate}}</h6>\n            </ion-col>\n            <ion-col tappable>\n                <h6 (click)="post(this.values.data.pages.terms)">{{"Terms" | translate}}</h6>\n            </ion-col>\n            <ion-col tappable>\n                <h6 (click)="post(this.values.data.pages.about)">{{"About us" | translate}}</h6>\n            </ion-col>\n        </ion-row>\n        <div class="tabsElement">\n            <ion-item (click)="showtabs()" *ngIf="!showtab">\n                <ion-icon name="ios-arrow-up"></ion-icon>\n            </ion-item>\n            <ion-item (click)="hidetabs()" *ngIf="showtab">\n                <ion-icon name="ios-arrow-down"></ion-icon>\n            </ion-item>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/account/my-account/my-account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_rate__["a" /* AppRate */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_3__providers_service_config__["a" /* Config */]])
    ], MyAccount);
    return MyAccount;
}());

//# sourceMappingURL=my-account.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_address_form_edit_address_form__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Address = /** @class */ (function () {
    function Address(nav, service, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.service.getAddress()
            .then(function (results) { return _this.addresses = results; });
    }
    Address.prototype.editAddress = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__edit_address_form_edit_address_form__["a" /* EditAddressForm */], this.addresses);
    };
    Address = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/account/address/address.html"*/'<ion-header no-border class="address-header">\n    <ion-navbar color="header"> <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n        <ion-title text-wrap text-center>{{"Address" | translate}} </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="account-address">\n    <ion-spinner *ngIf="!addresses" name="crescent"> </ion-spinner>\n    <div *ngIf="addresses" class="address">\n        <div *ngIf="addresses.billing" class="address-border">\n            <ion-item>\n                <h1>{{"Billing Address" | translate}} </h1>\n                <h2>{{addresses.billing.first_name}} {{addresses.billing.last_name}} </h2>\n                <h2>{{addresses.billing.phone}} </h2>\n                <h2>{{addresses.billing.email}} </h2>\n                <h2>{{addresses.billing.address_1}} </h2>\n                <h2>{{addresses.billing.address_2}} </h2>\n                <h2>{{addresses.billing.city}} {{addresses.billing.state}} </h2>\n                <h2>{{addresses.billing.country}} {{addresses.billing.postcode}} </h2>\n            </ion-item>\n        </div>\n        <div *ngIf="addresses.shipping" class="address-border">\n            <ion-item>\n                <h1>{{"Shipping Address" | translate}} </h1>\n                <h2>{{addresses.shipping.first_name}} {{addresses.shipping.last_name}} </h2>\n                <h2>{{addresses.shipping.phone}} </h2>\n                <h2>{{addresses.shipping.address_1}} </h2>\n                <h2>{{addresses.shipping.address_2}} </h2>\n                <h2>{{addresses.shipping.city}} {{addresses.shipping.state}} </h2>\n                <h2>{{addresses.shipping.country}} {{addresses.shipping.postcode}} </h2>\n            </ion-item>\n        </div>\n        <div class="margin"> <button ion-button block color="button-color" type="submit" class="button button-block button-default" (click)="editAddress()">{{"Edit Address" | translate}}\n      </button> </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/account/address/address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], Address);
    return Address;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details_order_details__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Orders = /** @class */ (function () {
    function Orders(nav, service, values, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.page = 1;
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.quantity = "1";
        this.filter.customer = this.values.customerId.toString();
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    }
    Orders.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    Orders.prototype.handleMore = function (results, infiniteScroll) {
        this.filter.page += 1;
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.orders.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    Orders.prototype.getOrderDetails = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__order_details_order_details__["a" /* OrderDetails */], id);
    };
    Orders.prototype.cancelOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "status": "cancelled"
        }, id)
            .then(function (results) { return _this.handleCancelOrder(results); });
    };
    Orders.prototype.handleCancelOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been cancelled");
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    Orders.prototype.reOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "status": "pending"
        }, id)
            .then(function (results) { return _this.handleReOrder(results); });
    };
    Orders.prototype.handleReOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been placed successfully");
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    Orders = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/account/orders/orders.html"*/'<ion-header no-border>\n    <ion-navbar color="header"> <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n        <ion-title text-center style="margin-right:35px"> {{"Last Orders" | translate}} </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="account-order">\n    <ion-spinner *ngIf="!orders" name="crescent"> </ion-spinner>\n    <div *ngIf="orders">\n        <div class="no-orders" *ngIf="orders.length == 0">\n            <h4 text-center no-lines>\n                <ion-icon name="logo-buffer"></ion-icon> <button ion-button full clear>{{"There are no orders" | translate}}.\n      </button> </h4>\n        </div>\n        <div *ngIf="orders.length">\n            <div *ngFor="let item of orders" class="order-box">\n                <ion-item>\n                    <div class="row-line">\n                        <ion-row>\n                            <ion-col>\n                                <h2> {{"Order ID" | translate}} </h2>\n                            </ion-col>\n                            <ion-col>\n                                <h2> {{item.number}} </h2>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col>\n                                <h2> {{"Date" | translate}} </h2>\n                            </ion-col>\n                            <ion-col>\n                                <h2> {{item.date_created | date: \'dd/MM/yyyy\'}} </h2>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col>\n                                <h2> {{"Price" | translate}} </h2>\n                            </ion-col>\n                            <ion-col>\n                                <h2> {{1*item.total}} </h2>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col>\n                                <h2> {{"Status" | translate}} </h2>\n                            </ion-col>\n                            <ion-col>\n                                <h2 style="color: green" text-capitalize *ngIf="item.status == \'processing\' || item.status == \'completed\' || item.status == \'refunded\'"> {{item.status}} </h2>\n                                <h2 style="color: red" text-capitalize *ngIf="item.status == \'cancelled\' || item.status == \'failed\'"> {{item.status}} </h2>\n                                <h2 style="color: #c3ad00" text-capitalize *ngIf="item.status == \'on-hold\' || item.status == \'pending\'"> {{item.status}} </h2>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                    <ion-row class="row-buttons">\n                        <ion-col no-padding width-50> <button ion-button icon-left clear no-margin color="button-color" small text-uppercase icon-only class="has-icon icon-only" (click)="getOrderDetails(item.id)">\n              <ion-icon name="ios-eye">\n              </ion-icon>\n              {{"View Details" | translate}} \n            </button> </ion-col>\n                        <ion-col no-padding width-50> <button *ngIf="item.status == \'pending\'" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="cancelOrder(item.id)">    \n              <ion-icon ios="ios-close" md="md-close">\n              </ion-icon>     \n              {{"Cancel" | translate}} \n            </button> <button *ngIf="item.status == \'cancelled\'" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="reOrder(item.id)">\n              <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle">\n              </ion-icon>         \n              {{"Reorder" | translate}} \n            </button> </ion-col>\n                    </ion-row>\n                </ion-item>\n            </div>\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n                <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading more items..\' | translate}}"> </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/account/orders/orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], Orders);
    return Orders;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_filter__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sort_sort__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SearchPage = /** @class */ (function () {
    function SearchPage(mainservice, modalCtrl, nav, service, values, params, functions) {
        this.mainservice = mainservice;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.shouldShowCancel = true;
        this.loading = false;
        this.hidecategory = false;
        this.subcat = false;
        this.filter = {};
        this.values.filter = {};
        this.options = [];
        this.quantity = "1";
        this.filter.page = 1;
        this.items = [];
        this.popularSearches = [];
    }
    SearchPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SearchPage.prototype.onInput = function ($event) {
        var _this = this;
        this.loading = true;
        this.hidecategory = true;
        this.filter.page = 1;
        this.filter.search = $event.srcElement.value;
        this.values.filter = {};
        this.searchedName = $event.srcElement.value;
        this.service.getSearch(this.filter).then(function (results) {
            _this.loading = false;
            _this.products = results;
        });
    };
    SearchPage.prototype.getCategory = function (id, image, name) {
        this.values.onsale = false;
        this.values.newCollections = false;
        this.values.featuredProducts = false;
        this.items.id = id;
        this.items.image = image;
        this.items.name = name;
        this.items.categories = this.service.categories;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__products_products__["a" /* ProductsPage */], this.items);
    };
    SearchPage.prototype.getSubCategoryDropdown = function (id, name) {
        this.subCategories = "";
        this.subCategories = [];
        for (var i = 0; i < this.mainservice.categories.length; i++) {
            if (this.mainservice.categories[i].parent == id) {
                this.subCategories.push(this.mainservice.categories[i]);
            }
            this.subcat = true;
            this.catId = id;
        }
    };
    SearchPage.prototype.getSubCategoryDropup = function (id) {
        if (id == this.catId) {
            this.subCategories = "";
            this.subcat = false;
            this.catId = "";
        }
        else {
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
    };
    SearchPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
        this.hidecategory = false;
    };
    SearchPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], id);
    };
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getSearch(this.filter).then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    SearchPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    SearchPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id).then(function (results) { return _this.status = results; });
    };
    SearchPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], id);
        }
        else {
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(":");
                text += '"' + res[0] + '":"' + res[1] + '",';
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then(function (results) { return _this.updateCart(results); });
        }
    };
    SearchPage.prototype.updateCart = function (a) { };
    SearchPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    SearchPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    SearchPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.functions.showAlert("Warning", "You must login to add product to wishlist");
        }
    };
    SearchPage.prototype.update = function (results, id) {
        if (results.success == "Success") {
            //this.functions.showAlert(a.success, a.message);
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    SearchPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    SearchPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    SearchPage.prototype.getFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__filter_filter__["a" /* Filter */], this.filter);
        modal.onDidDismiss(function (data) {
            if (_this.values.applyFilter) {
                _this.filter = _this.values.filter;
                _this.has_more_items = true;
                _this.filter.page = 1;
                _this.filter.opts = undefined;
                _this.filter.component = undefined;
                _this.service.getSearch(_this.filter).then(function (results) { return _this.handleFilterResults(results); });
            }
        });
        modal.present();
    };
    SearchPage.prototype.handleFilterResults = function (results) {
        this.products = results;
    };
    SearchPage.prototype.getSort = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__sort_sort__["a" /* Sort */], this.filter);
        modal.onDidDismiss(function (data) {
            if (_this.values.applyFilter) {
                _this.filter = _this.values.filter;
                _this.has_more_items = true;
                _this.filter.page = 1;
                _this.filter.opts = undefined;
                _this.filter.component = undefined;
                _this.service.getSearch(_this.filter).then(function (results) { return _this.handleFilterResults(results); });
            }
        });
        modal.present();
    };
    SearchPage.prototype.scrollingFun = function (e) {
        if (e.scrollTop > this.contentHandle.getContentDimensions().contentHeight) {
            if (document.querySelector(".tabbar"))
                document.querySelector(".tabbar")['style'].display = 'none';
            if (this.topOrBottom == "top") {
                this.contentBox.marginTop = 0;
            }
            else if (this.topOrBottom == "bottom") {
                this.contentBox.marginBottom = 0;
            }
        }
        else {
            if (document.querySelector(".tabbar"))
                document.querySelector(".tabbar")['style'].display = 'flex';
            if (this.topOrBottom == "top") {
                this.contentBox.marginTop = this.tabBarHeight;
            }
            else if (this.topOrBottom == "bottom") {
                this.contentBox.marginBottom = this.tabBarHeight;
            }
        } //if else
    };
    SearchPage.prototype.ionViewDidEnter = function () {
        this.topOrBottom = this.contentHandle._tabsPlacement;
        this.contentBox = document.querySelector(".scroll-content")['style'];
        if (this.topOrBottom == "top") {
            this.tabBarHeight = this.contentBox.marginTop;
        }
        else if (this.topOrBottom == "bottom") {
            this.tabBarHeight = this.contentBox.marginBottom;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("contentRef"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SearchPage.prototype, "contentHandle", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/search/search.html"*/'<ion-header no-border class="search-header">\n    <ion-navbar color="header"> <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n        <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)" placeholder="{{\'What are you looking for\' | translate}}?" autocomplete="on" autocorrect="on" spellcheck="true"> </ion-searchbar>\n    </ion-navbar>\n</ion-header>\n<ion-content class="search-page" #contentRef (ionScroll)="scrollingFun($event)">\n    <ion-spinner *ngIf="loading" name="crescent"> </ion-spinner>\n    <ion-spinner *ngIf="!mainservice?.categories && !hidecategory" name="crescent"> </ion-spinner>\n    <ion-list no-margin class="category-class">\n        <div *ngIf="mainservice?.categories && !hidecategory" style="margin-top:16px">\n            <h4>{{"Browse categories" | translate}}</h4>\n            <ion-row tappable full *ngFor="let item of mainservice.mainCategories">\n                <ion-item *ngIf="!subcat" (click)="getSubCategoryDropdown(item.id, item.name)" no-lines class="category" [ngClass]="{selected: item.id == catId}">\n                    <h2 [innerHTML]="item.name"> </h2>\n                    <ion-icon name="ios-arrow-down" item-right></ion-icon>\n                </ion-item>\n                <ion-item *ngIf="subcat" (click)="getSubCategoryDropup(item.id, item.name)" no-lines class="category" [ngClass]="{selected: item.id == catId}">\n                    <h3 [innerHTML]="item.name"> </h3>\n                    <h3 item-right *ngIf="item.id == catId" style="margin-top:0">\n                        <ion-icon name="ios-arrow-up" item-right></ion-icon>\n                    </h3>\n                    <h3 item-right *ngIf="item.id != catId">\n                        <ion-icon name="ios-arrow-down" item-right></ion-icon>\n                    </h3>\n                </ion-item>\n                <div *ngIf="subcat && item.id == catId" style="width:100%;margin-bottom: 12px;">\n                    <div *ngIf="subCategories">\n                        <ion-item no-lines class="sub-category">\n                            <div (click)="getCategory(item.id, item.slug, item.name)" style="text-align: center;">\n                                <h3>{{"Explore All" | translate}}</h3>\n                            </div>\n                        </ion-item>\n                        <ion-item *ngFor="let subcat of subCategories" no-lines class="sub-category">\n                            <a (click)="getCategory(subcat.id, subcat.slug, subcat.name)">\n                                <h3 [innerHTML]="subcat.name"> </h3>\n                            </a>\n                        </ion-item>\n                    </div>\n                </div>\n            </ion-row>\n        </div>\n    </ion-list>\n    <div *ngIf="products" class="products-listing">\n        <div *ngIf="!products.length && !loading" class="no-products">\n            <h2>{{"No products found!" | translate}}</h2>\n        </div>\n        <div *ngIf="products.length && !loading">\n            <ion-item no-lines class="item-name"> <button ion-button icon-only clear color="button-color" (click)="getSort()">\n              <ion-icon name="md-options" style="margin-right:6px"></ion-icon> {{"Sort" | translate}}\n            </button> <button ion-button icon-only item-right clear color="button-color" *ngIf="values.listview" (click)="setGridView()">\n              <ion-icon name="md-grid" style="margin-right:6px">\n              </ion-icon>\n            </button> <button ion-button icon-only item-right clear color="button-color" *ngIf="!values.listview" (click)="setListView()">\n              <ion-icon name="md-list-box" style="margin-right:6px">\n              </ion-icon>\n            </button> <button ion-button icon-only item-right clear color="button-color" (click)="getFilter()">\n              <ion-icon name="ios-funnel"></ion-icon>\n            </button> </ion-item>\n            <div *ngIf="values.listview" style="background-color: #f2f2f2;">\n                <div class="item-list" *ngFor="let item of products">\n                    <ion-item class="left-padding" no-lines>\n                        <ion-thumbnail item-left class="stock-list" [ngClass]="{opacity: !item.in_stock}"> <img tappable (click)="getProduct(item.id)" src="{{item.images[0].src}}"> <button class="no-stock-button" ion-button *ngIf="!item.in_stock">{{"No Stock" | translate}}\n                    </button> </ion-thumbnail>\n                        <div *ngIf="item.in_stock && item.sale_price && ((item.regular_price - item.sale_price) / item.regular_price*100) >= \'1\'" class="offer-tag" class="offer-tag"> <button ion-button small text-wrap>\n                      <span text-wrap>{{(item.regular_price - item.sale_price) / item.regular_price*100 | number : \'1.0-0\'}}% {{"OFF" | translate}}</span></button> </div>\n                        <div class="product-details">\n                            <div class="product-name-top">\n                                <div class="product-label">\n                                    <div tappable (click)="getProduct(item.id)">\n                                        <h2 *ngIf="item.title">{{item.title}} </h2>\n                                        <h2 *ngIf="item.name">{{item.name}} </h2>\n                                    </div>\n                                </div>\n                            </div>\n                            <div [innerHTML]="item.short_description" class="short-description"> </div>\n                            <div style="margin-top: 6px;"> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n                    </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n                    </span> <span class="price-delete" *ngIf="item.sale_price">\n                    <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n                    </del>\n                    </span> <span style="color:red;font-size: 15px" *ngIf="item.sale_price">{{"Save" | translate}} {{item.regular_price - item.price | currency:values.currency:symbol:\'1.0-0\'}}</span> </div>\n                            <h3 style="font-size:11px; margin: 3px 0"> <span class="rating review-star">\n                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}">&#x2605;</span> </span>\n                            </h3>\n                        </div>\n                        <div width-20 class="bottom-left-button">\n                            <ion-icon name="md-heart" class="wishlist-button-fill" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n                            <ion-icon name="md-heart-outline" class="wishlist-button" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n                        </div>\n                    </ion-item>\n                </div><br> </div>\n            <div *ngIf="!values.listview">\n                <div class="grid">\n                    <ion-row class="row unlimited-items">\n                        <ion-col class="col" *ngFor="let item of products">\n                            <ion-card>\n                                <ion-card-content class="stock"> <img tappable src="{{item.images[0].src}}" (click)="getProduct(item.id)" [ngClass]="{opacity: !item.in_stock}">\n                                    <div> <button ion-button color="danger" *ngIf="!item.in_stock">{{"No Stock" | translate}}\n                        </button> </div>\n                                    <div *ngIf="item.in_stock && item.sale_price && ((item.regular_price - item.sale_price) / item.regular_price*100) >= \'1\'" class="offer-tag" class="offer-tag"> <button ion-button small text-wrap>\n                      <span text-wrap>{{(item.regular_price - item.sale_price) / item.regular_price*100 | number : \'1.0-0\'}}% {{"OFF" | translate}}</span></button> </div>\n                                    <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n                                    <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n                                </ion-card-content>\n                                <div tappable (click)="getProduct(item.id)" class="card-name">\n                                    <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n                                    <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n                                </div>\n                                <ion-label style="margin-bottom:12px;margin-left: 4px;"> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n                    </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n                    </span> <span class="price-delete" *ngIf="item.sale_price">\n                    <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n                    </del>\n                    </span> </ion-label>\n                                <!--h3 style="font-size: 13px;color: #d33;padding: 0; margin-left: 12px;" *ngIf="item.sale_price">{{"Save" | translate}} {{item.regular_price - item.price | currency:values.currency:symbol:\'1.0-0\'}}</h3> <button ion-button icon-only small class="rating-button-grid1" style="height:20px">\n                  <ion-icon name="md-star"><span class="rating">{{item.average_rating | number:\'1.1-1\'}}</span></ion-icon>\n                  </button> <span style="text-align:left; color: #777;"> {{item.rating_count}} ratings</span--> </ion-card>\n                        </ion-col>\n                    </ion-row>\n                </div><br> </div>\n        </div>\n        <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n            <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading more items..\' | translate}}"> </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </div> <br> <br> </ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_service_functions__["a" /* Functions */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Filter = /** @class */ (function () {
    function Filter(nav, params, values, service) {
        var _this = this;
        this.nav = nav;
        this.values = values;
        this.service = service;
        this.attributeTerms = [];
        this.values.filter = params.data;
        this.service.getAttributes().then(function (results) {
            _this.values.attributes = results;
            if (_this.values.attributes.length) {
                _this.values.attributes.forEach(function (item) {
                    if (!item.selected)
                        item.selected = false;
                });
                _this.values.attributes.forEach(function (item) {
                    if (item.selected) {
                        _this.getAttributeTerms(item.id);
                        _this.values.selectedFilter = item;
                        _this.values.filter.attribute = item.slug;
                    }
                });
            }
        });
        if (!this.values.price.upper)
            this.values.price.upper = this.values.max_price;
    }
    Filter.prototype.chooseTab = function (filterType) {
        this.values.filter.attribute = filterType.slug;
        this.getAttributeTerms(filterType.id);
        this.values.attributes.forEach(function (item) {
            item.selected = false;
        });
        this.values.attributes.forEach(function (item) {
            if (item.id == filterType.id)
                item.selected = true;
        });
        this.values.selectedFilter = filterType;
    };
    Filter.prototype.getAttributeTerms = function (id) {
        var _this = this;
        this.service.attributeTerms(id).then(function (results) { return _this.attributeTerms[id] = results; });
    };
    Filter.prototype.applyFilter = function () {
        this.values.applyFilter = true;
        this.values.filter.min_price = this.values.price.lower;
        this.values.filter.max_price = this.values.price.upper;
        this.nav.pop();
    };
    Filter.prototype.dismiss = function () {
        this.values.applyFilter = false;
        this.nav.pop();
    };
    Filter.prototype.clearAll = function () {
        this.values.price.lower = 1;
        this.values.price.upper = this.values.max_price;
        this.values.filter.min_price = undefined;
        this.values.filter.max_price = undefined;
        this.values.filter.attribute = undefined;
        this.values.filter.attribute_term = undefined;
        if (this.values.attributes) {
            this.values.attributes.forEach(function (item) {
                item.selected = false;
            });
            this.values.attributes[0].selected = true;
            this.values.selectedFilter = this.values.attributes[0];
            this.values.filter.attribute = this.values.attributes[0].id;
        }
        this.nav.pop();
    };
    Filter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/filter/filter.html"*/'<ion-header no-border class="filter-header">\n    <ion-navbar color="header">\n        <ion-buttons left style="padding-left:10px;"> <button clear ion-button (click)="clearAll()">\n      {{"Clear" | translate}}\n    </button> </ion-buttons>\n        <ion-title text-wrap text-center>{{"Filter" | translate}}</ion-title>\n        <ion-buttons end> <button ion-button (click)="dismiss()">\n        <ion-icon name="md-close" style="color: #fff; font-size: 20px; margin: 16px;"></ion-icon>\n      </button> </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="filter-page">\n    <div class="filter">\n        <ion-spinner *ngIf="!values.attributes" name="ios-small"> </ion-spinner>\n        <div class="price-filter" *ngIf="values.attributes">\n            <ion-item class="price-range">\n                <ion-label text-uppercase>{{"Price"| translate}} </ion-label>\n                <ion-input required type="text" [(ngModel)]="values.price.lower"> </ion-input>\n                <ion-input required type="text" [(ngModel)]="values.price.upper"> </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-range dualKnobs="true" pin="true" min="1" max="{{values.max_price}}" [(ngModel)]="values.price" color="dark">\n                    <ion-label range-left>1</ion-label>\n                    <ion-label range-right>{{values.max_price}}</ion-label>\n                </ion-range>\n            </ion-item>\n        </div>\n        <div class="attributes" *ngIf="values.attributes">\n            <ion-grid *ngIf="values.attributes.length">\n                <ion-row style="border: 4px solid #f8f8f8;">\n                    <ion-col width-40 class="col-left">\n                        <div *ngFor="let filterType of values.attributes" class="tab-left-item" [class.active]="filterType.selected"> <button style="margin: 0px;" ion-button clear full color="dark" (click)="chooseTab(filterType)">{{filterType.name}}</button> </div>\n                    </ion-col>\n                    <ion-col width-60 class="col-right">\n                        <ion-spinner *ngIf="!attributeTerms[values?.selectedFilter?.id]" name="ios-small"> </ion-spinner>\n                        <ion-list no-margin text-wrap radio-group [(ngModel)]="values.filter.attribute_term">\n                            <ion-item *ngFor="let val of attributeTerms[values?.selectedFilter?.id]">\n                                <ion-label> {{val.name}} </ion-label>\n                                <ion-radio value="{{val.id}}"> </ion-radio>\n                            </ion-item>\n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n</ion-content>\n<ion-footer *ngIf="values.attributes"> <button ion-button full text-uppercase style="background-color: #3b3b3b;height:40px;margin:0" (click)="applyFilter()"> {{"Apply" | translate}} </button> </ion-footer>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/filter/filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */]])
    ], Filter);
    return Filter;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sort; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Sort = /** @class */ (function () {
    function Sort(nav, params, values) {
        this.nav = nav;
        this.values = values;
        this.values.filter = params.data;
    }
    Sort.prototype.dismiss = function () {
        this.values.applyFilter = false;
        this.nav.pop();
    };
    Sort.prototype.applySort = function () {
        this.values.applyFilter = true;
        if (!this.values.filter.on_sale) {
            this.values.filter.on_sale = undefined;
        }
        if (!this.values.filter.in_stock) {
            this.values.filter.in_stock = undefined;
        }
        if (this.values.sortType == 0) {
            this.values.filter.order = "asc";
            this.values.filter.orderby = "date";
        }
        else if (this.values.sortType == 1) {
            this.values.filter.order = "asc";
            this.values.filter.orderby = "title";
        }
        else if (this.values.sortType == 2) {
            this.values.filter.order = "desc";
            this.values.filter.orderby = "title";
        }
        this.nav.pop();
    };
    Sort = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/sort/sort.html"*/'<ion-header no-border class="filter-header">\n    <ion-navbar color="header">\n        <ion-title text-wrap text-center>{{"Sort" | translate}}</ion-title>\n        <ion-buttons end> <button ion-button (click)="dismiss()">\n        <ion-icon name="md-close" style="color: #fff; font-size: 20px; margin: 16px;"></ion-icon>\n      </button> </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="sort">\n    <ion-list radio-group [(ngModel)]="values.sortType">\n        <ion-item>\n            <ion-label text-wrap>{{"Latest Products" | translate}} </ion-label>\n            <ion-radio value="0"> </ion-radio>\n        </ion-item>\n        <ion-item>\n            <ion-label text-wrap>{{"Name" | translate}} (A - Z) </ion-label>\n            <ion-radio value="1"> </ion-radio>\n        </ion-item>\n        <ion-item>\n            <ion-label text-wrap>{{"Name" | translate}} (Z - A) </ion-label>\n            <ion-radio value="2"> </ion-radio>\n        </ion-item>\n    </ion-list>\n    <ion-item>\n        <ion-label>{{"On sale" | translate}}</ion-label>\n        <ion-toggle [(ngModel)]="values.filter.on_sale"></ion-toggle>\n    </ion-item>\n    <ion-item>\n        <ion-label>{{"In stock" | translate}}</ion-label>\n        <ion-toggle [(ngModel)]="values.filter.in_stock"></ion-toggle>\n    </ion-item>\n</ion-content>\n<ion-footer> <button ion-button full text-uppercase style="background-color: #3b3b3b;height:40px;margin:0" (click)="applySort()"> {{"Apply" | translate}} </button> </ion-footer>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/sort/sort.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
    ], Sort);
    return Sort;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
var CheckoutService = /** @class */ (function () {
    function CheckoutService(http, config) {
        this.http = http;
        this.config = config;
    }
    CheckoutService.prototype.updateOrderReview = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("security", form.nonce.update_order_review_nonce);
        params.append("payment_method", form.payment_method);
        params.append("address", form.billing_address_1);
        params.append("address_2", form.billing_address_2);
        params.append("city", form.billing_city);
        params.append("postcode", form.billing_postcode);
        params.append("country", form.billing_country);
        params.append("state", form.billing_state);
        params.append("s_address", form.billing_address_1);
        params.append("s_address_2", form.billing_address_2);
        params.append("s_city", form.billing_city);
        params.append("s_postcode", form.billing_postcode);
        params.append("s_country", form.billing_country);
        params.append("s_state", form.billing_state);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.checkout = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        if (!form.shipping) {
            params.append("ship_to_different_address", "1");
        }
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveBillingAddress = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.nonce.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("createaccount", form.billing_address_1);
        params.append("account_password", form.billing_address_2);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", "544bcd0d1d");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveShippingAddress = function (shipping) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping[firstname]", shipping.firstname);
        params.append("shipping[lastname]", shipping.lastname);
        params.append("shipping[company]", shipping.company);
        params.append("shipping[street][0]", shipping.street1);
        params.append("shipping[street][1]", shipping.street2);
        params.append("shipping[city]", shipping.city);
        params.append("shipping[postcode]", shipping.postcode);
        params.append("shipping[country_id]", shipping.country_id);
        params.append("shipping[state_id]", shipping.state_id);
        if (shipping.entity_id) {
            params.append("shipping_address_id", shipping.entity_id);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getShippingPayment = function () {
        var _this = this;
        if (this.shippingMethods && this.paymentMethods) {
            return Promise.resolve(this.shippingMethods);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', _this.config.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingMethods = data[0];
                _this.paymentMethods = data[1];
                resolve(_this.shippingMethods);
            });
        });
    };
    CheckoutService.prototype.saveMethods = function (shippingMethod, payment) {
        var _this = this;
        var shipping = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        shipping.append("shipping_method", shippingMethod);
        for (var param in payment) {
            params.set("payment[" + param + "]", payment[param]);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', params, _this.config.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingStatus = data[0];
                _this.paymentStatus = data[1];
                resolve(_this.shippingStatus);
            });
        });
    };
    CheckoutService.prototype.getTime = function (date) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_slots_on_date");
        params.append("date", date);
        console.log(params);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getDate = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_upcoming_bookable_dates");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.login = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", form.username);
        params.append("password", form.password);
        params.append("_wpnonce", form.checkout_login);
        params.append("login", "Login");
        params.append("_wp_http_referer", "/checkout/");
        params.append("redirect", this.config.url + "/wp-admin/admin-ajax.php?action=mstoreapp-userdata");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout/', params, _this.config.options)
                .subscribe(function (data) {
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', _this.config.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.status = data;
                    resolve(_this.status);
                });
            });
        });
    };
    CheckoutService.prototype.submitCoupon = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon_code", form.coupon_code);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getStripeToken = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("key", form.payment.stripe.publishable_key);
        params.append("payment_user_agent", 'stripe.js/6ea8d55');
        params.append("card[number]", form.stripe_number);
        params.append("card[cvc]", form.stripe_code);
        params.append("card[exp_month]", form.stripe_exp_month);
        params.append("card[exp_year]", form.stripe_exp_year);
        params.append("card[name]", form.billing_first_name + form.billing_last_name);
        params.append("card[address_line1]", form.billing_address_1);
        params.append("card[address_line2]", form.billing_address_2);
        params.append("card[address_state]", form.billing_state);
        params.append("card[address_city]", form.billing_city);
        params.append("card[address_zip]", form.billing_postcode);
        params.append("card[address_country]", form.billing_country);
        return new Promise(function (resolve) {
            _this.http.post('https://api.stripe.com/v1/tokens', params, _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            }, function (err) { return resolve(err.json()); });
        });
    };
    CheckoutService.prototype.stripePlaceOrder = function (form, token) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        params.append("wc-stripe-payment-token", 'new');
        params.append("stripe_token", token.id);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getOrderSummary = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/orders/' + id + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orderSummary = data;
                resolve(_this.orderSummary);
            });
        });
    };
    CheckoutService.prototype.updateShipping = function (method) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping_method[0]", method);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_shipping_method', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.shippingUpdate = data;
                resolve(_this.shippingUpdate);
            });
        });
    };
    CheckoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]])
    ], CheckoutService);
    return CheckoutService;
}());

//# sourceMappingURL=checkout-service.js.map

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Service = /** @class */ (function () {
    function Service(http, config, values, loadingCtrl, nativeStorage) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.dir = 'left';
        this.filter = {};
        this.mainCategories = [];
        this.filter.page = 1;
        this.deals = {};
    }
    Service.prototype.load = function () {
        var _this = this;
        this.filter = {};
        this.filter.page = 1;
        this.filter.status = 'publish';
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v1/products/?', false), this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.products = data;
        });
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-keys', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.values.data = data;
                _this.login_nonce = data.login_nonce;
                _this.banners = data.banners;
                _this.values.max_price = data.max_price;
                _this.values.price.upper = data.max_price;
                if (data.user.data != undefined) {
                    _this.values.isLoggedIn = data.user.data.status;
                    _this.values.customerId = data.user.data.ID;
                    _this.values.customerName = data.user.data.display_name;
                    _this.values.avatar = data.user.avatar_url;
                    _this.nativeStorage.getItem('loginData').then(function (data) {
                        if (data.type == 'social') {
                            _this.values.customerName = data.displayName;
                            _this.values.avatar = data.avatar;
                        }
                    }, function (error) { return console.error(error); });
                }
                else {
                    _this.nativeStorage.getItem('loginData').then(function (data) {
                        if (data.type == 'woo') {
                            _this.values.avatar = data.avatar;
                            _this.login(data);
                        }
                        else if (data.type == 'social') {
                            _this.values.customerName = data.displayName;
                            _this.values.avatar = data.avatar;
                            _this.socialLogin(data.username);
                        }
                    }, function (error) { return console.error(error); });
                }
                _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/categories?', { per_page: 100 }), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.categories = data;
                    _this.mainCategories = [];
                    for (var i = 0; i < _this.categories.length; i++) {
                        if (_this.categories[i].parent == '0') {
                            _this.categories[i].activated = false;
                            _this.mainCategories.push(_this.categories[i]);
                        }
                    }
                    _this.nativeStorage.getItem('loginData').then(function (data) { return _this.login(data); }, function (error) { return console.error(error); });
                    _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                        _this.cart = data;
                        _this.values.updateCart(_this.cart);
                    });
                    if (_this.values.isLoggedIn) {
                        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                        params.append("customer_id", _this.values.customerId.toString());
                        _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                            for (var item in data) {
                                _this.values.wishlistId[data[item].id] = data[item].id;
                            }
                        });
                    }
                    resolve(_this.categories);
                });
            });
        });
    };
    Service.prototype.getNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-nonce', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.login = function (loginData) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", loginData.username);
        params.append("password", loginData.password);
        params.append("_wpnonce", this.login_nonce);
        params.append("login", 'Login');
        params.append("redirect", this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-userdata');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-login', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (!data.errors && data.data) {
                    _this.values.isLoggedIn = data.data.status;
                    _this.values.customerName = data.data.display_name;
                    _this.values.customerId = data.data.ID;
                    _this.values.avatar = data.data.avatar_url;
                    params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                    params.append("customer_id", _this.values.customerId.toString());
                    _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                        for (var item in data) {
                            _this.values.wishlistId[data[item].id] = data[item].id;
                        }
                    });
                    _this.nativeStorage.setItem('loginData', {
                        username: loginData.username,
                        password: loginData.password,
                        avatar: data.data.avatar_url,
                        type: 'woo'
                    }).then(function (data) { return console.log('Login Details Stored'); }, function (error) { return console.error(error); });
                }
                resolve(data);
            }, function (err) {
                resolve(JSON.parse(err._body));
                console.log(err._body);
            });
        });
    };
    Service.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    Service.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-logout', _this.config.options).subscribe(function (data) {
                _this.values.isLoggedIn = false;
                _this.values.customerName = "";
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.cart = data;
                    _this.values.updateCart(_this.cart);
                });
                resolve(_this.cart);
            });
        });
    };
    Service.prototype.passwordreset = function (email, nonce, url) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("user_login", email);
        params.append("wc_reset_password", "true");
        params.append("_wpnonce", nonce);
        params.append("_wp_http_referer", '/my-account/lost-password/');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/my-account/lost-password/', params, _this.config.options).subscribe(function (status) {
                resolve(status);
            });
        });
    };
    Service.prototype.passwordResetNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-passwordreset', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getAddress = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/customers/' + _this.values.customerId + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.address = data;
                resolve(_this.address);
            });
        });
    };
    Service.prototype.saveAddress = function (address) {
        var _this = this;
        var params = address;
        return new Promise(function (resolve) {
            _this.http.put(_this.config.setUrl('PUT', '/wp-json/wc/v2/customers/' + _this.values.customerId + '?', false), params, { withCredentials: false }).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data.data);
            }, function (err) {
                resolve(JSON.parse(err._body));
            });
        });
    };
    Service.prototype.pushNotification = function (notification) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("device_id", notification.device_id);
        params.append("platform", notification.platform);
        params.append("email", notification.email);
        params.append("city", notification.city);
        params.append("state", notification.state);
        params.append("country", notification.country);
        params.append("pincode", notification.pincode);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.pushNotify = function (deviceId, platform) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("device_id", deviceId);
        params.append("platform", platform);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.getOrder = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/orders/' + id + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.order = data;
                resolve(_this.order);
            });
        });
    };
    Service.prototype.getCountry = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_country', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.country = data;
                resolve(_this.country);
            });
        });
    };
    Service.prototype.registerCustomer = function (customer) {
        var _this = this;
        var params = customer;
        return new Promise(function (resolve) {
            _this.http.post(_this.config.setUrl('POST', '/wp-json/wc/v2/customers?', false), params, { withCredentials: false }).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.user = data;
                resolve(_this.user);
            }, function (err) {
                resolve(JSON.parse(err._body));
            });
        });
    };
    Service.prototype.getOrders = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/orders?', filter), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.orders = data;
                resolve(_this.orders);
            });
        });
    };
    Service.prototype.updateOrder = function (data, id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(_this.config.setUrl('PUT', '/wp-json/wc/v2/orders/' + id + '?', false), data, { withCredentials: true }).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            }, function (err) {
                resolve(JSON.parse(err._body));
            });
        });
    };
    Service.prototype.presentLoading = function (text) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
        this.loader.present();
    };
    Service.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Service.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getProducts = function () {
        var _this = this;
        this.filter = {};
        this.filter.page = 1;
        this.filter.status = 'publish';
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v2/products/?', false), this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.products = data;
        });
    };
    Service.prototype.getfeaturedProduct = function () {
        var _this = this;
        this.filter.featured = true;
        this.filter.on_sale = undefined;
        this.filter.per_page = 50;
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v2/products/?', this.filter), this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.featuredProduct = data;
        });
    };
    Service.prototype.getTrending = function () {
        var _this = this;
        this.filter.on_sale = undefined;
        this.filter.featured = undefined;
        this.filter['filter[tag]'] = "trending";
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v2/products/?', this.filter), this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.trending = data;
        });
    };
    Service.prototype.getLocationAddress = function (lat, lon) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&sensor=true').map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.sendToken = function (token) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("access_token", token);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-facebook_connect', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data.status) {
                    _this.values.isLoggedIn = true;
                    _this.values.customerName = data.last_name;
                    _this.values.customerId = data.user_id;
                    _this.values.avatar = data.avatar;
                    _this.nativeStorage.setItem('loginData', {
                        username: data.user_login,
                        avatar: data.avatar,
                        type: 'social',
                        displayName: data.last_name
                    }).then(function (data) { return console.log('Data Stored'); }, function (error) { return console.error(error); });
                    resolve(data);
                }
            });
        });
    };
    Service.prototype.googleLogin = function (res) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("access_token", res.userId);
        params.append("email", res.email);
        params.append("first_name", res.displayName);
        params.append("last_name", res.displayName);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-google_connect', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.googleResponse = data;
                if (data.status) {
                    _this.values.isLoggedIn = true;
                    _this.values.customerName = res.displayName;
                    _this.values.customerId = data.user_id;
                    _this.values.avatar = res.imageUrl;
                    _this.nativeStorage.setItem('loginData', {
                        username: res.email,
                        avatar: res.imageUrl,
                        type: 'social',
                        displayName: res.displayName
                    }).then(function (data) { return console.log('Data Stored'); }, function (error) { return console.error(error); });
                    resolve(data);
                }
            });
        });
    };
    Service.prototype.socialLogin = function (email) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("access_token", 'token');
        params.append("email", email);
        this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-google_connect', params, this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.googleResponse = data;
            if (data.status) {
                _this.values.isLoggedIn = true;
                _this.values.customerId = data.user_id;
            }
        });
    };
    Service.prototype.getAttributes = function () {
        var _this = this;
        if (this.values.attributes) {
            return Promise.resolve(this.values.attributes);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/attributes?', {
                per_page: 100
            }), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.values.attributes = data;
                if (_this.values.attributes.length) {
                    _this.values.attributes[0].selected = true;
                    _this.values.selectedFilter = _this.values.attributes[0];
                    _this.values.filter.attribute = _this.values.attributes[0].id;
                }
                resolve(_this.values.attributes);
            });
        });
    };
    Service.prototype.attributeTerms = function (id) {
        var _this = this;
        if (this.values.attributeTerms[id]) {
            return Promise.resolve(this.values.attributeTerms[id]);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/attributes/' + id + '/terms?', {
                per_page: 100
            }), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.values.attributeTerms[id] = data;
                resolve(_this.values.attributeTerms[id]);
            });
        });
    };
    Service.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    Service.prototype.getbestOffers = function () {
        var _this = this;
        this.values.loadDeals = true;
        var _loop_1 = function (item) {
            this_1.filter = {};
            this_1.filter.on_sale = true;
            this_1.filter.category = this_1.mainCategories[item].id;
            this_1.filter.featured = undefined;
            this_1.http.get(this_1.config.setUrl('GET', '/wp-json/wc/v2/products/?', this_1.filter), this_1.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.deals[_this.mainCategories[item].name] = data;
                if (_this.deals[_this.mainCategories[item].name])
                    _this.values.loadDeals = false;
            });
        };
        var this_1 = this;
        for (var item in this.mainCategories) {
            _loop_1(item);
        }
    };
    Service.prototype.getPage = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("page_id", id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-page_content', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 237;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Functions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Functions = /** @class */ (function () {
    function Functions(alert, loadingController, values, translate) {
        this.alert = alert;
        this.loadingController = loadingController;
        this.values = values;
        this.translate = translate;
        this.lan = {};
    }
    Functions.prototype.showAlert = function (title, text) {
        var _this = this;
        this.translate.get([title, text, 'OK']).subscribe(function (translations) {
            _this.lan.title = translations[title];
            _this.lan.text = translations[text];
            _this.lan.ok = translations.OK;
        });
        var alert = this.alert.create({
            title: this.lan.title,
            subTitle: this.lan.text,
            buttons: [this.lan.ok]
        });
        alert.present();
    };
    Functions.prototype.presentLoading = function () {
        this.loader = this.loadingController.create({
            content: this.values.lan.WaitTitle
        });
        this.loader.present();
    };
    Functions.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Functions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], Functions);
    return Functions;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartService = /** @class */ (function () {
    function CartService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
        this.mainCategories = [];
    }
    CartService.prototype.loadCart = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.cart = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
                _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/categories?', false), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.categories = data;
                    console.log(data);
                    _this.mainCategories = [];
                    for (var i = 0; i < _this.categories.length; i++) {
                        if (_this.categories[i].parent == '0') {
                            _this.mainCategories.push(_this.categories[i]);
                        }
                    }
                });
            });
        });
    };
    CartService.prototype.deleteItem = function (item_key) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_cart_item&item_key=' + item_key, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.checkout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.billing = data;
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                    resolve(data);
                });
                resolve(_this.billing);
            });
        });
    };
    CartService.prototype.addToCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity += 1;
        }
        ;
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] += 1;
        }
        ;
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity -= 1;
        }
        ;
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] -= 1;
        }
        ;
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.submitCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon_code", coupon);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params, _this.config.options).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CartService.prototype.removeCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon", coupon);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_coupon', params, _this.config.options).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CartService.prototype.updateShipping = function (method) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping_method[0]", method);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_shipping_method', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.cart = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.loadWishlist = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    CartService.prototype.deleteWishlistItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    CartService.prototype.addToCartFromWishlist = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("quantity", "1");
        params.append("product_id", id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.cartData = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(data.cart);
                resolve(_this.cartData);
            });
        });
    };
    CartService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CartService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CartService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart-service.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
var CategoryService = /** @class */ (function () {
    function CategoryService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    CategoryService.prototype.load = function (params) {
        var _this = this;
        //this.presentLoading(this.values.lan.WaitTitle);
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products?', params), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                //this.dismissLoading();
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.loadMore = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products?', filter), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.updateToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CategoryService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CategoryService.prototype.search = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products?', params), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CategoryService.prototype.getAttributes = function () {
        var _this = this;
        if (this.values.attributes) {
            return Promise.resolve(this.values.attributes);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/attributes?', false), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.values.attributes = data;
                resolve(_this.values.attributes);
            });
        });
    };
    CategoryService.prototype.attributeTerms = function (id) {
        var _this = this;
        if (this.values.attributeTerms[id]) {
            return Promise.resolve(this.values.attributeTerms[id]);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/attributes/' + id + '/terms?', false), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.values.attributeTerms[id] = data;
                resolve(_this.values.attributeTerms[id]);
            });
        });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* LoadingController */]])
    ], CategoryService);
    return CategoryService;
}());

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WishlistService = /** @class */ (function () {
    function WishlistService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
    }
    WishlistService.prototype.loadWishlist = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.addToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("quantity", "1");
        params.append("product_id", id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.cartData = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(data.cart);
                resolve(_this.cartData);
            });
        });
    };
    WishlistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */]])
    ], WishlistService);
    return WishlistService;
}());

//# sourceMappingURL=wishlist-service.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
var ProductService = /** @class */ (function () {
    function ProductService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    ProductService.prototype.getProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/' + id + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.product = data;
                resolve(_this.product);
            });
        });
    };
    ProductService.prototype.getReviews = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/' + id + '/reviews/' + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.reviews = data;
                resolve(_this.reviews);
            });
        });
    };
    ProductService.prototype.getRelatedProducts = function (relatedProducts) {
        var _this = this;
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        searchParams.set('related_ids', relatedProducts);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-related_products', searchParams, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.related = data;
                resolve(_this.related);
            });
        });
    };
    ProductService.prototype.getUpsellProducts = function (upsellProducts) {
        var _this = this;
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        searchParams.set('upsell_ids', upsellProducts);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-upsell_products', searchParams, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.upsell = data;
                resolve(_this.upsell);
            });
        });
    };
    ProductService.prototype.getCrossSellProducts = function (crossSellProducts) {
        var _this = this;
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        searchParams.set('cross_sell_ids', crossSellProducts);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cross_sell_products', searchParams, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.crossSell = data;
                resolve(_this.crossSell);
            });
        });
    };
    ProductService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    ProductService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    ProductService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProductService.prototype.submitComment = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("rating", form.rating);
        params.append("comment", form.comment);
        if (!this.values.isLoggedIn) {
            params.append("author", form.author);
            params.append("email", form.email);
        }
        params.append("comment_post_ID", form.id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-comments-post.php', params).subscribe(function (data) {
                resolve(true);
            });
        });
    };
    ProductService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.updateToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.getVariationProducts = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/' + id + '/variations' + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* LoadingController */]])
    ], ProductService);
    return ProductService;
}());

//# sourceMappingURL=product-service.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditAddressForm = /** @class */ (function () {
    function EditAddressForm(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.regions = [];
        this.disableSubmit = false;
        this.Save = "Save";
        this.editAddress = params.data;
        this.editAddress.shipping_true = true;
        this.service.getCountry()
            .then(function (results) { return _this.handleContries(results); });
    }
    EditAddressForm.prototype.handleContries = function (results) {
        this.country = results;
        this.billing_states = this.country.state[this.editAddress.billing.country];
        this.shipping_states = this.country.state[this.editAddress.shipping.country];
    };
    EditAddressForm.prototype.getBillingRegion = function (countryId) {
        this.billing_states = this.country.state[countryId];
    };
    EditAddressForm.prototype.getShippingRegion = function (countryId) {
        this.shipping_states = this.country.state[countryId];
    };
    EditAddressForm.prototype.saveAddress = function () {
        var _this = this;
        this.Save = "Save";
        this.disableSubmit = true;
        if (this.editAddress.shipping_true) {
            this.editAddress.shipping.first_name = this.editAddress.billing.first_name;
            this.editAddress.shipping.last_name = this.editAddress.billing.last_name;
            this.editAddress.shipping.company = this.editAddress.billing.company;
            this.editAddress.shipping.address_1 = this.editAddress.billing.address_1;
            this.editAddress.shipping.address_2 = this.editAddress.billing.address_2;
            this.editAddress.shipping.city = this.editAddress.billing.city;
            this.editAddress.shipping.country = this.editAddress.billing.country;
            this.editAddress.shipping.state = this.editAddress.billing.state;
            this.editAddress.shipping.postcode = this.editAddress.billing.postcode;
        }
        this.service.saveAddress(this.editAddress)
            .then(function (results) { return _this.handleSaveAddress(results); });
    };
    EditAddressForm.prototype.handleSaveAddress = function (results) {
        this.disableSubmit = false;
        this.Save = "Saving";
        this.nav.pop();
    };
    EditAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/account/edit-address-form/edit-address-form.html"*/'<ion-header no-border>\n    <ion-navbar color="header"> <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n        <ion-title text-center>{{"Edit Address" | translate}} </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="edit-address-form">\n    <div>\n        <ion-list class="Address-form">\n            <ion-item class="billing-header">\n                <h2 class="heading-label">{{"Billing Address" | translate}} </h2>\n            </ion-item>\n            <ion-label>{{"First Name" | translate}} </ion-label>\n            <ion-input required type="text" [(ngModel)]="editAddress.billing.first_name" name="first_name"> </ion-input>\n            <ion-label>{{"Last Name"| translate}} </ion-label>\n            <ion-input required type="text" [(ngModel)]="editAddress.billing.last_name" name="last_name"> </ion-input>\n            <ion-label>{{"Phone" | translate}} </ion-label>\n            <ion-input required type="text" [(ngModel)]="editAddress.billing.phone" name="phone"> </ion-input>\n            <ion-label>{{"Email" | translate}} </ion-label>\n            <ion-input required type="email" [(ngModel)]="editAddress.billing.email" name="email"> </ion-input>\n            <ion-label>{{"Street Address" | translate}} </ion-label>\n            <ion-input required type="text" [(ngModel)]="editAddress.billing.address_1" name="address_1"> </ion-input>\n            <ion-label>{{"Landmark" | translate}} </ion-label>\n            <ion-input required type="text" [(ngModel)]="editAddress.billing.address_2" name="address_2"> </ion-input>\n            <ion-label>{{"City" | translate}} </ion-label>\n            <ion-input required type="text" [(ngModel)]="editAddress.billing.city" name="city"> </ion-input>\n            <ion-label>{{"Postcode" | translate}} </ion-label>\n            <ion-input required type="text" [(ngModel)]="editAddress.billing.postcode" name="postcode"> </ion-input>\n            <ion-item *ngIf="country" class="select-item-field">\n                <ion-label> {{"Country" | translate}} </ion-label>\n                <ion-select [(ngModel)]="editAddress.billing.country" (ngModelChange)="getBillingRegion(editAddress.billing.country)" name="country">\n                    <div *ngFor="let field of country.country.countries | keys">\n                        <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span> </ion-option>\n                    </div>\n                </ion-select>\n            </ion-item>\n            <ion-item *ngIf="billing_states" style="margin-top:20px" class="select-item-field">\n                <ion-label> {{"State" | translate}} </ion-label>\n                <ion-select [(ngModel)]="editAddress.billing.state" name="state">\n                    <div *ngFor="let field of billing_states | keys">\n                        <ion-option value="{{field.key}}">{{field.value}} </ion-option>\n                    </div>\n                </ion-select>\n            </ion-item>\n            <div *ngIf="!billing_states">\n                <ion-label>{{"State" | translate}} </ion-label>\n                <ion-input required type="text" [(ngModel)]="editAddress.billing.state" name="state"> </ion-input>\n            </div>\n        </ion-list>\n    </div>\n    <div class="same-for-shipping">\n        <ion-item class="side-heading-background">\n            <ion-label class="heading-label">{{"Same For Shipping" | translate}} </ion-label>\n            <ion-toggle checked="true" [(ngModel)]="editAddress.shipping_true" name="subscribe"> </ion-toggle>\n        </ion-item>\n    </div>\n    <div *ngIf="!editAddress.shipping_true">\n        <ion-list class="Address-form" style="margin-top: -10px;">\n            <ion-item class="billing-header">\n                <h2 class="heading-label">{{"Shipping Address" | translate}} </h2>\n            </ion-item>\n            <ion-label>{{"First Name" | translate}} </ion-label>\n            <ion-input required type="text" [(ngModel)]="editAddress.shipping.first_name" name="firstname"> </ion-input>\n            <ion-label>{{"Last Name"| translate}} </ion-label>\n            <ion-input required type="text" [(ngModel)]="editAddress.shipping.last_name" name="last_name"> </ion-input>\n            <ion-label>{{"Street Address" | translate}} </ion-label>\n            <ion-input required type="text" [(ngModel)]="editAddress.shipping.address_1" name="address_1"> </ion-input>\n            <ion-label>{{"Landmark" | translate}} </ion-label>\n            <ion-input required type="text" [(ngModel)]="editAddress.shipping.address_2" name="address_2"> </ion-input>\n            <ion-label>{{"City" | translate}} </ion-label>\n            <ion-input required type="text" [(ngModel)]="editAddress.shipping.city" name="city"> </ion-input>\n            <ion-label>{{"Postcode" | translate}} </ion-label>\n            <ion-input required type="text" [(ngModel)]="editAddress.shipping.postcode" name="postcode"> </ion-input>\n            <ion-item *ngIf="country" class="select-item-field">\n                <ion-label> {{"Country" | translate}} </ion-label>\n                <ion-select [(ngModel)]="editAddress.shipping.country" (ngModelChange)="getShippingRegion(editAddress.shipping.country)" name="country">\n                    <div *ngFor="let field of country.country.countries | keys">\n                        <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span> </ion-option>\n                    </div>\n                </ion-select>\n            </ion-item>\n            <ion-item *ngIf="shipping_states" style="margin-top:20px" class="select-item-field">\n                <ion-label> {{"State" | translate}} </ion-label>\n                <ion-select [(ngModel)]="editAddress.shipping.state" name="state">\n                    <div *ngFor="let field of shipping_states | keys">\n                        <ion-option value="{{field.key}}">{{field.value}} </ion-option>\n                    </div>\n                </ion-select>\n            </ion-item>\n            <div *ngIf="!shipping_states">\n                <ion-label>{{"State" | translate}} </ion-label>\n                <ion-input required type="text" [(ngModel)]="editAddress.shipping.state" name="state"> </ion-input>\n            </div>\n        </ion-list>\n    </div>\n    <div class="margin"> <button ion-button block color="button-color" type="submit" [disabled]="disableSubmit" class="button button-block button-default" text-uppercase (click)="saveAddress()">{{Save | translate}}\n    </button> </div>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/account/edit-address-form/edit-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], EditAddressForm);
    return EditAddressForm;
}());

//# sourceMappingURL=edit-address-form.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyInformation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyInformation = /** @class */ (function () {
    function MyInformation(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.regions = [];
        this.disableSubmit = false;
        this.Save = "Save";
        this.service.getAddress()
            .then(function (results) { return _this.myInformation = results; });
    }
    MyInformation.prototype.saveMyinfo = function () {
        var _this = this;
        this.Save = "Saving";
        this.disableSubmit = true;
        this.service.saveAddress(this.myInformation)
            .then(function (results) { return _this.handleSaveAddress(results); });
    };
    MyInformation.prototype.handleSaveAddress = function (results) {
        this.disableSubmit = false;
        this.Save = "Save";
        if (results.code) {
            this.errors = results;
        }
        else {
            this.nav.pop();
        }
    };
    MyInformation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/account/my-information/my-information.html"*/'<ion-header no-border>\n    <ion-navbar color="header"> <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n        <ion-title text-center style="margin-right:30px">{{"My" | translate}} {{"Profile" | translate}} </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="my-information">\n    <ion-spinner *ngIf="!myInformation" name="crescent"> </ion-spinner>\n    <div *ngIf="myInformation">\n        <div><span *ngIf="values.avatar"><img src="{{values.avatar}}"></span></div>\n        <ion-list class="my-info">\n            <ion-label>{{"Full Name" | translate}} </ion-label>\n            <ion-input required type="text" [(ngModel)]="myInformation.first_name" name="first_name"> </ion-input>\n            <ion-label>{{"Email" | translate}} </ion-label>\n            <ion-input required type="email" [(ngModel)]="myInformation.email" name="email"> </ion-input>\n            <ion-label>{{"Phone" | translate}} </ion-label>\n            <ion-input required type="number" [(ngModel)]="myInformation.billing.phone" name="phone"> </ion-input>\n            <div class="disabled">\n                <ion-label>{{"Username" | translate}} </ion-label>\n                <ion-input [(ngModel)]="myInformation.username" disabled="true"> </ion-input>\n                <ion-label>{{"Total" | translate}} {{"Orders" | translate}} </ion-label>\n                <ion-input [(ngModel)]="myInformation.orders_count" disabled="true"> </ion-input>\n                <div *ngIf="myInformation.total_spent != 0">\n                    <ion-label>{{"Total" | translate}} {{"Spent" | translate}} </ion-label>\n                    <ion-input [(ngModel)]="myInformation.total_spent" disabled="true"> </ion-input>\n                </div>\n            </div>\n        </ion-list>\n    </div>\n    <div *ngIf="errors" class="error-message">\n        <h3>{{errors.message}} </h3>\n    </div>\n    <div class="error-message" *ngIf="myInformation"> <button ion-button block color="button-color" type="submit" [disabled]="disableSubmit" class="button button-block button-default" text-uppercase (click)="saveMyinfo()">{{Save | translate}}\n    </button> <br> </div>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/account/my-information/my-information.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], MyInformation);
    return MyInformation;
}());

//# sourceMappingURL=my-information.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDetails = /** @class */ (function () {
    function OrderDetails(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.id = params.data;
        this.service.getOrder(this.id)
            .then(function (results) { return _this.orderDetails = results; });
    }
    OrderDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/account/order-details/order-details.html"*/'<ion-header no-border>\n    <ion-navbar color="header"> <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n        <ion-title text-center>{{"Order Info" | translate}} </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="order-details">\n    <ion-spinner *ngIf="!orderDetails" name="crescent"> </ion-spinner>\n    <div *ngIf="orderDetails">\n        <ion-item-group>\n            <ion-item class="top-details">\n                <ion-row>\n                    <ion-col class="dull">{{"Order Number" | translate }} </ion-col>\n                    <ion-col>{{orderDetails.number}} </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class="dull">{{"Date" | translate}} </ion-col>\n                    <ion-col>{{orderDetails.date_created | date: \'dd/MM/yyyy\'}} </ion-col>\n                </ion-row>\n                <ion-row *ngIf="orderDetails.shipping_lines.length">\n                    <ion-col class="dull">{{"Shipping Method" | translate}} </ion-col>\n                    <ion-col>{{orderDetails.shipping_lines[0].method_title}} </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class="dull">{{"Status" | translate}} </ion-col>\n                    <ion-col>{{orderDetails.status}} </ion-col>\n                </ion-row>\n            </ion-item>\n            <ion-item-divider>{{"Product Details" | translate}} </ion-item-divider>\n            <ion-item *ngFor="let item of orderDetails.line_items">\n                <h2><span class="dull">{{"Product Name" | translate}} :</span> {{item.name}} </h2>\n                <h2><span class="dull">{{"Price" | translate}} :</span> {{item.price | currency:values.currency:symbol:\'1.2-2\'}} </h2>\n                <h2><span class="dull">{{"Quantity" | translate}} :</span> {{item.quantity}} </h2>\n                <h2><span class="dull">{{"SubTotal" | translate}} :</span> {{1*item.subtotal | currency:values.currency:symbol:\'1.2-2\'}} </h2>\n            </ion-item>\n            <ion-item-divider>{{"Billing Address" | translate}} </ion-item-divider>\n            <ion-item text-wrap> {{orderDetails.billing.first_name}} {{orderDetails.billing.last_name}}, {{orderDetails.billing.email}} {{orderDetails.billing.phone}} {{orderDetails.billing.address_1}} {{orderDetails.billing.address_2}} {{orderDetails.billing.city}} {{orderDetails.billing.state}} {{orderDetails.billing.postcode}} </ion-item>\n            <ion-item-divider>{{"Shipping Address" | translate}} </ion-item-divider>\n            <ion-item text-wrap> {{orderDetails.shipping.first_name}} {{orderDetails.shipping.last_name}}, {{orderDetails.shipping.company}} {{orderDetails.shipping.address_1}} {{orderDetails.shipping.address_2}} {{orderDetails.shipping.city}} {{orderDetails.shipping.state}} {{orderDetails.shipping.country}} {{orderDetails.shipping.postcode}} </ion-item>\n            <ion-item-divider>{{"Total" | translate}} </ion-item-divider>\n            <ion-item>\n                <ion-row>\n                    <ion-col class="dull">{{"SubTotal" | translate}} </ion-col>\n                    <ion-col text-right>{{(1*orderDetails.total - 1*orderDetails.shipping_total - 1*orderDetails.total_tax) | currency:values.currency:symbol:\'1.2-2\'}} </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class="dull"> {{"Shipping Total" | translate}} </ion-col>\n                    <ion-col text-right>{{1*orderDetails.shipping_total | currency:values.currency:symbol:\'1.2-2\'}} </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class="dull">{{"Tax Total" | translate}} </ion-col>\n                    <ion-col text-right>{{1*orderDetails.total_tax | currency:values.currency:symbol:\'1.2-2\'}} </ion-col>\n                </ion-row>\n                <ion-row text-uppercase>\n                    <ion-col class="dull">{{"Grand Total" | translate}} </ion-col>\n                    <ion-col text-right>{{1*orderDetails.total | currency:values.currency:symbol:\'1.2-2\'}} </ion-col>\n                </ion-row>\n            </ion-item>\n        </ion-item-group>\n        <ion-item>\n            <h2>{{"Payment Method" | translate}} : </h2>\n            <h2 style="color:#020da0"> {{orderDetails.payment_method_title}}</h2>\n        </ion-item>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/account/order-details/order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], OrderDetails);
    return OrderDetails;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_products__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Categories = /** @class */ (function () {
    function Categories(nav, service, values, functions, modalCtrl) {
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.modalCtrl = modalCtrl;
        this.subcat = false;
        this.loading = false;
        this.items = [];
        this.subCategories = [];
        if (this.service.mainCategories.length) {
            this.catId = this.service.mainCategories[0].id;
            this.image = this.service.mainCategories[0].image;
            this.catName = this.service.mainCategories[0].name;
            for (var item in this.service.categories) {
                if (this.service.categories[item].parent == this.catId)
                    this.subCategories.push(this.service.categories[item]);
            }
        }
    }
    Categories.prototype.getCategory = function (id, name) {
        this.values.onsale = false;
        this.values.newCollections = false;
        this.values.featuredProducts = false;
        this.items.id = id;
        this.items.name = name;
        this.items.categories = this.service.categories;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__products_products__["a" /* ProductsPage */], this.items);
    };
    Categories.prototype.getSubcategories = function (id, image, name) {
        this.catId = id;
        this.image = image;
        this.catName = name;
        this.loading = true;
        this.subCategories = [];
        for (var item in this.service.categories) {
            if (this.service.categories[item].parent == this.catId)
                this.subCategories.push(this.service.categories[item]);
        }
        this.loading = false;
    };
    Categories.prototype.getCart = function () {
        this.values.hideTabbar = false;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pageSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], Categories.prototype, "pageSlider", void 0);
    Categories = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/categories/categories.html"*/'<ion-header no-border class="home-header">\n    <ion-navbar color="header"> <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n        <ion-title text-center>{{"Categories" | translate}} </ion-title>\n        <ion-buttons end> <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n        <ion-icon class="ion-md-cart item-icon">\n        </ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count != 0">{{values.count}}\n        </ion-badge>\n      </button> </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content class="categoriesPage">\n    <div class="attributes" *ngIf="service?.categories">\n        <ion-grid *ngIf="service.mainCategories">\n            <ion-row>\n                <ion-col width-40 class="col-left" style="overflow-y: scroll;height: 86vh;">\n                    <div *ngFor="let item of service.mainCategories" class="tab-left-item" [ngClass]="{selected: item.id == catId}">\n                        <h2 (click)="getSubcategories(item.id, item.image, item.name)" [innerHTML]="item.name" text-wrap></h2>\n                    </div> <br/> </ion-col>\n                <ion-col width-60 class="col-right" style="overflow-y: scroll;height: 86vh;">\n                    <ion-spinner *ngIf="loading" name="ios-small"> </ion-spinner>\n                    <ion-list no-margin text-wrap radio-group>\n                        <!--div class="cat-image"> <img *ngIf="image?.src" src="{{image.src}}"> </div-->\n                        <!--ion-item no-lines (click)="getCategory(catId, catName)" class="view-all"> <button ion-button small item-right> {{"Explore All" | translate}}</button> </ion-item-->\n                        <ion-row class="row unlimited-items" *ngIf="subCategories?.length">\n                            <ion-col *ngFor="let subcat of subCategories" (click)="getCategory(subcat.id, subcat.name)" class="col"> <img *ngIf="subcat.image?.src" src="{{subcat.image.src}}">\n                                <ion-label [innerHTML]="subcat.name"></ion-label>\n                            </ion-col>\n                            <!--ion-col (click)="getCategory(catId, catName)" class="viewAll">\n                          <img src="assets/image/viewAll.jpg">\n                        </ion-col--></ion-row> <br/>\n                        <!--div *ngIf="!subCategories?.length" (click)="getCategory(catId, catName)" class="view">\n                          <img src="assets/image/viewAll.jpg">\n                      </div--></ion-list>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/categories/categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], Categories);
    return Categories;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
var SearchService = /** @class */ (function () {
    function SearchService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.mainCategories = [];
    }
    SearchService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/categories?', false), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.categories = data;
                _this.mainCategories = [];
                for (var i = 0; i < _this.categories.length; i++) {
                    if (_this.categories[i].parent == '0') {
                        _this.mainCategories.push(_this.categories[i]);
                    }
                }
                resolve(_this.categories);
            });
        });
    };
    SearchService.prototype.getSearch = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products?', filter), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    SearchService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */]])
    ], SearchService);
    return SearchService;
}());

//# sourceMappingURL=search-service.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkout_order_summary_order_summary__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkout_terms_condition_terms_condition__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_forgotten_forgotten__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BillingAddressForm = /** @class */ (function () {
    function BillingAddressForm(viewCtrl, iab, nav, service, params, functions, values) {
        this.viewCtrl = viewCtrl;
        this.iab = iab;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.buttonSubmit = false;
        this.buttonSubmitLogin = false;
        this.buttonSubmitCoupon = false;
        this.enableBillingAddress = false;
        this.enableShippingMethods = false;
        this.enableShippingForm = false;
        this.enableLogin = true;
        this.showPasswordEnable = false;
        this.enablePaymentMethods = false;
        this.showAddress = false;
        this.PlaceOrder = "Place Order";
        this.buttonText1 = "Apply";
        this.LogIn = "LogIn";
        this.loginData = [];
        this.form = params.data;
        this.fillShippingForm();
        console.log(this.form);
        this.billing = {};
        if (document.querySelector(".tabbar"))
            this.tabBarElement = document.querySelector(".tabbar")['style'];
        this.billing.save_in_address_book = true;
        this.getRegion(this.form.billing_country);
        this.getRegion(this.form.shipping_country);
        this.form.shipping = true;
        this.shipping = {};
        this.shipping.save_in_address_book = true;
        if (this.values.isLoggedIn) {
            if (this.form.billing_country == "" || this.form.billing_country == undefined || this.form.billing_state == "" || this.form.billing_state == undefined || this.form.billing_postcode == "" || this.form.billing_postcode == undefined) {
                this.enableBillingAddress = true;
                this.enableLogin = false;
            }
            else {
                this.showAddress = true;
                this.enableLogin = false;
                this.enableShippingMethods = true;
                this.enablePaymentMethods = true;
            }
        }
        else if (!this.values.isLoggedIn) {
            this.enableLogin = true;
        }
    }
    BillingAddressForm.prototype.fillShippingForm = function () {
        this.form.shipping_first_name = this.form.billing_first_name;
        this.form.shipping_last_name = this.form.billing_last_name;
        this.form.shipping_address_1 = this.form.billing_address_1;
        this.form.shipping_address_2 = this.form.billing_address_2;
        this.form.shipping_city = this.form.billing_city;
        this.form.shipping_country = this.form.billing_country;
        this.form.shipping_state = this.form.billing_state;
        this.form.shipping_postcode = this.form.billing_postcode;
    };
    BillingAddressForm.prototype.getRegion = function (countryId) {
        var _this = this;
        //this.form.billing_state = "";
        this.states = this.form.state[countryId];
        this.service.updateOrderReview(this.form).then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm.prototype.handleOrderReviews = function (results) {
        this.OrderReview = results;
        this.chosen_shipping = this.OrderReview.chosen_shipping;
        console.log(this.chosen_shipping);
    };
    BillingAddressForm.prototype.checkout = function () {
        var _this = this;
        if (this.validateAddress()) {
            this.buttonSubmit = true;
            this.PlaceOrder = "Placing Order";
            if (this.form.shipping) {
                this.form.shipping_first_name = this.form.billing_first_name;
                this.form.shipping_last_name = this.form.billing_last_name;
                this.form.shipping_company = this.form.billing_company;
                this.form.shipping_address_1 = this.form.billing_address_1;
                this.form.shipping_address_2 = this.form.billing_address_2;
                this.form.shipping_city = this.form.billing_city;
                this.form.shipping_country = this.form.billing_country;
                this.form.shipping_state = this.form.billing_state;
                this.form.shipping_postcode = this.form.billing_postcode;
            }
            if (this.form.payment_method == 'bacs' || this.form.payment_method == 'cheque' || this.form.payment_method == 'cod') {
                this.service.checkout(this.form).then(function (results) { return _this.handleBilling(results); });
            }
            else if (this.form.payment_method == 'stripe') {
                this.service.getStripeToken(this.form).then(function (results) { return _this.handleStripeToken(results); });
            }
            else {
                this.service.checkout(this.form).then(function (results) { return _this.handlePayment(results); });
            }
        }
    };
    BillingAddressForm.prototype.handlePayment = function (results) {
        var _this = this;
        if (results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            var browser_1 = this.iab.create(results.redirect, '_blank', options);
            browser_1.show();
            browser_1.on('loadstart').subscribe(function (data) {
                if (data.url.indexOf('order-received') != -1 && data.url.indexOf('return=') == -1) {
                    _this.values.cart = [];
                    _this.values.count = 0;
                    var str = data.url;
                    var pos1 = str.lastIndexOf("/order-received/");
                    var pos2 = str.lastIndexOf("/?key=wc_order");
                    var pos3 = pos2 - (pos1 + 16);
                    var order_id = str.substr(pos1 + 16, pos3);
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__checkout_order_summary_order_summary__["a" /* OrderSummary */], order_id);
                    browser_1.close();
                }
                else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancel=') != -1 || data.url.indexOf('cancelled') != -1) {
                    browser_1.close();
                    _this.buttonSubmit = false;
                }
            });
            browser_1.on('exit').subscribe(function (data) {
                _this.buttonSubmit = false;
            });
        }
        else if (results.result == 'failure') {
            this.functions.showAlert("STATUS", results.messages);
            this.buttonSubmit = false;
        }
    };
    BillingAddressForm.prototype.checkoutStripe = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.PlaceOrder = "Placing Order";
        this.service.getStripeToken(this.form).then(function (results) { return _this.handleStripeToken(results); });
    };
    BillingAddressForm.prototype.handleStripeToken = function (results) {
        var _this = this;
        if (results.error) {
            this.buttonSubmit = false;
            this.PlaceOrder = "Place Order";
            this.functions.showAlert("ERROR", results.error.message);
        }
        else {
            this.service.stripePlaceOrder(this.form, results).then(function (results) { return _this.handleBilling(results); });
            this.buttonSubmit = false;
        }
    };
    BillingAddressForm.prototype.handleBilling = function (results) {
        if (results.result == "success") {
            var str = results.redirect;
            var pos1 = str.lastIndexOf("order-received/");
            var pos2 = str.lastIndexOf("?key=wc_order");
            var pos3 = pos2 - (pos1 + 15);
            var order_id = str.substr(pos1 + 15, pos3);
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__checkout_order_summary_order_summary__["a" /* OrderSummary */], order_id);
        }
        else if (results.result == "failure") {
            this.functions.showAlert("ERROR", results.messages);
        }
        this.buttonSubmit = false;
        this.PlaceOrder = "Place Order";
    };
    BillingAddressForm.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.buttonSubmitLogin = true;
            this.loginData.checkout_login = this.form.checkout_login;
            this.LogIn = "Please Wait";
            this.service.login(this.loginData).then(function (results) { return _this.handleResults(results); });
        }
    };
    BillingAddressForm.prototype.validateForm = function () {
        if (this.loginData.username == undefined || this.loginData.username == "") {
            return false;
        }
        if (this.loginData.password == undefined || this.loginData.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    BillingAddressForm.prototype.handleResults = function (a) {
        var _this = this;
        this.buttonSubmitLogin = false;
        this.LogIn = "LogIn";
        //this.form.shipping = true;
        if (a.user_logged) {
            this.form = a;
            this.states = this.form.state[this.form.billing_country];
            this.values.isLoggedIn = a.user_logged;
            this.values.customerName = a.billing_first_name;
            this.values.customerId = a.user_id;
            this.values.logoutUrl = a.logout_url;
            this.showAddress = true;
            this.enableLogin = false;
            this.enableShippingMethods = true;
            this.enablePaymentMethods = true;
            this.fillShippingForm();
            this.service.updateOrderReview(this.form).then(function (results) { return _this.handleOrderReviews(results); });
        }
        else {
            this.functions.showAlert("Error", 'Login unsuccessful. try again');
        }
    };
    BillingAddressForm.prototype.changePayment = function () {
        this.form.payment_instructions = this.form.payment[this.form.payment_method].description;
        this.buttonSubmit = false;
        this.buttonText = "Continue to " + this.form.payment[this.form.payment_method].method_title;
    };
    BillingAddressForm.prototype.terms = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__checkout_terms_condition_terms_condition__["a" /* TermsCondition */], this.form.terms_content);
    };
    BillingAddressForm.prototype.updateShipping = function (method) {
        var _this = this;
        this.form.shipping_method = method;
        this.chosen_shipping = method;
        this.service.updateShipping(method).then(function (results) { return _this.handleShipping(results); });
    };
    BillingAddressForm.prototype.handleShipping = function (results) {
        var _this = this;
        this.service.updateOrderReview(this.form).then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm.prototype.updateOrderReview = function () {
        var _this = this;
        this.service.updateOrderReview(this.form).then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm.prototype.showPassword = function () {
        this.showPasswordEnable = true;
    };
    BillingAddressForm.prototype.hidePassword = function () {
        this.showPasswordEnable = false;
    };
    BillingAddressForm.prototype.forgotten = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__account_forgotten_forgotten__["a" /* AccountForgotten */]);
    };
    BillingAddressForm.prototype.continueAsGuest = function () {
        this.enableBillingAddress = true;
        this.enableLogin = false;
        this.viewCtrl.showBackButton(true);
    };
    BillingAddressForm.prototype.showShippingForm = function () {
        if (this.validateBillingForm()) {
            if (this.form.shipping) {
                this.form.shipping_first_name = this.form.billing_first_name;
                this.form.shipping_last_name = this.form.billing_last_name;
                this.form.shipping_address_1 = this.form.billing_address_1;
                this.form.shipping_address_2 = this.form.billing_address_2;
                this.form.shipping_city = this.form.billing_city;
                this.form.shipping_country = this.form.billing_country;
                this.form.shipping_state = this.form.billing_state;
                this.form.shipping_postcode = this.form.billing_postcode;
                this.showAddress = true;
                this.enableShippingMethods = true;
                this.enablePaymentMethods = true;
                this.enableBillingAddress = false;
                this.viewCtrl.showBackButton(true);
            }
            else if (!this.form.shipping) {
                if (this.values.isLoggedIn) {
                    this.showAddress = true;
                }
                else {
                    this.enableShippingForm = true;
                    this.viewCtrl.showBackButton(false);
                }
                this.enableBillingAddress = false;
            }
        }
    };
    BillingAddressForm.prototype.showShippingMethods = function () {
        if (this.validateShippingForm()) {
            this.enableShippingForm = false;
            this.enableBillingAddress = false;
            this.showAddress = true;
            this.enableShippingMethods = true;
            this.enablePaymentMethods = true;
            this.viewCtrl.showBackButton(true);
        }
    };
    BillingAddressForm.prototype.validateBillingForm = function () {
        if (this.form.billing_first_name == undefined || this.form.billing_first_name == "") {
            this.functions.showAlert("ERROR", "Please enter billing First name");
            return false;
        }
        if (this.form.billing_phone == undefined || this.form.billing_phone == "") {
            this.functions.showAlert("ERROR", "Please enter billing Phone number");
            return false;
        }
        if (this.form.billing_address_1 == undefined || this.form.billing_address_1 == "") {
            this.functions.showAlert("ERROR", "Please enter billing Address");
            return false;
        }
        if (this.form.billing_email == undefined || this.form.billing_email == "") {
            this.functions.showAlert("ERROR", "Please enter billing Email");
            return false;
        }
        if (!this.values.isLoggedIn) {
            if (this.form.password == undefined || this.form.password == "") {
                this.functions.showAlert("ERROR", "Please enter Password");
                return false;
            }
        }
        if (this.form.billing_city == undefined || this.form.billing_city == "") {
            this.functions.showAlert("ERROR", "Please enter billing City");
            return false;
        }
        if (this.form.billing_postcode == undefined || this.form.billing_postcode == "") {
            this.functions.showAlert("ERROR", "Please enter billing Postcode");
            return false;
        }
        if (this.form.billing_country == undefined || this.form.billing_country == "") {
            this.functions.showAlert("ERROR", "Please choose billing Country");
            return false;
        }
        if (this.form.billing_state == undefined || this.form.billing_state == "") {
            this.functions.showAlert("ERROR", "Please choose billing State");
            return false;
        }
        else {
            return true;
        }
    };
    BillingAddressForm.prototype.validateShippingForm = function () {
        if (this.form.shipping_first_name == undefined || this.form.shipping_first_name == "") {
            this.functions.showAlert("ERROR", "Please enter Shipping First name");
            return false;
        }
        if (this.form.shipping_address_1 == undefined || this.form.shipping_address_1 == "") {
            this.functions.showAlert("ERROR", "Please enter Shipping Address");
            return false;
        }
        if (this.form.shipping_city == undefined || this.form.shipping_city == "") {
            this.functions.showAlert("ERROR", "Please enter Shipping City");
            return false;
        }
        if (this.form.shipping_postcode == undefined || this.form.shipping_postcode == "") {
            this.functions.showAlert("ERROR", "Please enter Shipping Postcode");
            return false;
        }
        if (this.form.shipping_country == undefined || this.form.shipping_country == "") {
            this.functions.showAlert("ERROR", "Please choose Shipping Country");
            return false;
        }
        if (this.form.shipping_state == undefined || this.form.shipping_state == "") {
            this.functions.showAlert("ERROR", "Please choose Shipping State");
            return false;
        }
        else {
            return true;
        }
    };
    BillingAddressForm.prototype.editBillingForm = function () {
        this.enableBillingAddress = true;
        this.showAddress = false;
        this.enableShippingForm = false;
        this.enableShippingMethods = false;
        this.enablePaymentMethods = false;
        this.viewCtrl.showBackButton(false);
    };
    BillingAddressForm.prototype.editShippingForm = function () {
        this.enableShippingForm = true;
        this.showAddress = false;
        this.enableBillingAddress = false;
        this.enableShippingMethods = false;
        this.enablePaymentMethods = false;
        this.viewCtrl.showBackButton(false);
    };
    BillingAddressForm.prototype.backToBillingForm = function () {
        this.enableBillingAddress = true;
        this.enableShippingForm = false;
        this.viewCtrl.showBackButton(true);
    };
    BillingAddressForm.prototype.backToAddressPage = function () {
        this.enableShippingForm = false;
        this.enableBillingAddress = false;
        this.showAddress = true;
        this.enableShippingMethods = true;
        this.enablePaymentMethods = true;
        this.viewCtrl.showBackButton(true);
    };
    BillingAddressForm.prototype.validateAddress = function () {
        if (this.form.show_terms && !this.form.terms) {
            this.functions.showAlert("ERROR", "You must agree to our Terms & Conditions");
            return false;
        }
        if (this.form.billing_first_name == undefined || this.form.billing_first_name == "") {
            this.functions.showAlert("ERROR", "Please enter billing First name");
            this.editBillingForm();
            //return false            
        }
        if (this.form.billing_phone == undefined || this.form.billing_phone == "") {
            this.functions.showAlert("ERROR", "Please enter billing Phone number");
            this.editBillingForm();
            //return false
        }
        if (this.form.billing_address_1 == undefined || this.form.billing_address_1 == "") {
            this.functions.showAlert("ERROR", "Please enter billing Address");
            this.editBillingForm();
            //return false
        }
        if (this.form.billing_email == undefined || this.form.billing_email == "") {
            this.functions.showAlert("ERROR", "Please enter billing Email");
            this.editBillingForm();
            //return false
        }
        if (this.form.billing_city == undefined || this.form.billing_city == "") {
            this.functions.showAlert("ERROR", "Please enter billing City");
            this.editBillingForm();
            //return false
        }
        if (this.form.billing_postcode == undefined || this.form.billing_postcode == "") {
            this.functions.showAlert("ERROR", "Please enter billing Postcode");
            this.editBillingForm();
            //return false
        }
        if (this.form.billing_country == undefined || this.form.billing_country == "") {
            this.functions.showAlert("ERROR", "Please choose billing Country");
            this.editBillingForm();
            //return false
        }
        if (this.form.billing_state == undefined || this.form.billing_state == "") {
            this.functions.showAlert("ERROR", "Please choose billing State");
            this.editBillingForm();
            //return false
        }
        if (this.form.shipping_first_name == undefined || this.form.shipping_first_name == "") {
            this.functions.showAlert("ERROR", "Please enter Shipping First name");
            this.editShippingForm();
            //return false
        }
        if (this.form.shipping_address_1 == undefined || this.form.shipping_address_1 == "") {
            this.functions.showAlert("ERROR", "Please enter Shipping Address");
            this.editShippingForm();
            //return false
        }
        if (this.form.shipping_city == undefined || this.form.shipping_city == "") {
            this.functions.showAlert("ERROR", "Please enter Shipping City");
            this.editShippingForm();
            // return false
        }
        if (this.form.shipping_country == undefined || this.form.shipping_country == "") {
            this.functions.showAlert("ERROR", "Please choose Shipping Country");
            this.editShippingForm();
            // return false
        }
        if (this.form.shipping_state == undefined || this.form.shipping_state == "") {
            this.functions.showAlert("ERROR", "Please choose Shipping State");
            this.editShippingForm();
            //return false
        }
        if (this.form.shipping_postcode == undefined || this.form.shipping_postcode == "") {
            this.functions.showAlert("ERROR", "Please enter Shipping Postcode");
            this.editShippingForm();
            //return false
        }
        else {
            return true;
        }
    };
    BillingAddressForm.prototype.ionViewWillEnter = function () {
        if (document.querySelector(".tabbar"))
            this.tabBarElement.display = 'none';
    };
    BillingAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/checkout/billing-address-form/billing-address-form.html"*/'<ion-header no-border class="billing-header" [ngClass]="{\'active-content\' : enableLogin}">\n    <ion-navbar color="header" hideBackButton="enableBillingAddress"> <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n        <div *ngIf="values.isLoggedIn">\n            <ion-title text-wrap text-center>{{"Checkout" | translate}}</ion-title>\n        </div>\n        <div *ngIf="!values.isLoggedIn">\n            <ion-title text-wrap text-center *ngIf="enableBillingAddress">{{"Checkout" | translate}} (1/2) </ion-title>\n            <ion-title text-wrap text-center *ngIf="enableShippingForm">{{"Checkout" | translate}} (1/2) </ion-title>\n            <ion-title text-wrap text-center *ngIf="showAddress">{{"Checkout" | translate}} (2/2) </ion-title>\n        </div>\n    </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="billing-address-form" [ngClass]="{\'active-content\' : enableLogin, \'inactive\' : !enableLogin}">\n    <div *ngIf="enableLogin" class="login-form">\n        <div class="shop-info">\n            <h1 text-uppercase>{{"Shop name" | translate}}</h1>\n            <h2>{{"The most fulfilling shopping experience" | translate}}.</h2>\n        </div>\n        <form #f="ngForm" class="login">\n            <ion-list>\n                <ion-item>\n                    <ion-label fixed>{{"Username" | translate}}</ion-label>\n                    <ion-input required type="email" [(ngModel)]="loginData.username" name="firstname"> </ion-input>\n                </ion-item>\n                <ion-item *ngIf="!showPasswordEnable">\n                    <ion-label fixed>{{"Password" | translate}}</ion-label>\n                    <ion-input required type="password" [(ngModel)]="loginData.password" name="password"> </ion-input>\n                    <ion-icon *ngIf="loginData.password" item-right name="ios-eye" (click)="showPassword()" style="font-size: 2.5rem;z-index:10"></ion-icon>\n                </ion-item>\n                <ion-item *ngIf="showPasswordEnable">\n                    <ion-label fixed>{{"Password" | translate}}</ion-label>\n                    <ion-input required type="text" [(ngModel)]="loginData.password" name="password"> </ion-input>\n                    <ion-icon item-right name="ios-eye-off" (click)="hidePassword()" style="font-size: 2.5rem;z-index:10"></ion-icon>\n                </ion-item>\n                <h2 tappable (click)="forgotten(loginData)">{{"Forgot Password" | translate}}?</h2>\n            </ion-list> <button ion-button outline type="submit" class="button button-block button-default" text-uppercase [disabled]="buttonSubmitLogin" (click)="login(loginData)">{{LogIn | translate}}\n      </button> <br>\n      <h5>{{"OR" | translate}}</h5>\n            <div class="continue-as-guest"> <button ion-button outline full type="submit" text-uppercase (click)="continueAsGuest()">{{"Continue as Guest" | translate}} <ion-icon name="md-arrow-forward"></ion-icon>\n          </button> </div>\n        </form> <br> </div>\n    <div *ngIf="form">\n        <form #f="ngForm" class="form">\n            <div class="address">\n                <ion-item no-lines *ngIf="showAddress">\n                    <h1>{{"Billing Address" | translate}} </h1>\n                    <h2>{{form.billing_first_name}} {{form.billing_last_name}} {{form.billing_email}} {{form.billing_phone}} {{form.billing_address_1}} {{form.billing_address_2}} {{form.billing_city}} {{form.billing_state}} {{form.billing_country}} {{form.billing_postcode}} </h2> <button ion-button small clear type="submit" class="button button-block button-default" (click)="editBillingForm()"><ion-icon name="md-create"></ion-icon>\n            {{"Edit" | translate}}\n           </button> </ion-item>\n                <ion-item no-lines *ngIf="showAddress">\n                    <h1>{{"Shipping Address" | translate}} </h1>\n                    <h2>{{form.shipping_first_name}} {{form.shipping_last_name}} {{form.billing_phone}} {{form.shipping_address_1}} {{form.shipping_address_2}} {{form.shipping_city}} {{form.shipping_state}} {{form.shipping_country}} {{form.shipping_postcode}} </h2> <button ion-button small clear type="submit" class="button button-block button-default" (click)="editShippingForm()">\n          <ion-icon name="md-create"></ion-icon>{{"Edit" | translate}}\n           </button> </ion-item>\n                <hr style="margin: 12px 0;background-color: rgba(0, 0, 0, 0.06);" *ngIf="showAddress && OrderReview?.shipping"> </div>\n            <ion-list no-margin class="Address-form" *ngIf="enableBillingAddress"> \n                <ion-item class="billing-header" no-lines *ngIf="enableBillingAddress">\n                    <ion-label color="side-heading-color">{{"Billing Address" | translate}} </ion-label>\n                </ion-item>\n                <ion-label *ngIf="enableBillingAddress">{{"First Name" | translate}} </ion-label>\n                <ion-input required type="text" [(ngModel)]="form.billing_first_name" name="firstname" *ngIf="enableBillingAddress"> </ion-input>\n                <ion-label *ngIf="enableBillingAddress">{{"Last Name"| translate}} </ion-label>\n                <ion-input *ngIf="enableBillingAddress" required type="text" [(ngModel)]="form.billing_last_name" name="lastname"> </ion-input>\n                <ion-label *ngIf="enableBillingAddress">{{"Phone" | translate}} </ion-label>\n                <ion-input *ngIf="enableBillingAddress" required type="number" [(ngModel)]="form.billing_phone" name="telephone"> </ion-input>\n                <ion-label *ngIf="enableBillingAddress">{{"Address" | translate}} </ion-label>\n                <ion-input *ngIf="enableBillingAddress" required type="text" [(ngModel)]="form.billing_address_1" name="street1"> </ion-input>\n                <ion-label *ngIf="enableBillingAddress">{{"Landmark" | translate}} </ion-label>\n                <ion-input *ngIf="enableBillingAddress" required type="text" [(ngModel)]="form.billing_address_2" name="street2"> </ion-input>\n                <ion-label *ngIf="enableBillingAddress">{{"Email" | translate}} </ion-label>\n                <ion-input *ngIf="enableBillingAddress" required type="email" [(ngModel)]="form.billing_email" name="email"> </ion-input>\n                <div *ngIf="!values.isLoggedIn && enableBillingAddress">\n                    <ion-label>{{"Password" | translate}} </ion-label>\n                    <ion-input required type="password" [(ngModel)]="form.password" name="password"> </ion-input>\n                </div>\n                <ion-label *ngIf="enableBillingAddress">{{"City" | translate}} </ion-label>\n                <ion-input *ngIf="enableBillingAddress" required type="text" [(ngModel)]="form.billing_city" name="city" (ngModelChange)="updateOrderReview()"> </ion-input>\n                <ion-label *ngIf="enableBillingAddress">{{"Postcode" | translate}} </ion-label>\n                <ion-input *ngIf="enableBillingAddress" required type="text" [(ngModel)]="form.billing_postcode" name="postcode" (ngModelChange)="updateOrderReview()"> </ion-input>\n                <ion-item class="select-item-field" *ngIf="enableBillingAddress">\n                    <ion-label> {{"Country" | translate}} </ion-label>\n                    <ion-select okText="{{\'OK\' | translate}}" cancelText="{{\'Cancel\' | translate}}" [(ngModel)]="form.billing_country" (ngModelChange)="getRegion(form.billing_country)" name="billing_country">\n                        <div *ngFor="let field of form.country.countries | keys">\n                            <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span> </ion-option>\n                        </div>\n                    </ion-select>\n                </ion-item>\n                <ion-item *ngIf="states && enableBillingAddress" class="select-item-field" style="margin-top:20px">\n                    <ion-label> {{"State" | translate}} </ion-label>\n                    <ion-select okText="{{\'OK\' | translate}}" cancelText="{{\'Cancel\' | translate}}" [(ngModel)]="form.billing_state" name="billing_state" (ngModelChange)="updateOrderReview()">\n                        <div *ngFor="let field of states | keys">\n                            <ion-option value="{{field.key}}">{{field.value}} </ion-option>\n                        </div>\n                    </ion-select>\n                </ion-item>\n                <div *ngIf="!states && enableBillingAddress">\n                    <ion-label> {{"State" | translate}} </ion-label>\n                    <ion-input required type="text" [(ngModel)]="form.billing_state" name="billing_state" (ngModelChange)="updateOrderReview()"> </ion-input>\n                </div>\n                <div class="same-for-shipping" *ngIf="enableBillingAddress">\n                    <ion-item class="side-heading-background">\n                        <ion-label color="side-heading-color">{{"Same For Shipping" | translate}} </ion-label>\n                        <ion-toggle checked="true" [(ngModel)]="form.shipping" name="shipping"> </ion-toggle>\n                    </ion-item>\n                </div>\n                <ion-row *ngIf="enableBillingAddress">\n                    <ion-col *ngIf="values.isLoggedIn"> <button ion-button outline type="submit" class="button button-block button-default" (click)="backToAddressPage()">{{"Cancel" | translate}}\n           </button> </ion-col>\n                    <ion-col *ngIf="values.isLoggedIn"> <button ion-button outline style="float: right" type="submit" class="button button-block button-default" (click)="showShippingForm()">{{"Save" | translate}}\n           </button> </ion-col>\n                    <ion-col *ngIf="!values.isLoggedIn"> <button ion-button outline style="float: right" type="submit" class="button button-block button-default" (click)="showShippingForm()">{{"Next" | translate}}\n           </button> </ion-col>\n                </ion-row> <br> </ion-list>\n            <div class="Address-form" *ngIf="enableShippingForm">\n                <ion-list class="shipping-address-list">\n                    <ion-item class="billing-header" no-lines *ngIf="enableShippingForm">\n                        <ion-label color="side-heading-color">{{"Shipping Address" | translate}} </ion-label>\n                    </ion-item>\n                    <ion-label *ngIf="enableShippingForm">{{"First Name" | translate}} </ion-label>\n                    <ion-input *ngIf="enableShippingForm" required type="text" [(ngModel)]="form.shipping_first_name" name="first_name"> </ion-input>\n                    <ion-label *ngIf="enableShippingForm">{{"Last Name"| translate}} </ion-label>\n                    <ion-input *ngIf="enableShippingForm" required type="text" [(ngModel)]="form.shipping_last_name" name="last_name"> </ion-input>\n                    <ion-label *ngIf="enableShippingForm">{{"Address" | translate}} </ion-label>\n                    <ion-input *ngIf="enableShippingForm" required type="text" [(ngModel)]="form.shipping_address_1" name="address_1"> </ion-input>\n                    <ion-label *ngIf="enableShippingForm">{{"Landmark" | translate}} </ion-label>\n                    <ion-input *ngIf="enableShippingForm" required type="text" [(ngModel)]="form.shipping_address_2" name="address_2"> </ion-input>\n                    <ion-label *ngIf="enableShippingForm">{{"City" | translate}} </ion-label>\n                    <ion-input *ngIf="enableShippingForm" required type="text" [(ngModel)]="form.shipping_city" name="shipping_city" (ngModelChange)="updateOrderReview()"> </ion-input>\n                    <ion-label *ngIf="enableShippingForm">{{"Postcode" | translate}} </ion-label>\n                    <ion-input *ngIf="enableShippingForm" required type="text" [(ngModel)]="form.shipping_postcode" name="shipping_postcode" (ngModelChange)="updateOrderReview()"> </ion-input>\n                    <ion-item class="select-item-field" *ngIf="enableShippingForm">\n                        <ion-label> {{"Country" | translate}} </ion-label>\n                        <ion-select okText="{{\'OK\' | translate}}" cancelText="{{\'Cancel\' | translate}}" [(ngModel)]="form.shipping_country" (ngModelChange)="getRegion(form.shipping_country)" name="shipping_country">\n                            <div *ngFor="let field of form.country.countries | keys">\n                                <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span> </ion-option>\n                            </div>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item *ngIf="states && enableShippingForm" class="select-item-field" style="margin-top:20px">\n                        <ion-label> {{"State" | translate}} </ion-label>\n                        <ion-select okText="{{\'OK\' | translate}}" cancelText="{{\'Cancel\' | translate}}" [(ngModel)]="form.shipping_state" name="form.shipping_state" (ngModelChange)="updateOrderReview()">\n                            <div *ngFor="let field of states | keys">\n                                <ion-option value="{{field.key}}">{{field.value}} </ion-option>\n                            </div>\n                        </ion-select>\n                    </ion-item>\n                    <div *ngIf="!states && enableShippingForm">\n                        <ion-label>{{form.checkout_fields?.shipping?.shipping_state?.label}} </ion-label>\n                        <ion-input required type="text" [(ngModel)]="form.shipping_state" name="form.shipping_state" (ngModelChange)="updateOrderReview()"> </ion-input>\n                    </div>\n                </ion-list>\n                <ion-row style="margin-top:16px" *ngIf="enableShippingForm">\n                    <ion-col *ngIf="!values.isLoggedIn"> <button ion-button type="submit" outline class="button button-block button-default" (click)="backToBillingForm()">{{"Back" | translate}}\n           </button> </ion-col>\n                    <ion-col *ngIf="values.isLoggedIn"> <button ion-button type="submit" outline class="button button-block button-default" (click)="backToAddressPage()">{{"Cancel" | translate}}\n           </button> </ion-col>\n                    <ion-col *ngIf="!values.isLoggedIn"> <button ion-button style="float: right" outline type="submit" class="button button-block button-default" (click)="showShippingMethods()">{{"Next" | translate}}\n           </button> </ion-col>\n                    <ion-col *ngIf="values.isLoggedIn"> <button ion-button style="float: right" outline type="submit" class="button button-block button-default" (click)="showShippingMethods()">{{"Save" | translate}}\n           </button> </ion-col>\n                </ion-row> <br> </div>\n        </form>\n    </div>\n    <div style="margin:0 5px">\n        <div *ngIf="OrderReview?.shipping && enableShippingMethods" class="shipping-methods">\n            <ion-list no-margin text-wrap radio-group [(ngModel)]="chosen_shipping" (ngModelChange)="updateShipping(chosen_shipping)">\n                <ion-item class="shipping-method-header" no-lines>\n                    <ion-label>{{"Choose Shipping" | translate}} </ion-label>\n                </ion-item>\n                <ion-item *ngFor="let method of OrderReview.shipping | keys" style="padding-left:20px">\n                    <ion-label><span [innerHTML]="method.value.label"></span> <b>-</b> <span>{{method.value.cost  | currency:values.currency:true:\'1.2-2\'}}</span></ion-label>\n                    <ion-radio value="{{method.value.id}}"> </ion-radio>\n                </ion-item>\n            </ion-list>\n        </div>\n        <hr style="margin: 12px;height:1px;background-color: rgba(0, 0, 0, 0.06);" *ngIf="OrderReview?.shipping && enableShippingMethods">\n        <ion-list *ngIf="OrderReview?.cart && enableShippingMethods" class="order-summary">\n            <ion-item class="order-review-header" no-lines>\n                <ion-label color="side-heading-color">{{"Order Summary" | translate}} : </ion-label>\n            </ion-item>\n            <div *ngFor="let item of OrderReview.cart.cart_contents | keys">\n                <ion-row>\n                    <ion-col col-8>\n                        <ion-label no-margin>{{item.value.name}} </ion-label>\n                    </ion-col>\n                    <ion-col col-4 text-right>\n                        <ion-label no-margin><span style="margin-right:16px; float: left;"> X {{item.value.quantity}}</span> {{1*item.value.line_subtotal | currency:values.currency:true:\'1.2-2\'}} </ion-label>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div *ngIf="OrderReview.totals.discount_total && OrderReview.totals.discount_total != 0">\n                <ion-row>\n                    <ion-col col-8 class="col1">\n                        <ion-label no-margin>{{"Coupon" | translate}} </ion-label>\n                    </ion-col>\n                    <ion-col col-4 text-right>\n                        <ion-label no-margin> - {{1*OrderReview.totals.discount_total | currency:values.currency:true:\'1.2-2\'}} </ion-label>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <ion-row *ngIf="OrderReview.totals.cart_contents_total != 0">\n                <ion-col col-8 class="col1">\n                    <ion-label>{{"Subtotal ex. tax" | translate}} </ion-label>\n                </ion-col>\n                <ion-col col-4 text-right>\n                    <ion-label>{{1*OrderReview.totals.cart_contents_total | currency:values.currency:true:\'1.2-2\'}} </ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-8 class="col1">\n                    <ion-label no-margin>{{"SubTotal" | translate}} </ion-label>\n                </ion-col>\n                <ion-col col-4 text-right>\n                    <ion-label no-margin>{{1*OrderReview.totals.subtotal | currency:values.currency:true:\'1.2-2\'}} </ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf="OrderReview.totals.total_tax != 0">\n                <ion-col col-8 class="col1">\n                    <ion-label>{{"Tax Total" | translate}} </ion-label>\n                </ion-col>\n                <ion-col col-4 text-right>\n                    <ion-label>{{1*OrderReview.totals.total_tax | currency:values.currency:true:\'1.2-2\'}} </ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf="OrderReview.totals.shipping_total != 0">\n                <ion-col col-8 class="col1">\n                    <ion-label>{{"Shipping" | translate}} {{"Charges" | translate}} </ion-label>\n                </ion-col>\n                <ion-col col-4 text-right>\n                    <ion-label>{{1*OrderReview.totals.shipping_total | currency:values.currency:true:\'1.2-2\'}} </ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row class="grand-total">\n                <ion-col col-8>\n                    <ion-label no-margin> <b>{{"Total" | translate}} {{"Amount" | translate}}\n              </b> </ion-label>\n                </ion-col>\n                <ion-col col-4 text-right>\n                    <ion-label no-margin style="font-size:16px"> <b>{{1*OrderReview.totals.total | currency:values.currency:true:\'1.2-2\'}}\n              </b> </ion-label>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n        <hr style="margin: 10px 8px 12px;height:1px;background-color: rgba(0, 0, 0, 0.06);"> </div>\n    <!--  -->\n    <div *ngIf="enablePaymentMethods" class="payment-methods">\n        <ion-item class="payment-method-header" no-lines>\n            <ion-label>{{"Choose Payment Method" | translate}} </ion-label>\n        </ion-item>\n        <div *ngIf="form.payment">\n            <ion-list no-margin text-wrap radio-group [(ngModel)]="form.payment_method" (ngModelChange)="changePayment()">\n                <ion-item *ngFor="let method of form.payment | keys">\n                    <ion-label class="payment-method-title">{{method.value.title}} </ion-label>\n                    <ion-radio value="{{method.value.id}}"> </ion-radio>\n                </ion-item>\n            </ion-list>\n            <div *ngIf="form.payment_method != \'stripe\'" class="side-heading-background">\n                <ion-label class="payment-instructions">{{form.payment_instructions}} </ion-label>\n                <ion-row class="check-box-bottom" style="margin-top:0" *ngIf="form.show_terms">\n              <ion-col no-lines class="col1">\n                  <ion-checkbox checked="true" [(ngModel)]="form.terms" name="terms"> </ion-checkbox>\n              </ion-col>\n              <ion-col class="col2">\n                  <ion-label>{{"I Agree" | translate}} <a  (click)="terms()">{{"Terms & Conditions" | translate}}</a> </ion-label>\n              </ion-col>\n            </ion-row>\n                <div class="button-margin"> <button ion-button color="button-color" text-uppercase [disabled]="buttonSubmit" block secondary type="submit" class="button button-block button-default" (click)="checkout()">{{PlaceOrder | translate}}\n        </button> </div>\n            </div>\n        </div>\n        <div *ngIf="form.payment_method ==\'stripe\'" class="side-heading-background stripe-payment">\n            <ion-label [innerHTML]="form.payment.stripe.description"> </ion-label>\n            <form #f="ngForm" class="stripe-payment">\n                <ion-item no-lines style="margin-bottom: 5px;">\n                    <ion-label color="side-heading-color">Stripe Card Details </ion-label>\n                </ion-item>\n                <div class="Address-form">\n                    <ion-label>{{"Card Number" | translate}} </ion-label>\n                    <ion-input required type="text" [(ngModel)]="form.stripe_number" name="stripe_number" placeholder="Card number"> </ion-input>\n                    <ion-label>{{"Expiry Month" | translate}} </ion-label>\n                    <ion-input required type="text" [(ngModel)]="form.stripe_exp_month" name="stripe_exp_year" placeholder="Expiry month"> </ion-input>\n                    <ion-label>{{"Expiry Year" | translate}} </ion-label>\n                    <ion-input required type="text" [(ngModel)]="form.stripe_exp_year" name="stripe_exp_year" placeholder="Expiry year"> </ion-input>\n                    <ion-label>{{"Card Code" | translate}} </ion-label>\n                    <ion-input required type="text" [(ngModel)]="form.stripe_code" name="stripe_code" placeholder="CVV"> </ion-input>\n                </div>\n            </form>\n            <ion-row class="check-box-bottom" style="margin-top:0" *ngIf="form.show_terms">\n              <ion-col no-lines class="col1">\n                  <ion-checkbox checked="true" [(ngModel)]="form.terms" name="terms"> </ion-checkbox>\n              </ion-col>\n              <ion-col class="col2">\n                  <ion-label>{{"I Agree" | translate}} <a  (click)="terms()">{{"Terms & Conditions" | translate}}</a> </ion-label>\n              </ion-col>\n            </ion-row>\n            <div class="button-margin"> <button ion-button color="button-color" text-uppercase *ngIf="form.payment_method ==\'stripe\'" [disabled]="buttonSubmit" (click)="checkout()" block secondary type="submit" class="button button-block button-default">{{PlaceOrder | translate}}\n      </button> </div>\n        </div> <br> </div>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/checkout/billing-address-form/billing-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_5__providers_service_values__["a" /* Values */]])
    ], BillingAddressForm);
    return BillingAddressForm;
}());

//# sourceMappingURL=billing-address-form.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
var Config = /** @class */ (function () {
    function Config() {
        this.url = 'http://cruzdiabloestudio.com.ar/woocommerce';
        this.consumerKey = 'ck_015fe8b82ab936ea5457e579d715786141abcd59';
        this.consumerSecret = 'cs_1a6036d2e1afd01a33d5119dba135b7735890e71';
        this.oneSignalAppId = 'f2aafbcd-9b7b-4879-b583-635db30f3942';
        this.googleProjectId = '978427489263';
        this.webClientId = '456352511209-fbam1kgj6350b5ddsf4vfidbs1.apps.googleusercontent.com';
        this.appDir = 'ltr';
        this.appRateIosAppId = '12345678';
        this.appRateAndroidLink = 'https://play.google.com/store/apps/details?id=com.mstoreapp.wootab0002&hl=en';
        this.appRateWindowsId = '12345678';
        this.shareAppMessage = 'Hi Check this app and download it';
        this.shareAppSubject = 'Hi';
        this.shareAppURL = 'https://play.google.com/store/apps/details?id=com.mstoreapp.wootab0002&hl=en';
        this.shareAppChooserTitle = 'Pick an app';
        this.supportEmail = 'support@mstoreapp.com';
        this.options = {};
        this.optionstwo = {};
        this.options.withCredentials = true;
        this.options.headers = headers;
        this.optionstwo.withCredentials = false;
        this.optionstwo.headers = headers;
        this.oauth = oauthSignature;
        this.oauth_signature_method = 'HMAC-SHA1';
        this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        this.params = {};
        this.params.oauth_consumer_key = this.consumerKey;
        this.params.oauth_signature_method = 'HMAC-SHA1';
        this.params.oauth_version = '1.0';
    }
    Config.prototype.setOauthNonce = function (length, chars) {
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    };
    Config.prototype.setUrl = function (method, endpoint, filter) {
        var key;
        var unordered = {};
        var ordered = {};
        if (this.url.indexOf('https') >= 0) {
            unordered = {};
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            unordered['consumer_key'] = this.consumerKey;
            unordered['consumer_secret'] = this.consumerSecret;
            Object.keys(unordered).sort().forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            return this.url + endpoint + this.searchParams.toString();
        }
        else {
            var url = this.url + endpoint;
            this.params['oauth_consumer_key'] = this.consumerKey;
            this.params['oauth_nonce'] = this.setOauthNonce(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            this.params['oauth_timestamp'] = new Date().getTime() / 1000;
            for (key in this.params) {
                unordered[key] = this.params[key];
            }
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            Object.keys(unordered).sort().forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            this.encodedSignature = this.oauth.generate(method, url, this.searchParams.toString(), this.consumerSecret);
            return this.url + endpoint + this.searchParams.toString() + '&oauth_signature=' + this.encodedSignature;
        }
    };
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkout_billing_address_form_billing_address_form__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_wishlist_wishlist__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CartPage = /** @class */ (function () {
    function CartPage(viewCtrl, nav, service, values, params, functions, toastCtrl) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.toastCtrl = toastCtrl;
        this.addProduct = true;
        this.disableSubmit = false;
        this.buttonCoupon = false;
        this.disableSubmitCoupon = false;
        this.enableCoupon = false;
        this.Apply = "Apply";
        this.Checkout = "Checkout";
        this.quantity = 1;
        this.options = [];
        this.obj = params.data;
        this.service.loadCart()
            .then(function (results) { return _this.handleCartInit(results); });
    }
    CartPage.prototype.handleCartInit = function (results) {
        this.cart = results;
        this.shipping = results.zone_shipping;
        this.chosen_shipping = results.chosen_shipping;
    };
    CartPage.prototype.handleCart = function (results) {
        this.cart = results;
    };
    CartPage.prototype.delete = function (key) {
        var _this = this;
        this.service.deleteItem(key).then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.checkout = function () {
        var _this = this;
        this.disableSubmit = true;
        this.Checkout = "Please Wait";
        this.service.checkout().then(function (results) { return _this.handleBilling(results); });
    };
    CartPage.prototype.handleBilling = function (results) {
        this.disableSubmit = false;
        this.Checkout = "Checkout";
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */], results);
    };
    CartPage.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        this.service.deleteFromCart(id, key).then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.addToCart = function (id, key) {
        var _this = this;
        this.service.addToCart(id, key).then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.updateCart = function (results) {
        var _this = this;
        this.service.loadCart().then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.submitCoupon = function () {
        var _this = this;
        if (this.cart.coupon != undefined) {
            this.disableSubmitCoupon = true;
            this.Apply = "Apply";
            this.service.submitCoupon(this.cart.coupon).then(function (results) { return _this.handleCoupon(results); });
        }
    };
    CartPage.prototype.handleCoupon = function (results) {
        var _this = this;
        console.log(results);
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.enableCoupon = false;
        this.cart.coupon = "";
        this.functions.showAlert("STATUS", results._body);
        this.service.loadCart().then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.removeCoupon = function () {
        var _this = this;
        this.service.removeCoupon(this.cart.applied_coupons).then(function (results) { return _this.handleRemoveCoupon(results); });
    };
    CartPage.prototype.handleRemoveCoupon = function (results) {
        var _this = this;
        this.functions.showAlert(results.status, results.message);
        this.service.loadCart().then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.enableCouponOffer = function () {
        if (this.enableCoupon) {
            this.enableCoupon = false;
        }
        else {
            this.enableCoupon = true;
        }
    };
    CartPage.prototype.handleResults = function (a) {
        if (a.message.status == 'success') {
            this.functions.showAlert(a.message.status, a.message.text);
        }
        else {
            this.functions.showAlert(a.message.status, a.message.text);
        }
    };
    CartPage.prototype.updateShipping = function (method) {
        var _this = this;
        this.chosen_shipping = method;
        this.service.updateShipping(method).then(function (results) { return _this.handleShipping(results); });
    };
    CartPage.prototype.handleShipping = function (results) {
        this.cart = results;
    };
    CartPage.prototype.gohome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
    };
    CartPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], id);
    };
    CartPage.prototype.wishlist = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__account_wishlist_wishlist__["a" /* WishlistPage */]);
    };
    CartPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.service.addToWishlist(id).then(function (results) { return _this.updateWishlist(results); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    CartPage.prototype.updateWishlist = function (a) {
        if (a.success == "Success") {
            this.presentToast();
            this.values.wishlistId[this.cart.cart_contents.product_id] = true;
        }
        else {
            this.functions.showAlert("error", "error");
        }
    };
    CartPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Item added to wishlist',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    CartPage.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add product to wishlist',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    CartPage.prototype.ionViewWillEnter = function () {
        if (document.querySelector(".tabbar")) {
            this.tabBarElement = document.querySelector(".tabbar")['style'];
            this.tabBarElement.display = 'none';
        }
    };
    CartPage.prototype.ionViewWillLeave = function () {
        if (document.querySelector(".tabbar"))
            this.tabBarElement.display = 'flex';
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/cart/cart.html"*/'<ion-header no-border class="cart-header">\n    <ion-navbar color="header"> <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n        <ion-title *ngIf="cart?.cart_totals.total >= \'1\'">{{"Cart"| translate}} ({{1*cart?.cart_totals.total | currency:values.currency:true:\'1.2-2\'}}) </ion-title>\n        <ion-title *ngIf="cart?.cart_totals.total == \'0\'">Your {{"Cart"| translate}} </ion-title>\n        <ion-buttons end> <button ion-button icon-only light class="has-icon icon-only has-badge" *ngIf="values.isLoggedIn" (click)="wishlist()">\n        <ion-icon name="ios-heart-outline" style="margin-right: 5px;">\n        </ion-icon>\n      </button> <button ion-button icon-only light class="has-icon icon-only has-badge">\n        <ion-icon class="ion-md-cart item-icon">\n        </ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n        </ion-badge>\n      </button> </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content class="cart">\n    <ion-spinner *ngIf="!cart" name="crescent"> </ion-spinner>\n    <div *ngIf="cart">\n        <div class="empty" *ngIf="cart.cart_contents.length == 0"> <img src="assets/image/empty-cart.png">\n            <h4 color="side-heading-color" text-center no-lines>{{"Your cart is empty" | translate}}</h4>\n            <h5 text-center no-lines>{{"Add some products available in our store to checkout" | translate}}</h5> <button ion-button class="butt" item-center medium color="button-color" text-uppercase (click)="gohome()">{{"Continue Shopping" | translate}}</button> </div>\n        <div *ngIf="cart?.cart_contents">\n            <div class="cart-items">\n                <div class="cart-list" *ngFor="let item of cart.cart_contents | keys">\n                    <ion-item no-lines>\n                        <ion-thumbnail item-left (click)="getProduct(item.value.product_id)"> <img src="{{item.value.thumb}}"> </ion-thumbnail>\n                        <h2 wrap-text class="item-name" style="position: absolute;top: 15px;max-width: 50%;">{{item.value.name}}</h2>\n                        <h3 wrap-text style="position: absolute; margin-top: -17px;">{{item.value.price | currency:values.currency:true:\'1.2-2\'}}</h3>\n                        <h3 wrap-text style="position: absolute;right: 10px;bottom: 20px;font-size:  14px">{{"Total" | translate}} : <span style="font-size: 14px">{{1*item.value.line_subtotal | currency:values.currency:true:\'1.2-2\'}}</span></h3>\n                        <div class="add-remove-button"> <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear (click)="deleteFromCart(item.value.product_id, item.key)">\n              <ion-icon name="md-remove">\n              </ion-icon>\n            </button> <button ion-button item-right color="button-color" clear style="border: 0; margin: 0 5px;background: #f2f2f2;color: #000;">{{item.value.quantity}}\n            </button> <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear (click)="addToCart(item.value.product_id, item.key)">\n              <ion-icon name="md-add">\n              </ion-icon>\n            </button> </div> <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear (click)="delete( item.key )" style="position: absolute;top: 10px;right: 10px;color: #a5a5a5;">\n              <ion-icon name="md-close">\n              </ion-icon>\n            </button> </ion-item>\n                </div>\n                <div class="add-from-wishlist" *ngIf="values.isLoggedIn && cart.cart_contents.length != 0">\n                    <ion-item (click)="wishlist()" tappable>\n                        <ion-icon name="ios-heart-outline" item-left></ion-icon>\n                        <h2>{{"Add From My Wishlist" | translate}}</h2>\n                        <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n                    </ion-item>\n                </div>\n            </div>\n            <div *ngIf="cart.cart_contents.length != 0" class="coupon-offers">\n                <ion-item no-lines (click)="enableCouponOffer()" [ngClass]="{activeCoupon1: enableCoupon}" class="coupon-header">\n                    <ion-icon name="ios-pricetag-outline" item-left></ion-icon>\n                    <h6 *ngIf="cart.cart_totals.discount_total == 0">{{"Apply Coupon and Offers" | translate}}</h6>\n                    <h6 *ngIf="cart.cart_totals.discount_total != 0">{{"Coupon" | translate}} {{cart.applied_coupons}} {{"Applied" | translate}}</h6>\n                </ion-item>\n                <div *ngIf="enableCoupon">\n                    <form #f="ngForm" class="coupon">\n                        <ion-item [ngClass]="{activeCoupon2: enableCoupon}">\n                            <ion-input type="text" placeholder="Coupon code" [(ngModel)]="cart.coupon" name="coupon"> </ion-input>\n                            <h2 item-right> <button ion-button color="button-color" block type="submit" text-uppercase [disabled]=\'disableSubmitCoupon\' (click)="submitCoupon()"> {{Apply | translate}}\n              </button> </h2>\n                        </ion-item>\n                    </form>\n                </div>\n            </div>\n            <div *ngIf="cart.cart_contents.length != 0" style="margin: 4px 2px 0 2px;">\n                <ion-list class="totals">\n                    <ion-row>\n                        <ion-col width-75>\n                            <ion-label>{{"SubTotal" | translate}} </ion-label>\n                        </ion-col>\n                        <ion-col width-25 text-right>\n                            <ion-label>{{1*cart.cart_totals.subtotal | currency:values.currency:true:\'1.2-2\'}} </ion-label>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="cart.cart_totals.subtotal_tax != 0">\n                        <ion-col width-75>\n                            <ion-label>{{"SubTotal" | translate}} {{"Tax" | translate}} </ion-label>\n                        </ion-col>\n                        <ion-col width-25 text-right>\n                            <ion-label>{{1*cart.cart_totals.subtotal_tax | currency:values.currency:true:\'1.2-2\'}} </ion-label>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="cart.cart_totals.discount_total && cart.cart_totals.discount_total != 0">\n                        <ion-col width-75 class="remove-coupon">\n                            <ion-label>{{"Coupons" | translate}} - {{cart.applied_coupons}} <a (click)="removeCoupon()"> (Remove)\n                </a> </ion-label>\n                        </ion-col>\n                        <ion-col width-25 text-right>\n                            <ion-label>- {{1*cart.cart_totals.discount_total | currency:values.currency:true:\'1.2-2\'}} </ion-label>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="cart.cart_totals.shipping_total != 0">\n                        <ion-col width-75>\n                            <ion-label>{{"Shipping" | translate}} </ion-label>\n                        </ion-col>\n                        <ion-col width-25 text-right>\n                            <ion-label>{{1*cart.cart_totals.shipping_total | currency:values.currency:true:\'1.2-2\'}} </ion-label>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="cart.cart_totals.shipping_tax != 0">\n                        <ion-col width-75>\n                            <ion-label>{{"Shipping" | translate}} {{"Tax" | translate}} </ion-label>\n                        </ion-col>\n                        <ion-col width-25 text-right>\n                            <ion-label>{{1*cart.cart_totals.shipping_tax | currency:values.currency:true:\'1.2-2\'}} </ion-label>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="cart.cart_totals.total_tax != 0">\n                        <ion-col width-75>\n                            <ion-label>{{"Total" | translate}} {{"Tax" | translate}} </ion-label>\n                        </ion-col>\n                        <ion-col width-25 text-right>\n                            <ion-label>{{1*cart.cart_totals.total_tax | currency:values.currency:true:\'1.2-2\'}} </ion-label>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width-75>\n                            <ion-label> <b> {{"Grand Total" | translate}}\n                </b> </ion-label>\n                        </ion-col>\n                        <ion-col width-25 text-right>\n                            <ion-label style="font-weight: 600;font-size: 17px">{{1*cart.cart_totals.total | currency:values.currency:true:\'1.2-2\'}} </ion-label>\n                        </ion-col>\n                    </ion-row>\n                </ion-list>\n            </div>\n        </div>\n    </div>\n</ion-content>\n<div *ngIf="cart">\n    <ion-footer class="cart-footer" *ngIf="cart.cart_contents.length != 0">\n        <ion-row>\n            <ion-col class="col1">\n                <div class="you-pay">\n                    <h3 *ngIf="cart?.cart_totals.discount_total && cart.cart_totals.discount_total != 0">{{"Save" | translate}}: {{1*cart.cart_totals.discount_total | currency:values.currency:true:\'1.2-2\'}}</h3>\n                    <h2>{{"You Pay" | translate}}: {{1*cart?.cart_totals.total | currency:values.currency:true:\'1.2-2\'}}</h2>\n                </div>\n            </ion-col>\n            <ion-col class="col2">\n                <div class="checkout-button"> <button ion-button full color="button-color" no-padding no-margin text-uppercase [disabled]=\'disableSubmit\' (click)="checkout()"> {{Checkout | translate}} <ion-icon name="ios-arrow-forward"></ion-icon>\n    </button> </div>\n            </ion-col>\n        </ion-row>\n    </ion-footer>\n</div>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSummary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_checkout_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderSummary = /** @class */ (function () {
    function OrderSummary(nav, service, params, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.params = params;
        this.functions = functions;
        this.values = values;
        this.id = params.data;
        if (document.querySelector(".tabbar"))
            this.tabBarElement = document.querySelector(".tabbar")['style'];
        this.service.getOrderSummary(this.id)
            .then(function (results) { return _this.orderSummary = results; });
    }
    OrderSummary.prototype.Continue = function () {
        this.values.count = 0;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    OrderSummary.prototype.ionViewWillEnter = function () {
        if (document.querySelector(".tabbar"))
            this.tabBarElement.display = 'none';
    };
    OrderSummary.prototype.ionViewWillLeave = function () {
        if (document.querySelector(".tabbar"))
            this.tabBarElement.display = 'flex';
    };
    OrderSummary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/checkout/order-summary/order-summary.html"*/'<ion-header no-border>\n    <ion-navbar color="header" hideBackButton> <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n        <ion-title text-wrap text-center>{{"Order Summary" | translate}} </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="order-summary">\n    <ion-spinner *ngIf="!orderSummary" name="crescent"> </ion-spinner>\n    <div *ngIf="orderSummary" class="margin">\n        <div class="thank-you-message">\n            <ion-item>\n                <h2>{{"Order Received" | translate}} </h2>\n                <h3>{{"Thank you. Your order has been received" | translate}} </h3>\n            </ion-item>\n        </div>\n        <div *ngIf="orderSummary" class="summary">\n            <ion-item no-lines>\n                <h2>{{"Order Number" | translate}} : {{orderSummary.number}} </h2>\n                <h2>{{"Order date" | translate}} : {{orderSummary.date_created | date:\'medium\'}} </h2>\n                <h2>{{"Total" | translate}} : {{1*orderSummary.total | currency:values.currency:symbol:\'1.2-2\'}} </h2>\n                <h2>{{"Payment Method" | translate}} : {{orderSummary.payment_method_title}} </h2>\n                <div *ngFor="let item of orderSummary.shipping_lines | keys">\n                    <h2>{{"Shipping" | translate}} : {{item.value.method_title}} </h2>\n                </div>\n            </ion-item>\n        </div>\n        <div class="order-details">\n            <ion-item no-lines>\n                <ion-label class="side-header">{{"Order Details" | translate}} </ion-label>\n            </ion-item>\n            <div *ngFor="let item of orderSummary.line_items | keys">\n                <ion-row>\n                    <ion-col width-75>\n                        <ion-label no-margin>{{item.value.name}} - ({{item.value.quantity}}) </ion-label>\n                    </ion-col>\n                    <ion-col width-25 text-right>\n                        <ion-label no-margin>{{1*item.value.subtotal | currency:values.currency:symbol:\'1.2-2\' }} </ion-label>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <ion-row *ngIf="orderSummary.coupon_lines.length != 0">\n                <ion-col width-75>\n                    <ion-label no-margin>{{"coupon" | translate}} </ion-label>\n                </ion-col>\n                <ion-col width-25 text-right>\n                    <ion-label no-margin>{{1*orderSummary.discount_total | currency:values.currency:symbol:\'1.2-2\' }} </ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col width-75>\n                    <ion-label no-margin>{{"Shipping Total" | translate}} </ion-label>\n                </ion-col>\n                <ion-col width-25 text-right>\n                    <ion-label no-margin>{{1*orderSummary.shipping_total | currency:values.currency:symbol:\'1.2-2\' }} </ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf="!orderSummary.shipping_tax == 0">\n                <ion-col width-75>\n                    <ion-label no-margin>{{"Shipping" | translate}} {{"Tax" | translate}} </ion-label>\n                </ion-col>\n                <ion-col width-25 text-right>\n                    <ion-label no-margin>{{1*orderSummary.shipping_tax | currency:values.currency:symbol:\'1.2-2\' }} </ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col width-75>\n                    <ion-label no-margin>{{"Total" | translate}} {{"Tax" | translate}} </ion-label>\n                </ion-col>\n                <ion-col width-25 text-right>\n                    <ion-label no-margin>{{1*orderSummary.total_tax | currency:values.currency:symbol:\'1.2-2\' }} </ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row class="order-total">\n                <ion-col width-75>\n                    <ion-label class="side-header">{{"Total" |translate}} </ion-label>\n                </ion-col>\n                <ion-col width-25 text-right>\n                    <ion-label> <b>{{1*orderSummary.total | currency:values.currency:symbol:\'1.2-2\' }}\n              </b> </ion-label>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n</ion-content>\n<ion-footer *ngIf="orderSummary"> <button ion-button full color="button-color" no-padding no-margin text-uppercase (click)="Continue()">\n    {{"Continue" | translate}}\n  </button> </ion-footer>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/checkout/order-summary/order-summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], OrderSummary);
    return OrderSummary;
}());

//# sourceMappingURL=order-summary.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsCondition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsCondition = /** @class */ (function () {
    function TermsCondition(nav, params) {
        this.nav = nav;
        this.terms = params.data;
    }
    TermsCondition = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/checkout/terms-condition/terms-condition.html"*/'<ion-header no-border>\n    <ion-navbar color="header">\n        <ion-title text-center>{{"Terms & Conditions" | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding class="terms-condition">\n    <div class="terms">\n        <p [innerHTML]="terms"></p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/checkout/terms-condition/terms-condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TermsCondition);
    return TermsCondition;
}());

//# sourceMappingURL=terms-condition.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(391);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_popover_about_popover__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_my_account_my_account__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_my_information_my_information__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_order_details_order_details__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_orders_orders__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_register_register__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_wishlist_wishlist__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cart_cart__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_categories_categories__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_checkout_billing_address_form_billing_address_form__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_checkout_order_summary_order_summary__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_checkout_terms_condition_terms_condition__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_filter_filter__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_products_products__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_search_search__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_sort_sort__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_post_post__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_pipe__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_http__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_in_app_browser__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_native_storage__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_service_cart_service__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_service_wishlist_service__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_service_category_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_service_checkout_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_service_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_service_product_service__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_service_search_service__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_service_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_common_http__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ngx_translate_core__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ngx_translate_http_loader__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_photo_viewer__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_call_number__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_email_composer__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_onesignal__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_app_rate__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_social_sharing__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























/*------------------------Providers----------------------------------*/



















//import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_47__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__["a" /* Address */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__["a" /* EditAddressForm */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__["a" /* AccountForgotten */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__["a" /* AccountLogin */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_my_account_my_account__["a" /* MyAccount */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_my_information_my_information__["a" /* MyInformation */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_orders_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_register_register__["a" /* AccountRegister */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_categories_categories__["a" /* Categories */],
                __WEBPACK_IMPORTED_MODULE_18__pages_checkout_terms_condition_terms_condition__["a" /* TermsCondition */],
                __WEBPACK_IMPORTED_MODULE_16__pages_checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */],
                __WEBPACK_IMPORTED_MODULE_17__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */],
                __WEBPACK_IMPORTED_MODULE_19__pages_filter_filter__["a" /* Filter */],
                __WEBPACK_IMPORTED_MODULE_21__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sort_sort__["a" /* Sort */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pipes_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_26__pages_post_post__["a" /* Post */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_33__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_44__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_45__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_46__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_46__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_44__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__["a" /* Address */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__["a" /* EditAddressForm */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__["a" /* AccountForgotten */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__["a" /* AccountLogin */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_my_account_my_account__["a" /* MyAccount */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_my_information_my_information__["a" /* MyInformation */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_orders_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_register_register__["a" /* AccountRegister */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_categories_categories__["a" /* Categories */],
                __WEBPACK_IMPORTED_MODULE_16__pages_checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */],
                __WEBPACK_IMPORTED_MODULE_17__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */],
                __WEBPACK_IMPORTED_MODULE_18__pages_checkout_terms_condition_terms_condition__["a" /* TermsCondition */],
                __WEBPACK_IMPORTED_MODULE_19__pages_filter_filter__["a" /* Filter */],
                __WEBPACK_IMPORTED_MODULE_21__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sort_sort__["a" /* Sort */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_post_post__["a" /* Post */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_34__providers_service_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_35__providers_service_wishlist_service__["a" /* WishlistService */],
                __WEBPACK_IMPORTED_MODULE_36__providers_service_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_37__providers_service_checkout_service__["a" /* CheckoutService */],
                __WEBPACK_IMPORTED_MODULE_38__providers_service_config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_39__providers_service_functions__["a" /* Functions */],
                __WEBPACK_IMPORTED_MODULE_40__providers_service_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_41__providers_service_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_42__providers_service_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_43__providers_service_values__["a" /* Values */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_http__["a" /* HTTP */],
                // Facebook,
                // GooglePlus,
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_rate__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_email_composer__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_post_post__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_my_account_my_account__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_orders_orders__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_account_register_register__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cart_cart__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_products_products__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_account_address_address__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_onesignal__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var MyApp = /** @class */ (function () {
    function MyApp(emailComposer, appRate, modalCtrl, oneSignal, socialSharing, statusBar, splashScreen, alertCtrl, platform, service, config, values, translateService, menuCtrl) {
        var _this = this;
        this.emailComposer = emailComposer;
        this.appRate = appRate;
        this.modalCtrl = modalCtrl;
        this.oneSignal = oneSignal;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.service = service;
        this.config = config;
        this.values = values;
        this.translateService = translateService;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */];
        this.items = {};
        this.buttonLanguagesSettings = false;
        this.showmore = false;
        this.data = {};
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            if (_this.config.appDir == 'rtl')
                _this.platform.setDir('rtl', true);
            _this.service.load().then(function (results) { return _this.handleService(results); });
            if (platform.is('cordova')) {
                _this.oneSignal.startInit(_this.config.oneSignalAppId, _this.config.googleProjectId);
                _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
                _this.oneSignal.handleNotificationReceived().subscribe(function (result) { });
                _this.oneSignal.handleNotificationOpened().subscribe(function (result) {
                    if (result.notification.payload.additionalData.category) {
                        _this.items.id = result.notification.payload.additionalData.category;
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_18__pages_products_products__["a" /* ProductsPage */], _this.items);
                    }
                    else if (result.notification.payload.additionalData.product) {
                        _this.items.id = result.notification.payload.additionalData.product;
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_19__pages_product_product__["a" /* ProductPage */], _this.items.id);
                    }
                    else if (result.notification.payload.additionalData.post) {
                        _this.items.id = result.notification.payload.additionalData.post;
                        _this.post(_this.items.id);
                    }
                });
                _this.oneSignal.endInit();
            }
            _this.translateService.setDefaultLang('english');
        });
    }
    MyApp.prototype.handleService = function (results) {
        this.service.getProducts();
        this.service.getfeaturedProduct();
        this.service.getbestOffers();
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.getCategory = function (id, slug, name) {
        this.values.onsale = false;
        this.values.newCollections = false;
        this.values.featuredProducts = false;
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.menuCtrl.close();
        this.items.categories = this.service.categories;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_products_products__["a" /* ProductsPage */], this.items);
    };
    MyApp.prototype.getCart = function () {
        this.values.hideTabbar = false;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.logout = function () {
        this.service.logout();
    };
    MyApp.prototype.login = function () {
        this.values.cartLoadEnable = false;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_account_login_login__["a" /* AccountLogin */]);
    };
    MyApp.prototype.signIn = function () {
        this.values.cartLoadEnable = false;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_account_login_login__["a" /* AccountLogin */]);
    };
    MyApp.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_account_register_register__["a" /* AccountRegister */]);
    };
    MyApp.prototype.address = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_20__pages_account_address_address__["a" /* Address */]);
    };
    MyApp.prototype.order = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_account_orders_orders__["a" /* Orders */]);
    };
    MyApp.prototype.cart = function () {
        this.values.hideTabbar = false;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_cart_cart__["a" /* CartPage */], 1);
    };
    MyApp.prototype.post = function (id) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_post_post__["a" /* Post */], id);
    };
    MyApp.prototype.myAccount = function () {
        if (this.values.isLoggedIn) {
            this.values.hideCloseButton = false;
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__pages_account_my_account_my_account__["a" /* MyAccount */]);
            modal.present();
        }
        else {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_account_login_login__["a" /* AccountLogin */]);
        }
    };
    MyApp.prototype.bestOffers = function () {
        this.values.onsale = true;
        this.values.newCollections = false;
        this.values.featuredProducts = false;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_products_products__["a" /* ProductsPage */]);
    };
    MyApp.prototype.shop = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    MyApp.prototype.getSubCategoryDropdown = function (j) {
        for (var item in this.service.mainCategories) {
            if (item == j) {
                if (this.service.mainCategories[j].activated)
                    this.service.mainCategories[j].activated = false;
                else
                    this.service.mainCategories[j].activated = true;
            }
        }
    };
    MyApp.prototype.rateApp = function () {
        this.appRate.preferences.storeAppURL = {
            ios: this.config.appRateIosAppId,
            android: this.config.appRateAndroidLink,
            windows: 'ms-windows-store://review/?ProductId=' + this.config.appRateWindowsId
        };
        this.appRate.promptForRating(true);
    };
    MyApp.prototype.shareApp = function () {
        var options = {
            message: this.config.shareAppMessage,
            subject: this.config.shareAppSubject,
            files: ['', ''],
            url: this.config.shareAppURL,
            chooserTitle: this.config.shareAppChooserTitle
        };
        this.socialSharing.shareWithOptions(options);
    };
    MyApp.prototype.contact = function () {
        var email = {
            to: this.config.supportEmail,
            subject: '',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    MyApp.prototype.more = function () {
        if (this.showmore) {
            this.showmore = false;
        }
        else {
            this.showmore = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n   <div class="menu-toolbar">\n      <ion-toolbar>\n         <h2>{{"MY SHOP" | translate}}</h2>\n      </ion-toolbar>\n   </div>\n   <ion-content class="sidemenugrad">\n      <div *ngIf="service.categories" class="category-name-list">\n         <ion-row tappable full *ngFor="let item of service.mainCategories; let i = index">\n            <ion-item (click)="getSubCategoryDropdown(i)" class="category" no-lines [ngClass]="{selected : service.mainCategories[i].activated}">\n            <h4 [innerHTML]="item.name">\n            </h4>\n            <h4 item-right *ngIf="service.mainCategories[i].activated" no-margin>\n               <ion-icon name="ios-arrow-up" item-right style="margin-top:0"></ion-icon>\n            </h4>\n            <h4 item-right *ngIf="!service.mainCategories[i].activated" no-margin>\n               <ion-icon name="ios-arrow-down" item-right></ion-icon>\n            </h4>\n            </ion-item>\n            <div *ngIf="service.mainCategories[i].activated" style="width:100%">\n               <div class="sub-category">\n                  <ion-item tappable no-lines class="category-title" (click)="getCategory(item.id, item.slug, item.name)">\n                     <ion-icon name="ios-arrow-forward" item-left></ion-icon>\n                     <ion-icon name="ios-arrow-forward" item-left style="margin-right:10px"></ion-icon>\n                        {{"View All" | translate}}\n                  </ion-item>\n                     <div *ngFor="let subcat of service.categories">\n                     <ion-item tappable *ngIf="subcat.parent == item.id" no-lines class="category-title" (click)="getCategory(subcat.id, subcat.slug, subcat.name)">\n                        <ion-icon name="ios-arrow-forward" item-left></ion-icon>\n                        <ion-icon name="ios-arrow-forward" item-left style="margin-right:10px"></ion-icon>\n                        <span class="category-name" [innerHTML]="subcat.name"></span>\n                     </ion-item>\n                  </div>\n               </div>\n            </div>\n         </ion-row>\n      </div>\n      <ion-list class="list-items">\n         <ion-item tappable menuClose (click)="shop()" [ngClass]="{selected: activated}">\n         <ion-icon name="ios-home" item-left></ion-icon>\n         {{"Home" | translate}}\n         </ion-item>\n         <ion-item tappable menuClose (click)="login()" *ngIf="!values.isLoggedIn" [ngClass]="{selected: activated}">\n         {{"LogIn" | translate}} / {{"Sign Up" | translate}}\n         <ion-icon name="md-log-in" item-left></ion-icon>\n         </ion-item>\n         <!--ion-item tappable menuClose (click)="myAccount()" *ngIf="values.isLoggedIn">\n            {{"My" | translate}} {{"Account" | translate}}\n            <ion-icon name="md-person" item-left></ion-icon>\n            </ion-item-->\n         <ion-item tappable menuClose (click)="cart()">\n            {{"Checkout" | translate}}\n            <ion-icon name="md-cart" item-left></ion-icon>\n         </ion-item>\n         <ion-item tappable menuClose (click)="logout()" *ngIf="values.isLoggedIn">\n         <ion-icon name="md-log-out" item-left></ion-icon>\n         {{"Logout" | translate}}\n         </ion-item>\n         <ion-item tappable (click)="more()" *ngIf="!showmore">\n         <ion-icon item-left name="ios-more" style="font-size:28px;display:flex"></ion-icon>\n         {{"More" | translate}}\n         </ion-item>\n         <div *ngIf="showmore">\n            <ion-item tappable menuClose (click)="contact()">\n               {{"contact" | translate}}\n               <ion-icon name="ios-mail" item-left></ion-icon>\n            </ion-item>\n            <ion-item tappable menuClose (click)="post(values.data.pages.about)">\n               {{"About us" | translate}}\n               <ion-icon name="ios-information-circle" item-left></ion-icon>\n            </ion-item>\n            <ion-item tappable menuClose (click)="post(values.data.pages.terms)">\n               <ion-icon name="ios-paper" item-left></ion-icon>\n               {{"Terms & Conditions" | translate}}\n            </ion-item>\n            <ion-item tappable menuClose no-line (click)="shareApp()">\n               <ion-icon name="md-share" item-left></ion-icon>\n               {{"Share App" | translate}}\n            </ion-item>\n            <ion-item tappable menuClose no-line (click)="rateApp()">\n               <ion-icon name="md-thumbs-up" item-left></ion-icon>\n               {{"Rate App" | translate}}\n            </ion-item>\n         </div>\n         <ion-item tappable (click)="more()" *ngIf="showmore">\n         <ion-icon item-left name="ios-more" style="font-size:28px;display:flex"></ion-icon>\n         {{"Less" | translate}}\n         </ion-item>\n      </ion-list>\n      <h5 class="footer-icons">\n         <a href="https://www.facebook.com/">\n         <ion-icon name="logo-facebook" style="color: #3b5998;"></ion-icon>\n         </a>\n         <a href="https://twitter.com/">\n         <ion-icon name="logo-twitter" style="color: #1dcaff;"></ion-icon>\n         </a>\n         <a href="https://plus.google.com">\n         <ion-icon name="logo-googleplus" style="color: #d34836;"></ion-icon>\n         </a>\n      </h5>\n      <br showWhen="ios">\n   </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false">\n</ion-nav>'/*ion-inline-end:"/Users/davidricota/git/App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_rate__["a" /* AppRate */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_6__providers_service_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_5__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__md5__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_popover_about_popover__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProductPage = /** @class */ (function () {
    function ProductPage(viewCtrl, photoViewer, popoverCtrl, nav, service, params, functions, values, socialSharing, loadingCtrl, modalCtrl) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.photoViewer = photoViewer;
        this.popoverCtrl = popoverCtrl;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.wishlistIcon = false;
        this.showSpecification = false;
        this.moreDescription = false;
        this.disableBuyNow = false;
        this.disableAddButton = false;
        this.showOverview = true;
        this.showRelated = false;
        this.showReviews = false;
        this.segment = 'overview';
        this.form = {};
        this.buttonSubmitLogin = false;
        this.showAddReview = false;
        this.count5 = 0;
        this.count4 = 0;
        this.count3 = 0;
        this.count2 = 0;
        this.count1 = 0;
        this.count5Percentage = '0' + '%';
        this.count4Percentage = '0' + '%';
        this.count3Percentage = '0' + '%';
        this.count2Percentage = '0' + '%';
        this.count1Percentage = '0' + '%';
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.id = params.data;
        this.options = [];
        this.quantity = "1";
        this.AddToCart = "Add To Cart";
        if (document.querySelector(".tabbar"))
            this.tabBarElement = document.querySelector(".tabbar")['style'];
        this.service.getProduct(this.id)
            .then(function (results) { return _this.handleProductResults(results); });
    }
    ProductPage_1 = ProductPage;
    ProductPage.prototype.handleProductResults = function (results) {
        this.product = results;
        if ((this.product.type == 'variable') && this.product.variations.length)
            this.getVariationProducts();
        this.getReviews();
        this.getRelatedProducts();
        this.getUpsellProducts();
        this.getCrossSellProducts();
    };
    ProductPage.prototype.getVariationProducts = function () {
        var _this = this;
        this.service.getVariationProducts(this.product.id).then(function (results) { return _this.variations = results; });
    };
    ProductPage.prototype.getProduct = function (id) {
        this.nav.push(ProductPage_1, id);
    };
    ProductPage.prototype.addToCart = function (id) {
        var _this = this;
        if (this.product.type == 'variable' && this.options.length == 0) {
            this.functions.showAlert('Eroor', 'Please Select Product Option...');
        }
        else {
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
            this.service.addToCart(obj).then(function (results) { return _this.updateCart(); });
        }
    };
    ProductPage.prototype.buyNow = function (id) {
        var _this = this;
        if (this.product.type == 'variable' && this.options.length == 0) {
            this.functions.showAlert('Eroor', 'Please Select Product Option...');
        }
        else {
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
            this.service.addToCart(obj).then(function (results) { return _this.updateBuynowResults(results); });
        }
    };
    ProductPage.prototype.changeProduct = function () {
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
        for (var item in this.variations) {
            if (this.variations[item].id == obj.variation_id) {
                this.product.in_stock = this.variations[item].in_stock;
                this.product.price = this.variations[item].price;
                this.product.regular_price = this.variations[item].regular_price;
                this.product.sale_price = this.variations[item].sale_price;
            }
        }
    };
    ProductPage.prototype.updateBuynowResults = function (a) {
        this.disableBuyNow = false;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    ProductPage.prototype.updateCart = function () {
        this.disableAddButton = false;
        this.AddToCart = "Add To Cart";
    };
    ProductPage.prototype.getCart = function () {
        this.values.hideTabbar = true;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    ProductPage.prototype.getReviews = function () {
        var _this = this;
        this.service.getReviews(this.id).then(function (results) { return _this.handleReview(results); });
    };
    ProductPage.prototype.handleReview = function (a) {
        var _this = this;
        this.reviews = a;
        this.count = this.product.rating_count;
        for (var item in this.reviews) {
            this.reviews[item].avatar = Object(__WEBPACK_IMPORTED_MODULE_5__md5__["a" /* md5 */])(this.reviews[item].email);
        }
        this.reviews.forEach(function (review) {
            if (review.rating == 5) {
                _this.count5 = _this.count5 + 1;
            }
            if (review.rating == 4) {
                _this.count4 = _this.count4 + 1;
            }
            if (review.rating == 3) {
                _this.count3 = _this.count3 + 1;
            }
            if (review.rating == 2) {
                _this.count2 = _this.count2 + 1;
            }
            if (review.rating == 1) {
                _this.count1 = _this.count1 + 1;
            }
        });
        this.count5Percentage = ((this.count5 / this.count) * 100) + '%';
        this.count4Percentage = ((this.count4 / this.count) * 100) + '%';
        this.count3Percentage = ((this.count3 / this.count) * 100) + '%';
        this.count2Percentage = this.count2 + '%';
        this.count1Percentage = this.count1 + '%';
    };
    ProductPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results); });
        }
        else {
            this.functions.showAlert("Warning", "You must login to add product to wishlist");
        }
    };
    ProductPage.prototype.update = function (a) {
        if (a.success == "Success") {
            this.values.wishlistId[this.product.id] = true;
        }
        else {
            this.functions.showAlert("error", "error");
        }
    };
    ProductPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    ProductPage.prototype.showSpecs = function () {
        if (this.showSpecification) {
            this.showSpecification = false;
        }
        else {
            this.showSpecification = true;
        }
    };
    ProductPage.prototype.showMore = function () {
        this.moreDescription = true;
    };
    ProductPage.prototype.showLess = function () {
        this.moreDescription = false;
    };
    ProductPage.prototype.getRelatedProducts = function () {
        var _this = this;
        if (this.product.related_ids != 0) {
            this.service.getRelatedProducts(this.product.related_ids).then(function (results) { return _this.related = results; });
        }
    };
    ProductPage.prototype.getRelatedProduct = function (id) {
        this.nav.push(ProductPage_1, id);
    };
    ProductPage.prototype.getUpsellProducts = function () {
        var _this = this;
        if (this.product.upsell_ids != 0) {
            this.service.getRelatedProducts(this.product.upsell_ids).then(function (results) { return _this.upsell = results; });
        }
    };
    ProductPage.prototype.getCrossSellProducts = function () {
        var _this = this;
        if (this.product.cross_sell_ids != 0) {
            this.service.getRelatedProducts(this.product.cross_sell_ids).then(function (results) { return _this.crossSell = results; });
        }
    };
    ProductPage.prototype.share = function (product, network, fab) {
        var options = {
            message: 'Hey check this product',
            subject: product.title,
            files: ['', ''],
            url: product.permalink,
            chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
        };
        var loading = this.loadingCtrl.create({
            content: "Posting to " + network,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
        this.socialSharing.shareWithOptions(options);
    };
    ProductPage.prototype.showMoreReviews = function () {
        this.showRelated = false;
        this.showOverview = false;
        this.showReviews = true;
        this.segment = 'reviews';
    };
    ProductPage.prototype.viewPhoto = function (index) {
        this.slides.slideTo(index + 1, 500);
    };
    ProductPage.prototype.zoomPhoto = function (src) {
        this.photoViewer.show(src, this.product.name);
    };
    ProductPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__about_popover_about_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: event
        });
    };
    ProductPage.prototype.ionViewDidLoad = function () {
        if (document.querySelector(".tabbar"))
            this.tabBarElement.display = 'none';
    };
    ProductPage.prototype.ionViewWillLeave = function () {
        if (document.querySelector(".tabbar"))
            this.tabBarElement.display = 'flex';
    };
    ProductPage.prototype.similar = function () {
        this.showRelated = true;
        this.showOverview = false;
        this.showReviews = false;
        this.segment = 'related';
    };
    ProductPage.prototype.updateSchedule = function (event) {
        if (event._value == 'overview') {
            this.showOverview = true;
            this.showRelated = false;
            this.showReviews = false;
        }
        else if (event._value == 'related') {
            this.showOverview = false;
            this.showRelated = true;
            this.showReviews = false;
        }
        else if (event._value == 'reviews') {
            this.showOverview = false;
            this.showRelated = false;
            this.showReviews = true;
        }
    };
    ProductPage.prototype.yourRating = function (rating) {
        this.form.rating = rating;
    };
    ProductPage.prototype.submitComment = function () {
        var _this = this;
        this.form.id = this.id;
        if (this.validate()) {
            this.buttonSubmitLogin = true;
            this.service.submitComment(this.form).then(function (results) {
                _this.status = results;
                _this.buttonSubmitLogin = false;
                _this.functions.showAlert("Success", "Thank you for your review! Your review is awaiting approval");
            });
        }
    };
    ProductPage.prototype.validate = function () {
        if (!this.values.isLoggedIn) {
            if (this.form.author == undefined || this.form.author == "") {
                this.functions.showAlert("ERROR", "Please Enter Name");
                return false;
            }
            if (this.form.email == undefined || this.form.email == "") {
                this.functions.showAlert("ERROR", "Please Enter Email");
                return false;
            }
        }
        if (this.form.comment == undefined || this.form.comment == "") {
            this.functions.showAlert("ERROR", "Please Enter Comment");
            return false;
        }
        else
            return true;
    };
    ProductPage.prototype.showSubmitReview = function () {
        if (this.showAddReview)
            this.showAddReview = false;
        else
            this.showAddReview = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], ProductPage.prototype, "slides", void 0);
    ProductPage = ProductPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/product/product.html"*/'<ion-header no-border>\n    <ion-navbar color="header">\n        <ion-title style="overflow: hidden;text-overflow: ellipsis;"> {{product?.name}} </ion-title>\n        <ion-buttons end> <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n        <ion-icon class="ion-md-cart item-icon">\n        </ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n        </ion-badge>\n      </button> <button ion-button icon-only *ngIf="values.isLoggedIn" (click)="presentPopover($event)" style="color:#fff;margin-left:6px;margin-right:6px;">\n        <ion-icon ios="md-more" md="md-more" style="font-size:30px;"></ion-icon>\n      </button> </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content class="product-page">\n    <ion-spinner *ngIf="!product" name="crescent"> </ion-spinner>\n    <div class="segment" *ngIf="product">\n        <ion-segment [(ngModel)]="segment" (ionChange)="updateSchedule($event)">\n            <ion-segment-button tappable value="overview">\n                <ion-label text-uppercase>{{"Overview" | translate}}</ion-label>\n            </ion-segment-button>\n            <ion-segment-button tappable value="related">\n                <ion-label text-uppercase>{{"Related" | translate}} </ion-label>\n            </ion-segment-button>\n            <ion-segment-button tappable value="reviews">\n                <ion-label text-uppercase>{{"Reviews" | translate}}</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div *ngIf="showOverview">\n        <div *ngIf="product" class="product-details">\n            <div *ngIf="product.images">\n                <ion-slides #slides pager="true" loop="true" autoplay="5800">\n                    <ion-slide *ngFor="let item of product.images"> <img src="{{item.src}}" (click)="zoomPhoto(item.src)"> </ion-slide>\n                </ion-slides>\n                <div class="scrollmenu2"> <a *ngFor="let item of product.images; let i = index">\n            <img src="{{item.src}}" (click)="viewPhoto(i)"/>\n          </a> </div>\n            </div>\n            <div *ngIf="product.in_stock && product.sale_price"> <span class="offer" text-uppercase>{{"Offer" | translate}}</span> </div> <button ion-button clear *ngIf="!product.in_stock" item-left class="stock" color="danger">{{"No Stock" | translate}}\n        </button>\n            <div class="body-index">\n                <h2 class="product-name"> {{product.name}} </h2>\n                <ion-item class="price-label" no-lines>\n                    <span *ngIf="!product.sale_price">{{product.price | currency:values.currency:symbol:\'1.2-2\'}} </span>\n                    <span *ngIf="product.sale_price"><span>{{product.sale_price | currency:values.currency:symbol:\'1.2-2\'}}</span></span>\n                    <span *ngIf="product.sale_price"><del>{{product.regular_price | currency:values.currency:symbol:\'1.2-2\'}}</del> <span class="offer-price" *ngIf="((product.regular_price - product.sale_price) /product.regular_price*100) >= \'1\'">{{(product.regular_price - product.sale_price) /product.regular_price*100 | number : \'1.0-0\'}}% {{"OFF" | translate}}</span> </span>\n                </ion-item>\n                <div (click)="showMoreReviews()"> <button ion-button icon-only small class="rating-button-grid1" style="height:20px">\n        <ion-icon name="md-star"><span class="rating-count">{{product.average_rating | number:\'1.1-1\'}}</span></ion-icon> \n      </button> <span style="color: #777;">{{product.rating_count}} ratings</span> </div>\n                <h2 style="font-size: 14px;margin: 10px 16px 8px;color:#333;" *ngIf="product.total_sales != 0">{{product.total_sales}} items sold</h2>\n                <ion-grid class="rating-and-total-sales-grid">\n                    <ion-row>\n                        <ion-col> <button class="share" ion-button color="button-color" (click)="share(product)">\n              <ion-icon name="ios-share-alt"></ion-icon> {{"Share" | translate}}\n            </button> </ion-col>\n                        <!--ion-col>\n            <button class="share" ion-button color="button-color" (click)="similar()">\n              <ion-icon name="ios-browsers"></ion-icon> Similar\n            </button>\n          </ion-col-->\n                        <ion-col> <button ion-button clear *ngIf="values.wishlistId[product.id]" (click)="removeFromWishlist(product.id)" item-right class="wishlist1" color="danger">\n              <ion-icon name="ios-heart"></ion-icon> {{"Remove" | translate}}\n            </button> <button ion-button clear *ngIf="!values.wishlistId[product.id]" (click)="addToWishlist(product.id)" item-right class="wishlist2" color="danger"> \n              <ion-icon name="ios-heart"></ion-icon> {{"Wishlist" | translate}}\n            </button> </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <!--variation product starts-->\n                <div *ngIf="variations?.length" class="variation-product">\n                    <ion-item>\n                        <ion-label> {{"Select Option" | translate}} </ion-label>\n                        <ion-select okText="{{\'OK\' | translate}}" cancelText="{{\'Cancel\' | translate}}" [(ngModel)]="options[0]" (ngModelChange)="changeProduct()">\n                            <div *ngFor="let option of variations">\n                                <div *ngIf="option.attributes.length == 1">\n                                    <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option}}">{{option.attributes[0].option | uppercase}} - {{option.price | currency:values.currency:symbol:\'1.2-2\'}} </ion-option>\n                                </div>\n                                <div *ngIf="option.attributes.length == 2">\n                                    <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option + \':variation[attribute_pa_\'+ option.attributes[1].name +\']:\' + option.attributes[1].option}}">{{option.attributes[0].option | uppercase}} - {{option.attributes[1].option | uppercase}} - {{option.price | currency:values.currency:symbol:\'1.2-2\'}} </ion-option>\n                                </div>\n                                <div *ngIf="option.attributes.length == 3">\n                                    <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option + \':variation[attribute_pa_\'+ option.attributes[1].name +\']:\' + option.attributes[1].option + \':variation[attribute_pa_\'+ option.attributes[2].name +\']:\' + option.attributes[2].option}}">{{option.attributes[0].option | uppercase}} - {{option.attributes[1].option | uppercase}} - {{option.attributes[2].option | uppercase}} - {{option.price | currency:values.currency:symbol:\'1.2-2\'}} </ion-option>\n                                </div>\n                            </div>\n                        </ion-select>\n                    </ion-item>\n                </div>\n                <div class="add-to-cart">\n                    <div class="quantity-item">\n                        <ion-item>\n                            <ion-label style="color: black">{{"Quantity" | translate}}</ion-label>\n                            <ion-input required type="number" [(ngModel)]="quantity" min="1" name="quantity"></ion-input>\n                        </ion-item>\n                    </div>\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col width-50 class="buynow"> <button ion-button full color="button-color" text-uppercase [disabled]=\'disableBuyNow || !product.in_stock\' (click)="buyNow(product.id)" style="color: #fff;margin: 0;width: 100%; min-height: 50px;">\n                {{"Buy now" | translate}}\n              </button> </ion-col>\n                            <ion-col width-50 class="keep"> <button ion-button full text-uppercase [disabled]=\'disableAddButton || !product.in_stock\' (click)="addToCart(product.id)" style="color: #fff;background-color: #ffa41c;margin: 0;width: 100%; min-height: 50px;">\n                {{"AddToCart" | translate}}\n              </button> </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n                <div *ngIf="product?.attributes.length" class="description">\n                    <ion-item no-lines class="item-background" (click)="showSpecs()" *ngIf="!showSpecification"> {{"Specifications" | translate}}\n                        <ion-icon item-right name="ios-arrow-down"></ion-icon>\n                    </ion-item>\n                    <ion-item no-lines class="item-background" (click)="showSpecs()" *ngIf="showSpecification"> {{"Specifications" | translate}}\n                        <ion-icon item-right name="ios-arrow-up"></ion-icon>\n                    </ion-item>\n                    <ion-item text-wrap no-lines *ngIf="showSpecification">\n                        <div *ngFor="let attribute of product.attributes">\n                            <h3 class="sold-by">{{attribute.name}} - <span [innerHTML]="attribute.options[0]"></span></h3>\n                        </div>\n                    </ion-item> <br> </div>\n                <div *ngIf="product.description || product.short_description" class="description">\n                    <div *ngIf="product.short_description" class="description">\n                        <!--ion-item no-lines class="item-background"> {{"Description" | translate}} </ion-item-->\n                        <ion-item text-wrap no-lines>\n                            <div [innerHTML]="product.short_description"> </div>\n                        </ion-item>\n                    </div>\n                    <div *ngIf="product.description && moreDescription" class="description">\n                        <ion-item text-wrap no-lines>\n                            <div [innerHTML]="product.description"> </div>\n                        </ion-item>\n                    </div>\n                    <div *ngIf="product.description && !product.short_description" class="description">\n                        <ion-item no-lines class="item-background"> {{"Description" | translate}} </ion-item>\n                        <ion-item text-wrap no-lines>\n                            <div [innerHTML]="product.description"> </div>\n                        </ion-item>\n                    </div>\n                    <ion-item no-lines class="show-more" *ngIf="!moreDescription && product.short_description">\n                        <h2 (click)="showMore()"><span class="span1">{{"Read more" | translate}}</span><span class="span2"><ion-icon name="ios-more"></ion-icon></span></h2>\n                    </ion-item>\n                    <ion-item no-lines class="show-more" *ngIf="moreDescription">\n                        <h2 (click)="showLess()"><span class="span1">{{"Read less" | translate}}</span></h2>\n                    </ion-item> <br><br>\n                 </div>\n                 \n                <div *ngIf="reviews?.length">\n                    <ion-item *ngIf="reviews" class="item-background"> {{"Reviews" | translate}} </ion-item>\n                    <div *ngFor="let item of reviews | slice:0:2; let i=index" class="reviews">\n                        <ion-item no-lines>\n                            <ion-avatar item-start style="margin:8px">\n                <img src="https://www.gravatar.com/avatar/{{item.avatar}}">\n              </ion-avatar>\n                            <h3 style="margin-bottom:0px;font-size:15px"> <span class="rating review-star">\n               <span class="star-icon" [ngClass]="{full: item.rating >= 1, half: item.rating == 0.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 2, half: item.rating == 1.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 3, half: item.rating == 2.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 4, half: item.rating == 3.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 5, half: item.rating == 4.5}">&#x2605;</span> </span>\n                            </h3>\n                            <h3>By {{item.name}}</h3>\n                            <h3 style="color:#9e9898;margin-bottom:4px;font-size:13px">{{item.date_created | date:\'medium\'}}</h3>\n                        </ion-item>\n                        <p text-wrap>{{item.review}}</p>\n                    </div>\n                    <ion-item style="padding-top: 6px;" no-lines class="show-more" *ngIf="reviews?.length >= 3" (click)="showMoreReviews()">\n                        <h2 tappable style="border-radius:20px"><span class="span1">{{"Show more" | translate}}</span><span class="span2" style="top:5px"><ion-icon name="ios-more"></ion-icon></span></h2>\n                    </ion-item>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="related-products" *ngIf="showRelated" style="background-color: whitesmoke; margin-bottom: -30px;">\n        <div *ngIf="related?.length">\n            <ion-item *ngIf="related" style="background-color:#f5f5f5"> <b>{{"Related Products" | translate}}</b> </ion-item>\n            <div class="grid">\n                <ion-row class="row unlimited-items">\n                    <ion-col class="col" *ngFor="let item of related">\n                        <ion-card>\n                            <ion-card-content (click)="getRelatedProduct(item.id)"> <img src="{{item.image_thumb}}" />\n                                <div *ngIf="item.stock_status == \'instock\' && item.sale_price && ((item.regular_price - item.sale_price) / item.regular_price*100) >= \'1\'" class="offer-tag"> <button ion-button small text-wrap>\n                  <span text-wrap>{{(item.regular_price - item.sale_price) / item.regular_price*100 | number : \'1.0-0\'}}% {{"OFF" | translate}}</span></button> </div>\n                            </ion-card-content>\n                            <h5 text-center>{{item.name}}</h5>\n                            <ion-label> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n              </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n              </span> <span *ngIf="item.sale_price" style="margin-left:6px">\n              <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n              </del>\n              </span> </ion-label>\n                            <h3 style="margin:4px 8px 6px 8px;font-size:12px;"> <span class="related-rating related-review-star">\n               <span class="star-icon" [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}">&#x2605;</span> </span>\n                            </h3>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </div>\n        <div *ngIf="upsell?.length">\n            <ion-item *ngIf="upsell" no-lines style="background-color:#f5f5f5"> <b>{{"You may also like" | translate}}</b> </ion-item>\n            <div class="grid">\n                <ion-row class="row unlimited-items">\n                    <ion-col class="col" *ngFor="let item of upsell">\n                        <ion-card>\n                            <ion-card-content (click)="getRelatedProduct(item.id)"> <img src="{{item.image_thumb}}" />\n                                <div *ngIf="item.stock_status == \'instock\' && item.sale_price && ((item.regular_price - item.sale_price) / item.regular_price*100) >= \'1\'" class="offer-tag"> <button ion-button small>\n                  <span text-wrap>{{(item.regular_price - item.sale_price) / item.regular_price*100 | number : \'1.0-0\'}}% {{"OFF" | translate}}</span></button> </div>\n                            </ion-card-content>\n                            <h5 text-center>{{item.name}}</h5>\n                            <ion-label> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n              </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n              </span> <span *ngIf="item.sale_price" style="margin-left:6px">\n              <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n              </del>\n              </span> </ion-label>\n                            <h3 style="margin:4px 8px 6px 8px;font-size:12px;"> <span class="related-rating related-review-star">\n               <span class="star-icon" [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}">&#x2605;</span> </span>\n                            </h3>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </div>\n        <div *ngIf="crossSell?.length">\n            <ion-item *ngIf="crossSell" no-lines style="background-color:#f5f5f5"> <b>{{"Recommended" | translate}} for you</b> </ion-item>\n            <div class="grid">\n                <ion-row class="row unlimited-items">\n                    <ion-col class="col" *ngFor="let item of crossSell">\n                        <ion-card>\n                            <ion-card-content (click)="getRelatedProduct(item.id)"> <img src="{{item.image_thumb}}" />\n                                <div *ngIf="item.stock_status == \'instock\' && item.sale_price && ((item.regular_price - item.sale_price) / item.regular_price*100) >= \'1\'" class="offer-tag"> <button ion-button small>\n                  <span text-wrap>{{(item.regular_price - item.sale_price) / item.regular_price*100 | number : \'1.0-0\'}}% OFF</span></button> </div>\n                            </ion-card-content>\n                            <h5 text-center>{{item.name}}</h5>\n                            <ion-label> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n                </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n                </span> <span *ngIf="item.sale_price" style="margin-right:6px">\n                <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n                </del>\n                </span> </ion-label>\n                            <h3 style="margin:4px 8px 6px 8px;font-size:12px;"> <span class="related-rating related-review-star">\n                 <span class="star-icon" [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}">&#x2605;</span> </span>\n                            </h3>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </div>\n    </div>\n    <div *ngIf="showReviews" class="show-reviews">\n        <div *ngIf="reviews">\n            <div class="review-info">\n                <ion-row>\n                    <ion-col style="border-right: 1px solid #f1f1f1;max-width:36%"> <button ion-button icon-only small class="rating-button-grid1" style="height:25px">\n            <ion-icon name="md-star" style="font-size: 17px"><span class="rating-count">{{product.average_rating | number:\'1.1-1\'}}</span></ion-icon> \n          </button>\n                        <h2 style="color: #777;font-size: 14px;margin: 5px 0 0 10px;">{{product.rating_count}} ratings</h2>\n                    </ion-col>\n                    <ion-col class="review-star-group">\n                        <ion-row>\n                            <ion-col style="max-width:35%">\n                                <h3 style="margin-top:6px;"> <span class="rating review-star" style="float:none">\n                <span class="star-icon full">&#x2605;</span> <span class="star-icon full">&#x2605;</span> <span class="star-icon full">&#x2605;</span> <span class="star-icon full">&#x2605;</span> <span class="star-icon full">&#x2605;</span> </span>\n                                </h3>\n                            </ion-col>\n                            <ion-col style="max-width:45%">\n                                <div class="progress-bar" item-right> <span [style.width]="count5Percentage"></span> </div>\n                            </ion-col>\n                            <ion-col style="max-width:20%">\n                                <h4 item-right> <span>{{count5 | number : \'1.0-0\'}}</span> </h4>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col style="max-width:35%">\n                                <h3 style="margin-top:6px;"> <span class="rating review-star" style="float:none">\n                 <span class="star-icon full">&#x2605;</span> <span class="star-icon full">&#x2605;</span> <span class="star-icon full">&#x2605;</span> <span class="star-icon full">&#x2605;</span> <span class="star-icon">&#x2605;</span> </span>\n                                </h3>\n                            </ion-col>\n                            <ion-col style="max-width:45%">\n                                <div class="progress-bar" item-right> <span [style.width]="count4Percentage"></span> </div>\n                            </ion-col>\n                            <ion-col style="max-width:20%">\n                                <h4 item-right> <span>{{count4 | number : \'1.0-0\'}}</span> </h4>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col style="max-width:35%">\n                                <h3 style="margin-top:6px;"> <span class="rating review-star" style="float:none">\n                <span class="star-icon full">&#x2605;</span> <span class="star-icon full">&#x2605;</span> <span class="star-icon full">&#x2605;</span> <span class="star-icon">&#x2605;</span> <span class="star-icon">&#x2605;</span> </span>\n                                </h3>\n                            </ion-col>\n                            <ion-col style="max-width:45%">\n                                <div class="progress-bar" item-right> <span [style.width]="count3Percentage"></span> </div>\n                            </ion-col>\n                            <ion-col style="max-width:20%">\n                                <h4 item-right> <span>{{count3 | number : \'1.0-0\'}}</span> </h4>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col style="max-width:35%">\n                                <h3 style="margin-top:6px;"> <span class="rating review-star" style="float:none">\n               <span class="star-icon full">&#x2605;</span> <span class="star-icon full">&#x2605;</span> <span class="star-icon">&#x2605;</span> <span class="star-icon">&#x2605;</span> <span class="star-icon">&#x2605;</span> </span>\n                                </h3>\n                            </ion-col>\n                            <ion-col style="max-width:45%">\n                                <div class="progress-bar" item-right> <span [style.width]="count2Percentage"></span> </div>\n                            </ion-col>\n                            <ion-col style="max-width:20%">\n                                <h4 item-right> <span>{{count2 | number : \'1.0-0\'}}</span> </h4>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col style="max-width:35%">\n                                <h3 style="margin-top:6px;"> <span class="rating review-star" style="float:none">\n                <span class="star-icon full">&#x2605;</span> <span class="star-icon">&#x2605;</span> <span class="star-icon">&#x2605;</span> <span class="star-icon">&#x2605;</span> <span class="star-icon">&#x2605;</span> </span>\n                                </h3>\n                            </ion-col>\n                            <ion-col style="max-width:45%">\n                                <div class="progress-bar" item-right> <span [style.width]="count1Percentage"></span> </div>\n                            </ion-col>\n                            <ion-col style="max-width:20%">\n                                <h4 item-right> <span>{{count1 | number : \'1.0-0\'}}</span> </h4>\n                            </ion-col>\n                        </ion-row>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <ion-card>\n                <ion-card-header style="background-color: #f5f5f5" tappable (click)="showSubmitReview()"> {{"Add a review" | translate}}\n                    <ion-icon *ngIf="!showAddReview" style="float: right" name="ios-arrow-down" item-right></ion-icon>\n                    <ion-icon *ngIf="showAddReview" style="float: right" name="ios-arrow-up" item-right></ion-icon>\n                </ion-card-header>\n                <ion-card-content>\n                    <div class="new-review" *ngIf="showAddReview">\n                        <ion-label style="margin: 10px 0 6px 18px; font-size:13px">{{form.name}} <span style="margin-right: 10px">{{"YOUR RATING" | translate}}</span> <span class="rating review-star" style="float:none;">\n              <span tappable (click)="yourRating(1)" class="star-icon" [ngClass]="{full: form.rating >= 1, half: form.rating == 0.5}">&#x2605;</span> <span tappable (click)="yourRating(2)" class="star-icon" [ngClass]="{full: form.rating >= 2, half: form.rating == 1.5}">&#x2605;</span> <span tappable (click)="yourRating(3)" class="star-icon" [ngClass]="{full: form.rating >= 3, half: form.rating == 2.5}">&#x2605;</span> <span tappable (click)="yourRating(4)" class="star-icon" [ngClass]="{full: form.rating >= 4, half: form.rating == 3.5}">&#x2605;</span> <span tappable (click)="yourRating(5)" class="star-icon" [ngClass]="{full: form.rating >= 5, half: form.rating == 4.5}">&#x2605;</span> </span>\n                        </ion-label>\n                        <div class="comment-form">\n                            <form #f="ngForm">\n                                <ion-list>\n                                    <ion-item *ngIf="!values.isLoggedIn">\n                                        <ion-input required type="text" [(ngModel)]="form.author" name="name" placeholder="{{\'Name\' | translate}}"> </ion-input>\n                                    </ion-item>\n                                    <ion-item *ngIf="!values.isLoggedIn">\n                                        <ion-input required type="email" [(ngModel)]="form.email" name="email" placeholder="{{\'Email\' | translate}}"> </ion-input>\n                                    </ion-item>\n                                    <ion-item class="comment-area"> <textarea rows="2" style="width: 100%; border: none;" required type="text" [(ngModel)]="form.comment" name="comment" placeholder="{{\'Comment\' | translate}}">\n                  </textarea> </ion-item>\n                                </ion-list>\n                                <div class="login-button"> <button style="margin: 16px 16px 0 16px;width: calc(100% - 32px);" ion-button block color="button-color" type="submit" text-uppercase [disabled]="buttonSubmitLogin" (click)="submitComment()">{{"Submit" | translate}}\n                </button> </div>\n                            </form>\n                        </div>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <ion-card *ngIf="reviews.length">\n                <ion-card-header style="background-color: #f5f5f5;margin-top: 10px;"> {{"Feedbacks" | translate}} </ion-card-header>\n                <ion-card-content>\n                    <div *ngFor="let item of reviews" class="reviews">\n                        <ion-item no-lines>\n                            <ion-avatar item-start style="margin:8px"> <img src="https://www.gravatar.com/avatar/{{item.avatar}}"> </ion-avatar>\n                            <h3 style="margin-bottom:6px;font-size:15px">{{item.name}} <span class="rating review-star">\n                <span class="star-icon" [ngClass]="{full: item.rating >= 1, half: item.rating == 0.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 2, half: item.rating == 1.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 3, half: item.rating == 2.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 4, half: item.rating == 3.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 5, half: item.rating == 4.5}">&#x2605;</span> </span>\n                            </h3>\n                            <h3 style="color:#9e9898;margin-bottom:4px;font-size: 13px">{{item.date_created | date:\'MMM d, y hh:mm a\'}} </h3>\n                        </ion-item>\n                        <p text-wrap>{{item.review}}</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div> <br> </ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/product/product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ProductPage);
    return ProductPage;
    var ProductPage_1;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_my_account_my_account__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_categories__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(values) {
        this.values = values;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__categories_categories__["a" /* Categories */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__account_my_account_my_account__["a" /* MyAccount */];
    }
    TabsPage.prototype.home = function (ev) {
        if (ev.length() > 1) {
            ev.popToRoot();
        }
    };
    TabsPage.prototype.category = function (ev) {
        if (ev.length() > 1) {
            ev.popToRoot();
        }
    };
    TabsPage.prototype.account = function (ev) {
        this.values.hideCloseButton = true;
        if (ev.length() > 1) {
            ev.popToRoot();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */])
    ], TabsPage.prototype, "nav", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/tabs/tabs.html"*/'<ion-tabs tabsPlacement="bottom">\n    <ion-tab [root]="tab1Root" tabTitle=" {{\'Home\' | translate}}" tabIcon="md-home" (ionSelect)="home($event)"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="{{\'Categories\' | translate}}" tabIcon="md-apps" (ionSelect)="category($event)"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="{{\'Search\' | translate}}" tabIcon="md-search"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="{{\'My Account\' | translate}}" tabIcon="md-person" (ionSelect)="account($event)"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_service_values__["a" /* Values */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_popover_about_popover__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_wishlist_wishlist__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_filter__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sort_sort__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ProductsPage = /** @class */ (function () {
    function ProductsPage(modalCtrl, viewCtrl, nav, popoverCtrl, service, params, values, functions) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.listview = false;
        this.noProducts = false;
        this.shouldShowCancel = true;
        this.sort = 0;
        this.loading = false;
        this.data = {};
        this.filter = {};
        this.q = "";
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.subCategories = [];
        this.items = [];
        this.quantity = "1";
        this.filter.category = params.data.id;
        this.categoryName = params.data.name;
        if (params.data.categories) {
            this.categories = params.data.categories;
            for (var i = 0; i < this.categories.length; i++) {
                if (this.categories[i].parent == this.filter.category) {
                    this.subCategories.push(this.categories[i]);
                }
            }
        }
        if (params.data.attributeSlug) {
            this.filter.attribute = params.data.attributeSlug;
        }
        if (params.data.attributeId) {
            this.filter.attribute_term = params.data.attributeId;
        }
        this.service.load(this.filter).then(function (results) { return _this.handleProducts(results); });
    }
    ProductsPage_1 = ProductsPage;
    ProductsPage.prototype.handleProducts = function (results) {
        this.products = results;
        this.viewCtrl.showBackButton(true);
    };
    ProductsPage.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.categories;
        this.nav.push(ProductsPage_1, this.items);
    };
    ProductsPage.prototype.parseText = function (id, count, offset, obj2) {
        var text = '{';
        text += '"category' + '":"' + id + '"}';
        var obj1 = JSON.parse(text);
        var obj3 = {};
        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
        return obj3;
    };
    ProductsPage.prototype.getProducts = function (id) {
        this.nav.push(ProductsPage_1, id);
    };
    ProductsPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], id);
    };
    ProductsPage.prototype.getCart = function () {
        this.values.hideTabbar = false;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    ProductsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.loadMore(this.filter).then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    ProductsPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    ProductsPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    ProductsPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    ProductsPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id).then(function (results) { return _this.status = results; });
    };
    ProductsPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id).then(function (results) { return _this.status = results; });
    };
    ProductsPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], id);
        }
        else {
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(":");
                text += '"' + res[0] + '":"' + res[1] + '",';
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then(function (results) { return _this.updateCart(results); });
        }
    };
    ProductsPage.prototype.updateCart = function (result) {
        console.log(result);
    };
    ProductsPage.prototype.onInput = function ($event) {
        var _this = this;
        this.loading = true;
        this.filter = "";
        this.filter = {};
        this.filter.page = 1;
        this.filter.search = $event.srcElement.value;
        //this.filter.order = "DESC";
        this.service.search(this.filter).then(function (results) { return _this.handleSearchResults(results); });
    };
    ProductsPage.prototype.handleSearchResults = function (results) {
        this.loading = false;
        this.products = results;
    };
    ProductsPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    ProductsPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.functions.showAlert("Warning", "You must login to add product to wishlist");
        }
    };
    ProductsPage.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    ProductsPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductsPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    ProductsPage.prototype.getWishlist = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__account_wishlist_wishlist__["a" /* WishlistPage */]);
    };
    ProductsPage.prototype.getFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__filter_filter__["a" /* Filter */], this.filter);
        modal.onDidDismiss(function (data) {
            if (_this.values.applyFilter) {
                _this.filter = _this.values.filter;
                _this.has_more_items = true;
                _this.filter.page = 1;
                _this.filter.opts = undefined;
                _this.filter.component = undefined;
                _this.service.load(_this.filter).then(function (results) { return _this.handleFilterResults(results); });
            }
        });
        modal.present();
    };
    ProductsPage.prototype.handleFilterResults = function (results) {
        this.products = results;
    };
    ProductsPage.prototype.getSort = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__sort_sort__["a" /* Sort */], this.filter);
        modal.onDidDismiss(function (data) {
            if (_this.values.applyFilter) {
                _this.filter = _this.values.filter;
                _this.has_more_items = true;
                _this.filter.page = 1;
                _this.filter.opts = undefined;
                _this.filter.component = undefined;
                _this.service.load(_this.filter).then(function (results) { return _this.handleFilterResults(results); });
            }
        });
        modal.present();
    };
    ProductsPage.prototype.scrollingFun = function (e) {
        if (e.scrollTop > this.contentHandle.getContentDimensions().contentHeight) {
            if (document.querySelector(".tabbar"))
                document.querySelector(".tabbar")['style'].display = 'none';
            if (this.topOrBottom == "top") {
                this.contentBox.marginTop = 0;
            }
            else if (this.topOrBottom == "bottom") {
                this.contentBox.marginBottom = 0;
            }
        }
        else {
            if (document.querySelector(".tabbar"))
                document.querySelector(".tabbar")['style'].display = 'flex';
            if (this.topOrBottom == "top") {
                this.contentBox.marginTop = this.tabBarHeight;
            }
            else if (this.topOrBottom == "bottom") {
                this.contentBox.marginBottom = this.tabBarHeight;
            }
        } //if else
    };
    ProductsPage.prototype.ionViewDidEnter = function () {
        this.topOrBottom = this.contentHandle._tabsPlacement;
        this.contentBox = document.querySelector(".scroll-content")['style'];
        if (this.topOrBottom == "top") {
            this.tabBarHeight = this.contentBox.marginTop;
        }
        else if (this.topOrBottom == "bottom") {
            this.tabBarHeight = this.contentBox.marginBottom;
        }
    };
    ProductsPage.prototype.ionViewDidLeave = function () {
        this.related = "";
    };
    ProductsPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__about_popover_about_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: event
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("contentRef"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ProductsPage.prototype, "contentHandle", void 0);
    ProductsPage = ProductsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/products/products.html"*/'<ion-header no-border class="products-header">\n    <ion-navbar color="header"> <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n        <ion-title text-center *ngIf="!showFilters && !showSortFilters" text-capitalize><span *ngIf="categoryName" [innerHTML]="categoryName"></span><span *ngIf="!categoryName">{{"Products" | translate}}</span></ion-title>\n        <ion-buttons end *ngIf="!showFilters && !showSortFilters"> <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n            <ion-icon class="ion-md-cart item-icon">\n            </ion-icon>\n            <ion-badge class="badge badge-light"  *ngIf="values.count">{{values.count}}\n            </ion-badge>\n          </button> <button ion-button icon-only *ngIf="values.isLoggedIn" (click)="presentPopover($event)" style="color:#fff;margin-left:6px;margin-right:6px;">\n              <ion-icon ios="md-more" md="md-more" style="font-size:30px;"></ion-icon>\n            </button> </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content class="products" #contentRef (ionScroll)="scrollingFun($event)">\n    <div class="search">\n        <ion-searchbar [(ngModel)]="q" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)" placeholder="{{\'What are you looking for\' | translate}}?" autocomplete="on" autocorrect="on" spellcheck="true"> </ion-searchbar>\n    </div>\n    <div *ngIf="subCategories.length" class="scrollmenu2"> <a class="sub-category" *ngFor="let item of subCategories">\n        <img *ngIf="item.image" src="{{item.image.src}}" (click)="getCategory(item.id, item.slug, item.name)"/>\n        <img *ngIf="!item.image" src="assets/image/category-background.jpg" (click)="getCategory(item.id, item.slug, item.name)">\n        <h5 class="category-name" [innerHTML]="item.name" (click)="getCategory(item.id, item.slug, item.name)"></h5>\n      </a> </div>\n    <ion-spinner *ngIf="!products && !values.related" name="crescent"> </ion-spinner>\n    <ion-spinner *ngIf="loading" name="crescent"> </ion-spinner>\n    <div *ngIf="products" class="products-listing">\n        <ion-item no-lines class="item-name"> <button ion-button icon-only clear color="button-color" (click)="getSort()">\n              <ion-icon name="md-options" style="margin-right:6px"></ion-icon> {{"Sort" | translate}}\n            </button> <button ion-button icon-only item-right clear color="button-color" *ngIf="values.listview" (click)="setGridView()">\n              <ion-icon name="md-grid" style="margin-right:6px">\n              </ion-icon>\n            </button> <button ion-button icon-only item-right clear color="button-color" *ngIf="!values.listview" (click)="setListView()">\n              <ion-icon name="md-list-box" style="margin-right:6px">\n              </ion-icon>\n            </button> <button ion-button icon-only item-right clear color="button-color" (click)="getFilter()">\n              <ion-icon name="ios-funnel"></ion-icon>\n            </button> </ion-item>\n        <div *ngIf="!products.length && !loading" class="no-products">\n            <h2>{{"No products found!" | translate}}</h2>\n        </div>\n        <div *ngIf="products.length && !loading">\n            <div *ngIf="values.listview" style="background-color: #f2f2f2;padding-top: 4px;">\n                <div class="item-list" *ngFor="let item of products">\n                    <ion-item class="left-padding" no-lines>\n                        <ion-thumbnail item-left class="stock-list" [ngClass]="{opacity: !item.in_stock}"> <img tappable (click)="getProduct(item.id)" src="{{item.images[0].src}}"> <button class="no-stock-button" ion-button *ngIf="!item.in_stock">{{"No Stock" | translate}}\n                    </button> </ion-thumbnail>\n                        <div *ngIf="item.in_stock && item.sale_price && ((item.regular_price - item.sale_price) / item.regular_price*100) >= \'1\'" class="offer-tag"> <button ion-button small text-wrap>\n                      <span text-wrap>{{(item.regular_price - item.sale_price) / item.regular_price*100 | number : \'1.0-0\'}}% {{"OFF" | translate}}</span></button> </div>\n                        <div class="product-details">\n                            <div class="product-name-top">\n                                <div class="product-label">\n                                    <div tappable (click)="getProduct(item.id)">\n                                        <h2 *ngIf="item.title">{{item.title}} </h2>\n                                        <h2 *ngIf="item.name">{{item.name}} </h2>\n                                    </div>\n                                </div>\n                            </div>\n                            <div [innerHTML]="item.short_description" class="short-description"> </div>\n                            <div style="margin-top: 6px;"> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n                    </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n                    </span> <span class="price-delete" *ngIf="item.sale_price">\n                    <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n                    </del>\n                    </span> <span style="color:red;font-size: 14px;" *ngIf="item.sale_price">{{"Save" | translate}} {{item.regular_price - item.price | currency:values.currency:symbol:\'1.0-0\'}}</span> </div>\n                            <h3 style="font-size:11px; margin: 3px 0"> <span class="rating review-star">\n                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}">&#x2605;</span> </span>\n                            </h3>\n                        </div>\n                        <div width-20 class="bottom-left-button">\n                            <ion-icon name="md-heart" class="wishlist-button-fill" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n                            <ion-icon name="md-heart-outline" class="wishlist-button" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n                        </div>\n                    </ion-item>\n                </div><br> </div>\n            <div *ngIf="!values.listview">\n                <div class="grid">\n                    <ion-row class="row unlimited-items">\n                        <ion-col class="col" *ngFor="let item of products">\n                            <ion-card>\n                                <ion-card-content class="stock"> <img tappable src="{{item.images[0].src}}" (click)="getProduct(item.id)" [ngClass]="{opacity: !item.in_stock}">\n                                    <div> <button ion-button color="danger" *ngIf="!item.in_stock">{{"No Stock" | translate}}\n                        </button> </div>\n                                    <div *ngIf="item.in_stock && item.sale_price && ((item.regular_price - item.sale_price) / item.regular_price*100) >= \'1\'" class="offer-tag" class="offer-tag"> <button ion-button small text-wrap>\n                      <span text-wrap>{{(item.regular_price - item.sale_price) / item.regular_price*100 | number : \'1.0-0\'}}% {{"OFF" | translate}}</span></button> </div>\n                                    <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n                                    <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n                                </ion-card-content>\n                                <div tappable (click)="getProduct(item.id)" class="card-name">\n                                    <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n                                    <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n                                </div>\n                                <ion-label style="margin-bottom:14px;margin-left: 4px;"> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n                    </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n                    </span> <span class="price-delete" *ngIf="item.sale_price">\n                    <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n                    </del>\n                    </span> </ion-label>\n                                <!--h3 style="font-size: 13px;color: #d33;padding: 0; margin-left: 12px;" *ngIf="item.sale_price">{{"Save" | translate}} {{item.regular_price - item.price | currency:values.currency:symbol:\'1.0-0\'}}</h3> <button ion-button icon-only small class="rating-button-grid1" style="height:20px">\n                  <ion-icon name="md-star"><span class="rating">{{item.average_rating | number:\'1.1-1\'}}</span></ion-icon>\n                  </button> <span style="text-align:left"> {{item.rating_count}} ratings</span-->\n                            </ion-card>\n                        </ion-col>\n                    </ion-row>\n                </div><br> </div>\n        </div>\n        <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n            <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading more items..\' | translate}}"> </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </div> <br> <br> </ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/products/products.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], ProductsPage);
    return ProductsPage;
    var ProductsPage_1;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_wishlist_service__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WishlistPage = /** @class */ (function () {
    function WishlistPage(viewCtrl, nav, values, params, functions, service) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.service = service;
        if (document.querySelector(".tabbar"))
            this.tabBarElement = document.querySelector(".tabbar")['style'];
        this.service.loadWishlist()
            .then(function (results) { return _this.wishlist = results; });
    }
    WishlistPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    WishlistPage.prototype.updateWish = function (results, id) {
        var _this = this;
        if (results.status == "success") {
            this.service.loadWishlist().then(function (results) { return _this.wishlist = results; });
            this.values.wishlistId.splice(id, 1);
        }
    };
    WishlistPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    WishlistPage.prototype.addToCartFromWishlist = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
        }
        else {
            this.service.addToCart(id).then(function (results) { return _this.updateCart(results, id); });
        }
    };
    WishlistPage.prototype.updateCart = function (results, id) {
        var _this = this;
        if (results.error) {
            this.functions.showAlert("ERROR", "error");
        }
        else {
            this.service.deleteItem(id).then(function (results) { return _this.updateWishlist(results); });
        }
    };
    WishlistPage.prototype.updateWishlist = function (results) {
        var _this = this;
        this.service.loadWishlist().then(function (results) { return _this.wishlist = results; });
        this.functions.showAlert("SUCCESS", "Item has been added to cart");
    };
    WishlistPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
    };
    WishlistPage.prototype.gohome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
    };
    WishlistPage.prototype.ionViewWillEnter = function () {
        if (this.values.hideTabbar) {
            if (document.querySelector(".tabbar"))
                this.tabBarElement.display = 'none';
        }
    };
    WishlistPage.prototype.ionViewWillLeave = function () {
        if (this.values.hideTabbar) {
            if (document.querySelector(".tabbar"))
                this.tabBarElement.display = 'flex';
        }
    };
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/account/wishlist/wishlist.html"*/'<ion-header no-border class="wishlist-header">\n    <ion-navbar color="header"> <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n        <ion-title text-center>{{"Wishlist"| translate}} </ion-title>\n        <ion-buttons end> <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n        <ion-icon class="ion-ios-cart item-icon">\n        </ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n        </ion-badge>\n      </button> </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content class="wishlistPage">\n    <ion-spinner *ngIf="!wishlist" name="crescent"> </ion-spinner>\n    <div *ngIf="wishlist">\n        <div class="empty-wishlist" *ngIf="!wishlist.length"> <img src="assets/image/wishlist.png">\n            <h4 text-center no-lines>{{"Your Wishlist Is Empty" | translate}}</h4> <button ion-button class="butt" item-center medium color="button-color" text-uppercase (click)="gohome()">{{"Go Explore" | translate}}</button> </div>\n        <div *ngIf="wishlist.length">\n            <div *ngFor="let item of wishlist | keys" class="wish-list">\n                <ion-item no-lines>\n                    <ion-thumbnail item-left (click)="getProduct(item.value.id)"> <img src="{{item.value.image_thumb}}">\n                        <div class="stock"> <button ion-button *ngIf="item.value.stock_status == \'outofstock\'">{{"No Stock" | translate}}</button> </div>\n                    </ion-thumbnail>\n                    <h2 wrap-text class="item-name">{{item.value.name}} </h2>\n                    <div [innerHTML]="item.value.short_description" class="short-description" *ngIf="item.value.short_description"> </div>\n                    <div [innerHTML]="item.value.description" class="short-description" *ngIf="!item.value.short_description"> </div>\n                    <h4 wrap-text><span>{{"Price" | translate}}</span> : {{item.value.price | currency:values.currency:symbol:\'1.2-2\'}}</h4>\n                    <div> <button ion-button icon-only small class="rating-button-grid1" style="height:19px">\n                <ion-icon name="md-star"><span class="rating-count">{{item.value.average_rating | number:\'1.1-1\'}}</span></ion-icon> \n              </button> <span style="color: #777;font-size:15px;">{{item.value.review_count}} {{"ratings" | translate}}</span> </div>\n                </ion-item>\n                <ion-row class="edit-buttons">\n                    <ion-col> <button ion-button full [disabled]="item.value.stock_status == \'outofstock\' || disableAddtoCartFromWishlist" no-padding no-margin clear text-uppercase (click)="addToCartFromWishlist(item.value.id, item.value.type)"> <ion-icon name="md-cart"></ion-icon> {{"Add To Cart" | translate}}\n              </button> </ion-col>\n                    <ion-col> <button ion-button full [disabled]="disableDeleteWishlist" no-padding no-margin clear text-uppercase (click)="removeFromWishlist(item.value.id)">\n                <ion-icon name="ios-trash"></ion-icon> {{"Delete" | translate}}\n              </button> </ion-col>\n                </ion-row>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/account/wishlist/wishlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_wishlist_service__["a" /* WishlistService */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'keys'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Post = /** @class */ (function () {
    function Post(service, values, params) {
        var _this = this;
        this.service = service;
        this.values = values;
        this.id = params.data;
        this.service.getPage(this.id)
            .then(function (results) { return _this.post = results; });
    }
    Post = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/post/post.html"*/'<ion-header class="settings-header">\n    <ion-navbar color="header"> <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n     </button>\n        <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="post" padding>\n    <ion-spinner *ngIf="!post" name="crescent"> </ion-spinner>\n    <div *ngIf="post">\n        <div [innerHTML]="post.post_content"></div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/post/post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], Post);
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRegister; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_post__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
var AccountRegister = /** @class */ (function () {
    function AccountRegister(nav, service, platform, functions, oneSignal, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.platform = platform;
        this.functions = functions;
        this.oneSignal = oneSignal;
        this.values = values;
        this.disableSubmit = false;
        this.showPasswordEnable = false;
        this.facebookSpinner = false;
        this.googleSpinner = false;
        this.Register = "Register";
        this.registerData = {};
        this.countries = {};
        this.registerData.billing = {};
        this.registerData.shipping = {};
        this.service.getNonce()
            .then(function (results) { return _this.handleResults(results); });
    }
    AccountRegister.prototype.handleResults = function (results) {
        this.countries = results;
    };
    AccountRegister.prototype.getBillingRegion = function (countryId) {
        this.registerData.billing_state = "";
        this.billing_states = this.countries.state[countryId];
    };
    AccountRegister.prototype.getShippingRegion = function (countryId) {
        this.shipping_states = this.countries.state[countryId];
    };
    AccountRegister.prototype.validateForm = function () {
        if (this.registerData.first_name == undefined || this.registerData.first_name == "") {
            this.functions.showAlert("ERROR", "Please Enter First Name");
            return false;
        }
        if (this.registerData.email == undefined || this.registerData.email == "") {
            this.functions.showAlert("ERROR", "Please Enter Email ID");
            return false;
        }
        if (this.registerData.password == undefined || this.registerData.password == "") {
            this.functions.showAlert("ERROR", "Please Enter Password");
            return false;
        }
        if (this.registerData.billing.phone == undefined || this.registerData.billing.phone == "") {
            this.functions.showAlert("ERROR", "Please Enter phone number");
            return false;
        }
        this.registerData.username = this.registerData.email;
        this.registerData.billing.email = this.registerData.email;
        this.registerData.billing.first_name = this.registerData.first_name;
        this.registerData.shipping.first_name = this.registerData.first_name;
        this.registerData.shipping.address_1 = this.registerData.billing.address_1;
        this.registerData.shipping.address_2 = this.registerData.billing.address_2;
        this.registerData.shipping.city = this.registerData.billing.city;
        this.registerData.shipping.state = this.registerData.billing.state;
        this.registerData.shipping.postcode = this.registerData.billing.postcode;
        this.registerData.shipping.country = this.registerData.billing.country;
        return true;
    };
    AccountRegister.prototype.registerCustomer = function () {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.Register = "Registering";
            this.service.registerCustomer(this.registerData).then(function (results) { return _this.handleRegister(results); });
        }
    };
    AccountRegister.prototype.handleRegister = function (results) {
        var _this = this;
        this.disableSubmit = false;
        this.Register = "Register";
        if (results.code) {
            this.errors = results;
        }
        else if (!results.code) {
            this.countries.checkout_login;
            this.service.login(this.registerData).then(function (results) { return _this.loginStatus = results; });
            if (this.platform.is('cordova')) {
                this.oneSignal.sendTags({
                    email: this.registerData.email,
                    pincode: this.registerData.billing_address.postcode,
                    city: this.registerData.billing_address.city
                });
            }
            this.functions.showAlert("Success", "Registration successfull..");
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    AccountRegister.prototype.showPassword = function () {
        this.showPasswordEnable = true;
    };
    AccountRegister.prototype.hidePassword = function () {
        this.showPasswordEnable = false;
    };
    AccountRegister.prototype.dismiss = function () {
        this.nav.pop();
    };
    /* facebookLogin() {
         this.facebookSpinner = true;
         this.fb.login(['email']).then((response) => {
             console.log(response.authResponse.accessToken);
             this.service.sendToken(response.authResponse.accessToken).then((results) => {
                 this.facebookSpinner = false;
                 this.nav.setRoot(TabsPage);
                 this.functions.showAlert('success', 'Logged in sus');
             });
         }).catch((error) => {
             console.log(error)
             this.facebookSpinner = false;
             this.functions.showAlert('Error', error);
         });
     }
     gmailLogin() {
         this.googleSpinner = true;
         this.googlePlus.login({}).then((res) => {
             console.log(this.gres);
             this.googleSpinner = false;
             this.service.googleLogin(res).then((results) => {
                 this.functions.showAlert('success', 'Logged in success');
                 this.nav.setRoot(TabsPage);
             });
         }).catch((err) => {
             this.googleSpinner = false;
             this.error = err;
             this.functions.showAlert('Error', err);
             console.error(err);
         });
     }*/
    AccountRegister.prototype.terms = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__post_post__["a" /* Post */], id);
    };
    AccountRegister = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidricota/git/App/src/pages/account/register/register.html"*/'<ion-header no-border class="login-header">\n    <ion-navbar> <button ion-button menuToggle style="color: white;">\n      <ion-icon name="menu">\n      </ion-icon>\n    </button> </ion-navbar>\n</ion-header>\n<ion-content class="account-register">\n    <div class="shop-info">\n        <h1 text-uppercase>{{"Shop name" | translate}}</h1>\n        <h2>{{"You\'re just one step away from signing up" | translate}}.</h2>\n    </div>\n    <div>\n        <form #f="ngForm" class="login">\n            <ion-list>\n                <ion-item>\n                    <ion-label fixed>{{"Full Name" | translate}}</ion-label>\n                    <ion-input required type="text" [(ngModel)]="registerData.first_name" name="firstname"> </ion-input>\n                </ion-item>\n                <ion-item class="no-transform">\n                    <ion-label fixed>{{"Email" | translate}}</ion-label>\n                    <ion-input required type="email" [(ngModel)]="registerData.email" name="Email"> </ion-input>\n                </ion-item>\n                <ion-item *ngIf="!showPasswordEnable" class="no-transform">\n                    <ion-label fixed>{{"Password" | translate}}</ion-label>\n                    <ion-input required type="password" [(ngModel)]="registerData.password" name="password"> </ion-input>\n                    <ion-icon item-right *ngIf="registerData.password" name="ios-eye" (click)="showPassword()" style="font-size: 2.5rem;z-index:10"></ion-icon>\n                </ion-item>\n                <ion-item *ngIf="showPasswordEnable" class="no-transform">\n                    <ion-label fixed>{{"Password" | translate}}</ion-label>\n                    <ion-input required type="text" [(ngModel)]="registerData.password" name="password"> </ion-input>\n                    <ion-icon item-right name="ios-eye-off" (click)="hidePassword()" style="font-size: 2.5rem;z-index:10"></ion-icon>\n                </ion-item>\n                <ion-item>\n                    <ion-label fixed>{{"Phone" | translate}}</ion-label>\n                    <ion-input required type="number" [(ngModel)]="registerData.billing.phone" name="billing_phone"> </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label fixed>{{"Address" | translate}}</ion-label>\n                    <ion-input required type="text" [(ngModel)]="registerData.billing.address_1" name="billing_1"> </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label fixed>{{"City" | translate}}</ion-label>\n                    <ion-input required type="text" [(ngModel)]="registerData.billing.city" name="billing_city"> </ion-input>\n                </ion-item>\n            </ion-list>\n            <div *ngIf="errors" class="margin-error-message">\n                <h3>{{errors.message}} </h3>\n            </div> <br> <button ion-button block type="submit" outline text-uppercase [disabled]="disableSubmit" (click)="registerCustomer()">{{Register | translate}}\n        </button> </form>\n    </div>\n    <!--div>\n        <ion-row class="login-div">\n            <ion-col class="col1"> <button ion-button outline type="submit" outline full text-uppercase [disabled]="disableSubmit" (click)="facebookLogin()">{{"Facebook" | translate}}</button> </ion-col>\n            <ion-col class="col2"> <button ion-button outline type="submit" outline full text-uppercase [disabled]="disableSubmit" (click)="gmailLogin()"> {{"Google" | translate}}</button> </ion-col>\n        </ion-row>\n    </div-->\n    <h4>{{"By signing in you agree to our" | translate}} <a (click)="terms(this.values.data.pages.terms)">{{"Terms & Conditions" | translate}}</a></h4>\n</ion-content>'/*ion-inline-end:"/Users/davidricota/git/App/src/pages/account/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], AccountRegister);
    return AccountRegister;
}());

//# sourceMappingURL=register.js.map

/***/ })

},[386]);
//# sourceMappingURL=main.js.map