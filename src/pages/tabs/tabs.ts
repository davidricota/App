import { Component, ViewChild } from '@angular/core';
import { Values } from '../../providers/service/values';
import { Nav } from 'ionic-angular';
import { MyAccount } from '../account/my-account/my-account';
import { Categories } from '../categories/categories';
import { Home } from '../home/home';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
	@ViewChild(Nav) nav: Nav;
   tab1Root: any = Home;
   tab2Root: any = Categories;
   tab3Root: any = SearchPage;
   tab4Root: any = MyAccount;
  constructor(public values: Values) {

  }
  home(ev: any) {
      if (ev.length() > 1) {
          ev.popToRoot();
      }
  }
  category(ev: any) {
      if (ev.length() > 1) {
          ev.popToRoot();
      }
  }
  account(ev: any) {
      this.values.hideCloseButton = true;
      if (ev.length() > 1) {
          ev.popToRoot();
      }
  }
}
