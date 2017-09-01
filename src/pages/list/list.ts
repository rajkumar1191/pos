import { Component } from '@angular/core';

import { NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { LaunchPage } from '../animate/animate';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  data: any;
  shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(true);
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }
  isGroupShown(group) {
    return this.shownGroup === group;
  }
}
