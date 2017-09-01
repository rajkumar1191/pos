import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController, Platform, ToastController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { ListPage } from '../list/list';

declare var navigator: any;
declare var Connection: any;

@Component({
    selector: 'page-loginModal',
    templateUrl: 'loginModal.html',
})
export class LoginModalPage {
    feedbacForm: FormGroup;
    backdrop = true;
    data: any;
    homeworkArray = [];

    homeworkForm: FormGroup;

    todaysDate = '';
    editData: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public loadingCtrl: LoadingController, private platform: Platform, public toastCtrl: ToastController, public viewCtrl: ViewController) {
        this.menuCtrl.swipeEnable(true);        
        this.homeworkForm = new FormGroup(
            {
                rowid: new FormControl(),
                dateSelect: new FormControl(),
                endDateSelect: new FormControl(),
                className: new FormControl('I'),
                subjectName: new FormControl(),
                descrip: new FormControl('', [<any>Validators.required])
            });
    }


    navToProduct() {
        let data = 'login';
        this.viewCtrl.dismiss(data);        
    }
    dismiss() {
        let data = 'Hai';
        this.viewCtrl.dismiss(data);
    }

}
