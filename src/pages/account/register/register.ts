import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { Service } from '../../../providers/service/service';
import { Functions } from '../../../providers/service/functions';
import { Values } from '../../../providers/service/values';
import { OneSignal } from '@ionic-native/onesignal';
import { TabsPage } from '../../tabs/tabs';
import { Post } from '../../post/post';
//import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';

@Component({
    templateUrl: 'register.html'
})
export class AccountRegister {
    registerData: any;
    loadRegister: any;
    countries: any;
    status: any;
    public disableSubmit: boolean = false;
    errors: any;
    loginStatus: any;
    country: any;
    billing_states: any;
    shipping_states: any;
    Register: any;
    lattitude: any;
    longitude: any;
    locationAddress: any;
    showPasswordEnable: boolean = false;
    facebookSpinner: boolean = false;
    googleSpinner: boolean = false;
    gres: any;
    error: any;

    constructor(public nav: NavController, public service: Service, public platform: Platform, public functions: Functions, private oneSignal: OneSignal, public values: Values) {
        this.Register = "Register";
        this.registerData = {};
        this.countries = {};
        this.registerData.billing = {};
        this.registerData.shipping = {};
        this.service.getNonce()
            .then((results) => this.handleResults(results));
    }
    handleResults(results) {
        this.countries = results;
    }
    getBillingRegion(countryId) {
        this.registerData.billing_state = "";
        this.billing_states = this.countries.state[countryId];
    }
    getShippingRegion(countryId) {
        this.shipping_states = this.countries.state[countryId];
    }
    validateForm() {
        if (this.registerData.first_name == undefined || this.registerData.first_name == "") {
            this.functions.showAlert("ERROR", "Please Enter First Name");
            return false
        }
        if (this.registerData.email == undefined || this.registerData.email == "") {
            this.functions.showAlert("ERROR", "Please Enter Email ID");
            return false
        }
        if (this.registerData.password == undefined || this.registerData.password == "") {
            this.functions.showAlert("ERROR", "Please Enter Password");
            return false
        }
        if (this.registerData.billing.phone == undefined || this.registerData.billing.phone == "") {
            this.functions.showAlert("ERROR", "Please Enter phone number");
            return false
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
    }
    registerCustomer() {
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.Register = "Registering";
            this.service.registerCustomer(this.registerData).then((results) => this.handleRegister(results));
        }
    }
    handleRegister(results) {
        this.disableSubmit = false;
        this.Register = "Register";
        if (results.code) {
            this.errors = results;
        } else if (!results.code) {
            this.countries.checkout_login;
            this.service.login(this.registerData).then((results) => this.loginStatus = results);
            if (this.platform.is('cordova')) {
                this.oneSignal.sendTags({
                    email: this.registerData.email,
                    pincode: this.registerData.billing_address.postcode,
                    city: this.registerData.billing_address.city
                });
            }
            this.functions.showAlert("Success", "Registration successfull..");
            this.nav.setRoot(TabsPage);
        }
    }
    showPassword() {
        this.showPasswordEnable = true;
    }
    hidePassword() {
        this.showPasswordEnable = false;
    }
    dismiss() {
        this.nav.pop();
    }
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
    terms(id) {
        this.nav.push(Post, id);
    }
}