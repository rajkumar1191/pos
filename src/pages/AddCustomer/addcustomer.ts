import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController, Platform, ToastController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalController } from 'ionic-angular';

declare var navigator: any;
declare var Connection: any;

@Component({
    selector: 'page-addcustomer',
    templateUrl: 'addcustomer.html',
})
export class AddCustomer {
    feedbacForm: FormGroup;
    backdrop = true;
    data:any;
    shownGroup = null;
    matchDetails: any;
    matchFixtureDetails: any;
    matchDateDetails: any;
    matchData: any;
    item: any;
    error: any;
    date: any;
    selectedDate = '';
    homeworkArray = [];
    newsArray = [];
    eventsArray = [];
    feedbackArray = [];
    homeworkForm: FormGroup;
    eventsForm: FormGroup;
    newsForm: FormGroup;
    todaysDate ='';
    editData:any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public loadingCtrl: LoadingController, private platform: Platform, public toastCtrl: ToastController, public viewCtrl: ViewController) {
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
   
    matchDetailsResponse: any;
    errorMessage: any;
    myHttpSubscription = null;
    ngOnDestroy() {
        
    }
    submitFeedback() {
       

    }
    ionViewDidLoad() {
       
    }
    submitHomework() {
        
    }
    submitEvent() {
        
    }

    submitNews() {
        
    }
    
    dismiss(){
        let data = 'Hai';
        this.viewCtrl.dismiss(data);                
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
