import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckoutService } from '../../../providers/service/checkout-service';
import { Functions } from '../../../providers/service/functions';
import { Values } from '../../../providers/service/values';
import { TabsPage } from '../../tabs/tabs';
@Component({
    templateUrl: 'order-summary.html'
})
export class OrderSummary {
    orderSummary: any;
    status: any;
    payment: any;
    id: any;
    tabBarElement: any;

    constructor(public nav: NavController, public service: CheckoutService, public params: NavParams, public functions: Functions, public values: Values) {
        this.id = params.data;
        if(document.querySelector(".tabbar"))
        this.tabBarElement = document.querySelector(".tabbar")['style'];
        this.service.getOrderSummary(this.id)
            .then((results) => this.orderSummary = results);
    }
    Continue() {
        this.values.count = 0;
        this.nav.setRoot(TabsPage);
    }
    ionViewWillEnter(){
        if(document.querySelector(".tabbar"))
        this.tabBarElement.display = 'none';
    }
    ionViewWillLeave(){
        if(document.querySelector(".tabbar"))
        this.tabBarElement.display = 'flex';
    }
}