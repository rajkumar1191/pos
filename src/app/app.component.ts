import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  y: any;
  h: any;
  offsetY: any;
  pages: Array<{ title: string, icon: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    this.pages = [
      { title: 'Checkout', icon: 'cart', component: HelloIonicPage },
      { title: 'Orders',  icon: 'list-box', component: ListPage },
      { title: 'Store',  icon: 'home', component: ListPage }
    ];
    if (!this.platform.is('ios') && !this.platform.is('ipad') && !this.platform.is('iphone')) {
      window.addEventListener('native.keyboardshow', this.keyboardShowHandler);
      window.addEventListener('native.keyboardhide', this.keyboardHideHandler);
      window.addEventListener('touchstart', this.tapCoordinates);
    }
  }

  tapCoordinates(e) {

    this.y = e.touches[0].clientY;
    this.h = window.innerHeight;
    this.offsetY = (this.h - this.y);

  }

  keyboardShowHandler(e) {

    let kH = e.keyboardHeight;
    let bodyMove = <HTMLElement>document.querySelector("ion-app"), bodyMoveStyle = bodyMove.style;
    if (this.offsetY < kH + 40) {
      bodyMoveStyle.bottom = (kH - this.offsetY + 40) + "px";
      bodyMoveStyle.top = "initial";
    }

  }

  keyboardHideHandler() {

    let removeStyles = <HTMLElement>document.querySelector("ion-app");
    removeStyles.removeAttribute("style");

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
