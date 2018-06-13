import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { Address } from '../pages/account/address/address';
import { EditAddressForm } from '../pages/account/edit-address-form/edit-address-form';
import { AccountForgotten } from '../pages/account/forgotten/forgotten';
import { AccountLogin } from '../pages/account/login/login';
import { MyAccount } from '../pages/account/my-account/my-account';
import { MyInformation } from '../pages/account/my-information/my-information';
import { OrderDetails } from '../pages/account/order-details/order-details';
import { Orders } from '../pages/account/orders/orders';
import { AccountRegister } from '../pages/account/register/register';
import { WishlistPage } from '../pages/account/wishlist/wishlist';
import { CartPage } from '../pages/cart/cart';
import { Categories } from '../pages/categories/categories';
import { BillingAddressForm } from '../pages/checkout/billing-address-form/billing-address-form';
import { OrderSummary } from '../pages/checkout/order-summary/order-summary';
import { TermsCondition } from '../pages/checkout/terms-condition/terms-condition';
import { Filter } from '../pages/filter/filter';
import { Home } from '../pages/home/home';
import { ProductPage } from '../pages/product/product';
import { ProductsPage } from '../pages/products/products';
import { SearchPage } from '../pages/search/search';
import { Sort } from '../pages/sort/sort';
import { TabsPage } from '../pages/tabs/tabs';
import { Post } from '../pages/post/post';
import { KeysPipe } from '../pipes/pipe'
import { HTTP } from '@ionic-native/http';


/*------------------------Providers----------------------------------*/

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NativeStorage } from '@ionic-native/native-storage';
import { BrowserModule } from '@angular/platform-browser';
import { CartService } from '../providers/service/cart-service';
import { WishlistService } from '../providers/service/wishlist-service';
import { CategoryService } from '../providers/service/category-service';
import { CheckoutService } from '../providers/service/checkout-service';
import { Config } from '../providers/service/config';
import { Functions } from '../providers/service/functions';
import { ProductService } from '../providers/service/product-service';
import { SearchService } from '../providers/service/search-service';
import { Service } from '../providers/service/service';
import { Values } from '../providers/service/values';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { OneSignal } from '@ionic-native/onesignal';


import { AppRate } from '@ionic-native/app-rate';
import { SocialSharing } from '@ionic-native/social-sharing';



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    PopoverPage,
    Home,
    Address,
    EditAddressForm,
    AccountForgotten,
    AccountLogin,
    MyAccount,
    MyInformation,
    OrderDetails,
    Orders,
    AccountRegister,
    WishlistPage,
    CartPage,
    Categories,
    TermsCondition,
    BillingAddressForm,
    OrderSummary,
    Filter,
    ProductPage,
    ProductsPage,
    SearchPage,
    Sort,
    TabsPage,
    KeysPipe,
    Post,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopoverPage,
    Home,
    Address,
    EditAddressForm,
    AccountForgotten,
    AccountLogin,
    MyAccount,
    MyInformation,
    OrderDetails,
    Orders,
    AccountRegister,
    WishlistPage,
    CartPage,
    Categories,
    BillingAddressForm,
    OrderSummary,
    TermsCondition,
    Filter,
    ProductPage,
    ProductsPage,
    SearchPage,
    Sort,
    TabsPage,
    Post,
  ],

  providers: [
  CartService,
  WishlistService,
  CategoryService,
  CheckoutService,
  Config,
  Functions,
  ProductService,
  SearchService,
  Service,
  Values,
  StatusBar,
  SplashScreen,
  SocialSharing,
  AppRate,
  PhotoViewer,
  InAppBrowser,
  CallNumber,
  OneSignal,
  NativeStorage,
  EmailComposer,
  HTTP,
// Facebook,
// GooglePlus,
  {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
