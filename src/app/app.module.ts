import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {  HttpModule } from '@angular/http';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { LaunchPage } from '../pages/animate/animate';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmailComposer } from '@ionic-native/email-composer';
import { ModalPage } from '../pages/modal/modal';
import { LoginModalPage } from '../pages/loginModal/loginModal';
import { QuickSale } from '../pages/QuickSale/quicksale';
import { AddProduct } from '../pages/AddProduct/addproduct';
import { AddCustomer } from '../pages/AddCustomer/addcustomer';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ModalPage,
    LoginModalPage,
    LaunchPage,
    QuickSale,
    AddProduct,
    AddCustomer
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ModalPage,
    LoginModalPage,
    LaunchPage,
    QuickSale,
    AddProduct,
    AddCustomer
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
