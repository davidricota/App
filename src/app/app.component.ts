import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Service } from '../providers/service/service';
import { Values } from '../providers/service/values';
import { Config } from '../providers/service/config';
import { TranslateService } from '@ngx-translate/core';
import { AppRate } from '@ionic-native/app-rate';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ModalController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { Post } from '../pages/post/post';
import { AccountLogin } from '../pages/account/login/login';
import { MyAccount } from '../pages/account/my-account/my-account';
import { Orders } from '../pages/account/orders/orders';
import { AccountRegister } from '../pages/account/register/register';
import { CartPage } from '../pages/cart/cart';
import { TabsPage } from '../pages/tabs/tabs';
import { ProductsPage } from '../pages/products/products';
import { ProductPage } from '../pages/product/product';
import { Address } from '../pages/account/address/address';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage: any = TabsPage;
    status: any;
    items: any = {};
    buttonLanguagesSettings: boolean = false;
    categories: any;
    image: any;
    name: any;
    showmore: boolean = false;
    data: any = {};
    constructor(private emailComposer: EmailComposer, private appRate: AppRate, public modalCtrl: ModalController, private oneSignal: OneSignal, private socialSharing: SocialSharing, statusBar: StatusBar, splashScreen: SplashScreen, public alertCtrl: AlertController, public platform: Platform, public service: Service, public config: Config, public values: Values, public translateService: TranslateService, public menuCtrl: MenuController) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
            if (this.config.appDir == 'rtl') this.platform.setDir('rtl', true);
            this.service.load().then((results) => this.handleService(results));
            if (platform.is('cordova')) {
                this.oneSignal.startInit(this.config.oneSignalAppId, this.config.googleProjectId);
                this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
                this.oneSignal.handleNotificationReceived().subscribe(result => {});
                this.oneSignal.handleNotificationOpened().subscribe(result => {
                    if (result.notification.payload.additionalData.category) {
                        this.items.id = result.notification.payload.additionalData.category;
                        this.nav.push(ProductsPage, this.items);
                    } else if (result.notification.payload.additionalData.product) {
                        this.items.id = result.notification.payload.additionalData.product;
                        this.nav.push(ProductPage, this.items.id);
                    } else if (result.notification.payload.additionalData.post) {
                        this.items.id = result.notification.payload.additionalData.post;
                        this.post(this.items.id);
                    }
                });
                this.oneSignal.endInit();
            }
            this.translateService.setDefaultLang('english');
        });
    }
    handleService(results) {
        this.service.getProducts();
        this.service.getfeaturedProduct();
        this.service.getbestOffers();
    }
    openPage(page) {
        this.nav.setRoot(page);
    }
    getCategory(id, slug, name) {
        this.values.onsale = false;
        this.values.newCollections = false;
        this.values.featuredProducts = false;
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.menuCtrl.close();
        this.items.categories = this.service.categories;
        this.nav.setRoot(ProductsPage, this.items);
    }
    getCart() {
        this.values.hideTabbar = false;
        this.nav.setRoot(CartPage);
    }
    logout() {
        this.service.logout();
    }
    login() {
        this.values.cartLoadEnable = false;
        this.nav.setRoot(AccountLogin);
    }
    signIn() {
        this.values.cartLoadEnable = false;
        this.nav.setRoot(AccountLogin);
    }
    register() {
        this.nav.setRoot(AccountRegister);
    }
    address() {
        this.nav.setRoot(Address);
    }
    order() {
        this.nav.setRoot(Orders);
    }
    cart() {
        this.values.hideTabbar = false;
        this.nav.setRoot(CartPage, 1);
    }
    post(id) {
        this.nav.setRoot(Post, id);
    }
    myAccount() {
        if (this.values.isLoggedIn) {
            this.values.hideCloseButton = false;
            let modal = this.modalCtrl.create(MyAccount);
            modal.present();
        } else {
            this.nav.push(AccountLogin);
        }
    }
    bestOffers() {
        this.values.onsale = true;
        this.values.newCollections = false;
        this.values.featuredProducts = false;
        this.nav.setRoot(ProductsPage);
    }
    shop() {
        this.nav.setRoot(TabsPage);
    }
    getSubCategoryDropdown(j) {
        for (let item in this.service.mainCategories) {
            if (item == j) {
                if (this.service.mainCategories[j].activated) this.service.mainCategories[j].activated = false;
                else this.service.mainCategories[j].activated = true;
            }
        }
    }
    rateApp() {
        this.appRate.preferences.storeAppURL = {
            ios: this.config.appRateIosAppId,
            android: this.config.appRateAndroidLink,
            windows: 'ms-windows-store://review/?ProductId=' + this.config.appRateWindowsId
        };
        this.appRate.promptForRating(true);
    }
    shareApp() {
        var options = {
            message: this.config.shareAppMessage,
            subject: this.config.shareAppSubject,
            files: ['', ''],
            url: this.config.shareAppURL,
            chooserTitle: this.config.shareAppChooserTitle
        }
        this.socialSharing.shareWithOptions(options);
    }
    contact() {
        let email = {
            to: this.config.supportEmail,
            subject: '',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    }
    more() {
        if (this.showmore) {
            this.showmore = false;
        } else {
            this.showmore = true;
        }
    }
}