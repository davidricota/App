import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CheckoutService } from '../../../providers/service/checkout-service';
import { Functions } from '../../../providers/service/functions';
import { Values } from '../../../providers/service/values';
import { OrderSummary } from '../../checkout/order-summary/order-summary';
import { TermsCondition } from '../../checkout/terms-condition/terms-condition';
import { AccountForgotten } from '../../account/forgotten/forgotten';

@Component({
    templateUrl: 'billing-address-form.html'
})
export class BillingAddressForm {
    billingAddressForm: any;
    billing: any;
    regions: any;
    status: any;
    errorMessage: any;
    address: any;
    form: any;
    states: any;
    OrderReview: any;
    loginData: any;
    id: any;
    couponStatus: any;
    buttonSubmit: boolean = false;
    buttonSubmitLogin: boolean = false;
    buttonSubmitCoupon: boolean = false;
    PlaceOrder: any;
    buttonText1: any;
    LogIn: any;
    mydate: any;
    time: any;
    date: any;
    selectedDate: any;
    shipping: any;
    order: any;
    buttonText : any;
    enableBillingAddress: boolean = false;
    enableShippingMethods: boolean = false;
    enableShippingForm : boolean = false;
    enableLogin: boolean = true;
    chosen_shipping: any;
    showPasswordEnable: boolean = false;
    enablePaymentMethods : boolean = false;
    showAddress: boolean = false;
    tabBarElement: any;
    
