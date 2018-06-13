import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { Service} from '../../providers/service/service';
import { Values } from '../../providers/service/values';
import { Functions } from '../../providers/service/functions';
import { ModalController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { ProductsPage } from '../products/products';


@Component({
    templateUrl: 'categories.html'
})
export class Categories {
    @ViewChild('pageSlider') pageSlider: Slides;
    status: any;
    items: any;
    id: any;
    subCategories: any;
    subcat: boolean = false;
    catId: any;
    event: any;
    loading: boolean = false;
    image: any;
    catName: any;

    constructor(public nav: NavController, public service: Service, public values: Values, public functions: Functions, public modalCtrl: ModalController) {
        this.items = [];
        this.subCategories = [];
        if(this.service.mainCategories.length){
          this.catId = this.service.mainCategories[0].id;
          this.image = this.service.mainCategories[0].image;
          this.catName = this.service.mainCategories[0].name;
          for(let item in this.service.categories){
             if(this.service.categories[item].parent == this.catId) 
              this.subCategories.push(this.service.categories[item]);
          }
       }
    }
    getCategory(id, name) {
        this.values.onsale = false;
        this.values.newCollections = false;
        this.values.featuredProducts = false;
        this.items.id = id;
        this.items.name = name;
        this.items.categories = this.service.categories;
        this.nav.push(ProductsPage, this.items);
    }
    getSubcategories(id, image, name) {
        this.catId = id;
        this.image = image;
        this.catName = name;
        this.loading = true;
        this.subCategories = [];
        for (let item in this.service.categories) {
            if (this.service.categories[item].parent == this.catId) this.subCategories.push(this.service.categories[item]);
        }
        this.loading = false;
    }
    getCart() {
        this.values.hideTabbar = false;
        this.nav.push(CartPage);
    }
}