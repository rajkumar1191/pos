import { Component } from '@angular/core';

import { NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';

import { ListPage } from '../list/list';

@Component({
    selector: 'page-animate',
    templateUrl: 'animate.html'
  })


export class LaunchPage {

    constructor(public navCtrl: NavController) {
    }
    navToList(){
        this.navCtrl.setRoot(ListPage)
    }
}