    constructor(private viewCtrl: ViewController, public iab: InAppBrowser, public nav: NavController, public service: CheckoutService, params: NavParams, public functions: Functions, public values: Values) {
        this.PlaceOrder = "Place Order";
        this.buttonText1 = "Apply";
        this.LogIn = "LogIn";
        this.loginData = [];
        this.form = params.data;
        this.fillShippingForm();
        console.log(this.form);
        this.billing = {};
        if(document.querySelector(".tabbar"))
        this.tabBarElement = document.querySelector(".tabbar")['style'];
        this.billing.save_in_address_book = true;
        this.getRegion(this.form.billing_country);
        this.getRegion(this.form.shipping_country);
        this.form.shipping = true;
        this.shipping = {};
        this.shipping.save_in_address_book = true;

        if(this.values.isLoggedIn){
            if(this.form.billing_country == "" || this.form.billing_country == undefined || this.form.billing_state =="" || this.form.billing_state == undefined || this.form.billing_postcode == "" || this.form.billing_postcode == undefined){
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
        else if(!this.values.isLoggedIn){
            this.enableLogin = true;
        }
    }
    fillShippingForm() {
        this.form.shipping_first_name = this.form.billing_first_name;
        this.form.shipping_last_name = this.form.billing_last_name;
        this.form.shipping_address_1 = this.form.billing_address_1;
        this.form.shipping_address_2 = this.form.billing_address_2;
        this.form.shipping_city = this.form.billing_city;
        this.form.shipping_country = this.form.billing_country;
        this.form.shipping_state = this.form.billing_state;
        this.form.shipping_postcode = this.form.billing_postcode;
    }
    getRegion(countryId) {
        //this.form.billing_state = "";
        this.states = this.form.state[countryId];
        this.service.updateOrderReview(this.form).then((results) => this.handleOrderReviews(results));
    }
    handleOrderReviews(results) {
        this.OrderReview = results;
        this.chosen_shipping = this.OrderReview.chosen_shipping;
        console.log(this.chosen_shipping);
    }
    checkout() {
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
                this.service.checkout(this.form).then((results) => this.handleBilling(results));
            } else if (this.form.payment_method == 'stripe') {
                this.service.getStripeToken(this.form).then((results) => this.handleStripeToken(results));
            } else {
                this.service.checkout(this.form).then((results) => this.handlePayment(results));
            }
        }
    }
    handlePayment(results) {
        if (results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            let browser = this.iab.create(results.redirect, '_blank', options);
            browser.show();
            browser.on('loadstart').subscribe(data => {
                if (data.url.indexOf('order-received') != -1 && data.url.indexOf('return=') == -1) {
                    this.values.cart = [];
                    this.values.count = 0;
                    var str = data.url;
                    var pos1 = str.lastIndexOf("/order-received/");
                    var pos2 = str.lastIndexOf("/?key=wc_order");
                    var pos3 = pos2 - (pos1 + 16);
                    var order_id = str.substr(pos1 + 16, pos3);
                    this.nav.push(OrderSummary, order_id);
                    browser.close();
                }
                else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancel=') != -1 || data.url.indexOf('cancelled') != -1) {
                    browser.close();
                    this.buttonSubmit = false;
                }    
            });
            browser.on('exit').subscribe(data => {
                this.buttonSubmit = false;
            });
        }
        else if (results.result == 'failure') {
            this.functions.showAlert("STATUS", results.messages);
            this.buttonSubmit = false;
        }
    }
    checkoutStripe() {
        this.buttonSubmit = true;
        this.PlaceOrder = "Placing Order";
        this.service.getStripeToken(this.form).then((results) => this.handleStripeToken(results));
    }
    handleStripeToken(results) {
        if (results.error) {
            this.buttonSubmit = false;
            this.PlaceOrder = "Place Order";
            this.functions.showAlert("ERROR", results.error.message);
        } else {
            this.service.stripePlaceOrder(this.form, results).then((results) => this.handleBilling(results));
            this.buttonSubmit = false;
        }
    }
    handleBilling(results) {
        if (results.result == "success") {
            var str = results.redirect;
            var pos1 = str.lastIndexOf("order-received/");
            var pos2 = str.lastIndexOf("?key=wc_order");
            var pos3 = pos2 - (pos1 + 15);
            var order_id = str.substr(pos1 + 15, pos3);
            this.nav.push(OrderSummary, order_id);
        } else if (results.result == "failure") {
            this.functions.showAlert("ERROR", results.messages);
        }
        this.buttonSubmit = false;
        this.PlaceOrder = "Place Order";
    }
    login() {
        if (this.validateForm()) {
            this.buttonSubmitLogin = true;
            this.loginData.checkout_login = this.form.checkout_login;
            this.LogIn = "Please Wait";
            this.service.login(this.loginData).then((results) => this.handleResults(results));
        }
    }
    validateForm() {
        if (this.loginData.username == undefined || this.loginData.username == "") {
            return false
        }
        if (this.loginData.password == undefined || this.loginData.password == "") {
            return false
        } else {
            return true
        }
    }
    handleResults(a) {
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
            this.service.updateOrderReview(this.form).then((results) => this.handleOrderReviews(results));
        } else {
            this.functions.showAlert("Error", 'Login unsuccessful. try again');
        }
    }
    changePayment() {
        this.form.payment_instructions = this.form.payment[this.form.payment_method].description;
        this.buttonSubmit = false;
        this.buttonText = "Continue to " + this.form.payment[this.form.payment_method].method_title;
    }
    terms() {
        this.nav.push(TermsCondition, this.form.terms_content);
    }
    updateShipping(method) {
        this.form.shipping_method = method;
        this.chosen_shipping = method;
        this.service.updateShipping(method).then((results) => this.handleShipping(results));
    }
    handleShipping(results) {
        this.service.updateOrderReview(this.form).then((results) => this.handleOrderReviews(results));
    }
    updateOrderReview() {
        this.service.updateOrderReview(this.form).then((results) => this.handleOrderReviews(results));
    }
    showPassword() {
        this.showPasswordEnable = true;
    }
    hidePassword() {
        this.showPasswordEnable = false;
    }
    forgotten() {
        this.nav.push(AccountForgotten);
    }
    continueAsGuest() {
        this.enableBillingAddress = true;
        this.enableLogin = false;
        this.viewCtrl.showBackButton(true);
    }
    showShippingForm() {
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
            } else if (!this.form.shipping) {
                if (this.values.isLoggedIn) {
                    this.showAddress = true;
                } else {
                    this.enableShippingForm = true;
                    this.viewCtrl.showBackButton(false);
                }
                this.enableBillingAddress = false;
            }
        }
    }
    showShippingMethods() {
        if (this.validateShippingForm()) {
            this.enableShippingForm = false;
            this.enableBillingAddress = false;
            this.showAddress = true;
            this.enableShippingMethods = true;
            this.enablePaymentMethods = true;
            this.viewCtrl.showBackButton(true);
        }
    }
    validateBillingForm() {
        if (this.form.billing_first_name == undefined || this.form.billing_first_name == "") {
            this.functions.showAlert("ERROR", "Please enter billing First name");
            return false
        }
        if (this.form.billing_phone == undefined || this.form.billing_phone == "") {
            this.functions.showAlert("ERROR", "Please enter billing Phone number");
            return false
        }
        if (this.form.billing_address_1 == undefined || this.form.billing_address_1 == "") {
            this.functions.showAlert("ERROR", "Please enter billing Address");
            return false
        }
        if (this.form.billing_email == undefined || this.form.billing_email == "") {
            this.functions.showAlert("ERROR", "Please enter billing Email");
            return false
        }
        if (!this.values.isLoggedIn) {
            if (this.form.password == undefined || this.form.password == "") {
                this.functions.showAlert("ERROR", "Please enter Password");
                return false
            }
        }
        if (this.form.billing_city == undefined || this.form.billing_city == "") {
            this.functions.showAlert("ERROR", "Please enter billing City");
            return false
        }
        if (this.form.billing_postcode == undefined || this.form.billing_postcode == "") {
            this.functions.showAlert("ERROR", "Please enter billing Postcode");
            return false
        }
        if (this.form.billing_country == undefined || this.form.billing_country == "") {
            this.functions.showAlert("ERROR", "Please choose billing Country");
            return false
        }
        if (this.form.billing_state == undefined || this.form.billing_state == "") {
            this.functions.showAlert("ERROR", "Please choose billing State");
            return false
        } else {
            return true
        }
    }
    validateShippingForm() {
        if (this.form.shipping_first_name == undefined || this.form.shipping_first_name == "") {
            this.functions.showAlert("ERROR", "Please enter Shipping First name");
            return false
        }
        if (this.form.shipping_address_1 == undefined || this.form.shipping_address_1 == "") {
            this.functions.showAlert("ERROR", "Please enter Shipping Address");
            return false
        }
        if (this.form.shipping_city == undefined || this.form.shipping_city == "") {
            this.functions.showAlert("ERROR", "Please enter Shipping City");
            return false
        }
        if (this.form.shipping_postcode == undefined || this.form.shipping_postcode == "") {
            this.functions.showAlert("ERROR", "Please enter Shipping Postcode");
            return false
        }
        if (this.form.shipping_country == undefined || this.form.shipping_country == "") {
            this.functions.showAlert("ERROR", "Please choose Shipping Country");
            return false
        }
        if (this.form.shipping_state == undefined || this.form.shipping_state == "") {
            this.functions.showAlert("ERROR", "Please choose Shipping State");
            return false
        } else {
            return true
        }
    }
    editBillingForm() {
        this.enableBillingAddress = true;
        this.showAddress = false;
        this.enableShippingForm = false;
        this.enableShippingMethods = false;
        this.enablePaymentMethods = false;
        this.viewCtrl.showBackButton(false);
    }
    editShippingForm() {
        this.enableShippingForm = true;
        this.showAddress = false;
        this.enableBillingAddress = false;
        this.enableShippingMethods = false;
        this.enablePaymentMethods = false;
        this.viewCtrl.showBackButton(false);
    }
    backToBillingForm() {
        this.enableBillingAddress = true;
        this.enableShippingForm = false;
        this.viewCtrl.showBackButton(true);
    }
    backToAddressPage() {
        this.enableShippingForm = false;
        this.enableBillingAddress = false;
        this.showAddress = true;
        this.enableShippingMethods = true;
        this.enablePaymentMethods = true;
        this.viewCtrl.showBackButton(true);
    }
    validateAddress() {
        if (this.form.show_terms && !this.form.terms) {
            this.functions.showAlert("ERROR", "You must agree to our Terms & Conditions");
            return false
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
        } else {
            return true
        }
    }
    ionViewWillEnter() {
        if (document.querySelector(".tabbar")) this.tabBarElement.display = 'none';
    }
}