import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { NavController, NavParams, LoadingController, MenuController, ModalController } from 'ionic-angular';
import { QuickSale } from '../QuickSale/quicksale';
import { AddCustomer } from '../AddCustomer/addcustomer';
import { AddProduct } from '../AddProduct/addproduct';

import { ItemDetailsPage } from '../item-details/item-details';
import { LaunchPage } from '../animate/animate';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  amount: any;
  shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public menuCtrl: MenuController, public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController) {
    this.menuCtrl.swipeEnable(true);
  }
  presentActionSheet() {
    let modal = this.modalCtrl.create(QuickSale);
    modal.present();
    modal.onDidDismiss(data=>{
        console.log("Data =>", data) //This will log the form entered by user in add modal.
    })
  }

  actionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Add Customer',
          handler: () => {
            let modal = this.modalCtrl.create(AddCustomer);
            modal.present();
            modal.onDidDismiss(data=>{
                console.log("Data =>", data) //This will log the form entered by user in add modal.
            })
          }
        },
        {
          text: 'Add Product',
          handler: () => {
            let modal = this.modalCtrl.create(AddProduct);
            modal.present();
            modal.onDidDismiss(data=>{
                console.log("Data =>", data) //This will log the form entered by user in add modal.
            })
          }
        }
      ]
    });
    actionSheet.present();
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
