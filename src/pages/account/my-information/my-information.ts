import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Service } from '../../../providers/service/service';
import { Values } from '../../../providers/service/values';

@Component({
    templateUrl: 'my-information.html'
})
export class MyInformation {
    status: any;
    form: any;
    editAddress: any;
    regions: any = [];
    address: any;
    id: any;
    country: any;
    billing_states: any;
    shipping_states: any;
    public disableSubmit: boolean = false;
    Save: any;
    myInformation: any;
    errors: any;
    avatar: any;
    constructor(public nav: NavController, public service: Service, params: NavParams, public values: Values) {
        this.Save = "Save";    
        this.service.getAddress()
            .then((results) => this.myInformation = results);
    }
    saveMyinfo() {
        this.Save = "Saving";
        this.disableSubmit = true;
        this.service.saveAddress(this.myInformation)
            .then((results) => this.handleSaveAddress(results));
    }
    handleSaveAddress(results) {
        this.disableSubmit = false;
        this.Save = "Save";
        if(results.code){
            this.errors = results;
        }
        else{
          this.nav.pop();
        }
    }
}