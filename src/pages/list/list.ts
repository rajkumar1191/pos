import { Component } from '@angular/core';

import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { DbService } from '../animate/animate';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  data:any;
  shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: DbService, public loadingCtrl: LoadingController) {
   this.getData()
  }

  loading = this.loadingCtrl.create({
    content: 'Loading'
  });
  init() {
      this.loading = this.loadingCtrl.create({
          content: 'Loading'
      });
  }
  ngOnDestroy() {
        this.loading.dismiss();
        }
  getData() {
    this.loading.present();
    this.dbService.getRequestData().then((result) => {
      this.loading.dismiss();
      this.data = result;
    }, (error) => {
      this.loading.dismiss();
      console.log("ERROR: ", error);
    });
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
