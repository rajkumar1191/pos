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
  total = 0;
  count = 0;
  toppings = 'All Products';

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
  viewChange(toppings){
    this.toppings = toppings;
  }
  addPriceList(){
    this.total = this.total + 400;
    this.count = this.count + 1;
  }
  showPriceList(){
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Model 1',
          handler: () => {
            this.total = this.total + 300;
            this.count = this.count + 1;
          }
        },
        {
          text: 'Model 2',
          handler: () => {
            this.total = this.total + 350;            
            this.count = this.count + 1;
          }
        },
        {
          text: 'Model 3',
          handler: () => {
            this.total = this.total + 300;            
            this.count = this.count + 1;
          }
        },
        {
          text: 'Model 4',
          handler: () => {
            this.total = this.total + 200;            
            this.count = this.count + 1;
          }
        },
        {
          text: 'Model 5',
          handler: () => {
            this.total = this.total + 250;            
            this.count = this.count + 1;
          }
        },
        {
          text: 'Model 6',
          handler: () => {
            this.total = this.total + 300;            
            this.count = this.count + 1;
          }
        }
      ]
    });
    actionSheet.present();
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
