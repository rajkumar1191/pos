import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { LaunchPage } from '../animate/animate';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { LoginModalPage } from '../loginModal/loginModal';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  name = "";
  email = "";
  mobile: number;
  address = "";
  district = "";
  locality = "";
  dname = "";
  dno: number;
  responseData: any;
  cityOptions = [];
  citySelectedOption = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public alertCtrl: AlertController, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.menuCtrl.swipeEnable(false);
  }

  navToSignUp(){
      let modal = this.modalCtrl.create(ModalPage);
      modal.present();
      modal.onDidDismiss(data=>{
          console.log("Data =>", data) //This will log the form entered by user in add modal.
      })
  }
  navToLogin(){
    let modal = this.modalCtrl.create(LoginModalPage);
    modal.present();
    modal.onDidDismiss(data=>{
        if(data == 'login'){
          this.menuCtrl.swipeEnable(true);    
          this.navCtrl.setRoot(LaunchPage);          
        }
        console.log("Data =>", data)
    })
  }
  viewRequest() {
    this.navCtrl.push(LaunchPage);
  }

}
