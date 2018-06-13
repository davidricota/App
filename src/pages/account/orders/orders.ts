import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../../providers/service/service';
import { Values } from '../../../providers/service/values';
import { Functions } from '../../../providers/service/functions';
import { OrderDetails } from '../order-details/order-details';

@Component({
    templateUrl: 'orders.html',
})
export class Orders {
    orders: any;
    slug: any;
    count: any;
    offset: any;
    has_more_items: boolean = true;
    quantity: any;
    page: number = 1;
    id: any;
    filter: any;
    status: any;
    constructor(public nav: NavController, public service: Service, public values: Values, public functions: Functions) {
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.quantity = "1";
        this.filter.customer = this.values.customerId.toString();
        this.service.getOrders(this.filter)
            .then((results) => this.orders = results);
    }
    doInfinite(infiniteScroll) {
        this.filter.page += 1;
        this.service.getOrders(this.filter)
            .then((results) => this.handleMore(results, infiniteScroll));
    }
    handleMore(results, infiniteScroll) {
        this.filter.page += 1;
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.orders.push(results[i]);
            };
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    }
    getOrderDetails(id) {
        this.nav.push(OrderDetails, id);
    }
    cancelOrder(id) {
        this.service.updateOrder({
                
                    "status": "cancelled"
                
            }, id)
            .then((results) => this.handleCancelOrder(results));
    }
    handleCancelOrder(results) {
        this.functions.showAlert("success", "order has been cancelled");
        this.service.getOrders(this.filter)
            .then((results) => this.orders = results);
    }
    reOrder(id) {
        this.service.updateOrder({
                
                    "status": "pending"
                
            }, id)
            .then((results) => this.handleReOrder(results));
    }
    handleReOrder(results) {
        this.functions.showAlert("success", "order has been placed successfully");
        this.service.getOrders(this.filter)
            .then((results) => this.orders = results);
    }
}