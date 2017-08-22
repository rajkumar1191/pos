import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DbService } from '../animate/animate';
import { EmailComposer } from '@ionic-native/email-composer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public alertCtrl: AlertController, private http: Http, public toastCtrl: ToastController, private emailComposer: EmailComposer, public dbService: DbService, public loadingCtrl: LoadingController) {
    this.dbService.initializeDataService();
    this.menuCtrl.swipeEnable(true);
    this.cityOptions = [{ id: 0, name: "Arakkonam" }, { id: 1, name: "Aruppukkottai" }, { id: 2, name: "Chennai" }, { id: 3, name: "Coimbatore" }, { id: 4, name: "Erode" },
    { id: 5, name: "Gobichettipalayam" }, { id: 6, name: "Kancheepuram" }, { id: 7, name: "Karur" }, { id: 8, name: "Lalgudi" }, { id: 9, name: "Madurai" },
    { id: 10, name: "Manachanallur" }, { id: 11, name: "Nagapattinam" }, { id: 12, name: "Nagercoil" }, { id: 13, name: "Namagiripettai" }, { id: 14, name: "Namakkal" },
    { id: 15, name: "Nandivaram-Guduvancheri" }, { id: 16, name: "Nanjikottai" }, { id: 17, name: "Natham" }, { id: 18, name: "Nellikuppam" }, { id: 19, name: "Neyveli (TS)" },
    { id: 20, name: "O' Valley" }, { id: 21, name: "Oddanchatram" }, { id: 22, name: "P.N.Patti" }, { id: 23, name: "Pacode" }, { id: 24, name: "Padmanabhapuram" },
    { id: 25, name: "Palani" }, { id: 26, name: "Palladam" }, { id: 27, name: "Pallapatti" }, { id: 28, name: "Pallikonda" }, { id: 29, name: "Panagudi" },
    { id: 30, name: "Panruti" }, { id: 31, name: "Paramakudi" }, { id: 32, name: "Parangipettai" }, { id: 33, name: "Pattukkottai" }, { id: 34, name: "Perambalur" },
    { id: 35, name: "Peravurani" }, { id: 36, name: "Periyakulam" }, { id: 37, name: "Periyasemur" }, { id: 38, name: "Pernampattu" }, { id: 39, name: "Pollachi" },
    { id: 40, name: "Polur" }, { id: 41, name: "Ponneri" }, { id: 42, name: "Pudukkottai" }, { id: 43, name: "Pudupattinam" }, { id: 44, name: "Puliyankudi" },
    { id: 45, name: "Punjaipugalur" }, { id: 46, name: "Ranipet" }, { id: 47, name: "Rajapalayam" }, { id: 48, name: "Ramanathapuram" }, { id: 49, name: "Rameshwaram" },
    { id: 50, name: "Rasipuram" }, { id: 51, name: "Salem" }, { id: 52, name: "Sankarankoil" }, { id: 53, name: "Sankari" }, { id: 54, name: "Sathyamangalam" },
    { id: 55, name: "Sattur" }, { id: 56, name: "Shenkottai" }, { id: 57, name: "Sholavandan" }, { id: 58, name: "Sholingur" }, { id: 59, name: "Sirkali" },
    { id: 60, name: "Sivaganga" }, { id: 61, name: "Sivagiri" }, { id: 62, name: "Sivakasi" }, { id: 63, name: "Srivilliputhur" }, { id: 64, name: "Surandai" },
    { id: 65, name: "Suriyampalayam" }, { id: 66, name: "Tenkasi" }, { id: 67, name: "Thammampatti" }, { id: 68, name: "Thanjavur" }, { id: 69, name: "Tharamangalam" },
    { id: 70, name: "Tharangambadi" }, { id: 71, name: "Theni Allinagaram" }, { id: 72, name: "Thirumangalam" }, { id: 73, name: "Thirupuvanam" },
    { id: 74, name: "Thiruthuraipoondi" }, { id: 75, name: "Thiruvallur" }, { id: 76, name: "Thiruvarur" }, { id: 77, name: "Thuraiyur" }, { id: 78, name: "Tindivanam" },
    { id: 79, name: "Tiruchendur" }, { id: 80, name: "Tiruchengode" }, { id: 81, name: "Tiruchirappalli" }, { id: 82, name: "Tirukalukundram" }, { id: 83, name: "Tirukkoyilur" },
    { id: 84, name: "Tirunelveli" }, { id: 85, name: "Tirupathur" }, { id: 86, name: "Tirupathur" }, { id: 87, name: "Tiruppur" }, { id: 88, name: "Tiruttani" },
    { id: 89, name: "Tiruvannamalai" }, { id: 90, name: "Tiruvethipuram" }, { id: 91, name: "Tittakudi" }, { id: 92, name: "Udhagamandalam" }, { id: 93, name: "Udumalaipettai" },
    { id: 94, name: "Unnamalaikadai" }, { id: 95, name: "Usilampatti" }, { id: 96, name: "Uthamapalayam" }, { id: 97, name: "Uthiramerur" }, { id: 98, name: "Vadakkuvalliyur" },
    { id: 99, name: "Vadalur" }, { id: 100, name: "Vadipatti" }, { id: 101, name: "Valparai" }, { id: 102, name: "Vandavasi" }, { id: 103, name: "Vaniyambadi" },
    { id: 104, name: "Vedaranyam" }, { id: 105, name: "Vellakoil" }, { id: 106, name: "Vellore" }, { id: 107, name: "Vikramasingapuram" }, { id: 108, name: "Viluppuram" },
    { id: 109, name: "Virudhachalam" }, { id: 110, name: "Virudhunagar" }, { id: 111, name: "Viswanatham" }];
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
  formSubmit() {
    let cname = "", mno: any, locAddress = "", emailid = "";
    let districtname = "", slocality = "", dealername = "", dealerno: any;
    if (this.district !== "") {
      districtname = this.district;
    }
    else {
      let msg = "Please select district";
      this.doAlert(msg);
      return false;
    }
    if (this.locality !== "") {
      slocality = this.locality;
    }
    else {
      let msg = "Please Enter Sub Locality";
      this.doAlert(msg);
      return false;
    }
    if (this.dname !== "") {
      dealername = this.dname;
    }
    else {
      let msg = "Please Enter Dealer Contact Name";
      this.doAlert(msg);
      return false;
    }
    if (this.dno !== 0) {
      // if(isNaN(this.dno) || this.dno.toString().length <10 || this.dno.toString().length > 10){
      //   let msg = "Please Enter Proper Contact Mobile Number";
      //   this.doAlert(msg);
      //   return false;
      // }
      // else{
      dealerno = this.dno;
      // }
    }
    else {
      let msg = "Please Enter Contact Number";
      this.doAlert(msg);
      return false;
    }
    if (this.name !== "") {
      cname = this.name;
    }
    else {
      let msg = "Please Enter Contact Name";
      this.doAlert(msg);
      return false;
    }
    if (this.mobile != 0) {
      // if(isNaN(this.mobile) || this.mobile.toString().length <10 || this.mobile.toString().length > 10){
      //   let msg = "Please Enter Proper Contact Mobile Number";
      //   this.doAlert(msg);
      //   return false;
      // }
      // else{
      mno = this.mobile;
      // }
    }
    else {
      let msg = "Please Enter Contact Mobile Number";
      this.doAlert(msg);
      return false;
    }
    if (this.email !== "") {
      let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      if (this.email != "" && (this.email.length <= 5 || !EMAIL_REGEXP.test(this.email))) {
        let msg = "Please Enter Proper Contact Email ID";
        this.doAlert(msg);
        return false;
      }
      else {
        emailid = this.email;
      }
    }
    else {
      let msg = "Please Enter Contact Email ID";
      this.doAlert(msg);
      return false;
    }
    if (this.address !== "") {
      locAddress = this.address;
    }
    else {
      let msg = "Please Enter Contact Address";
      this.doAlert(msg);
      return false;
    }
    this.loading.present();
    
    this.postDetails(districtname, slocality, dealername, dealerno, cname, mno, locAddress, emailid).then(data => {
      this.loading.dismiss();
      
    let dataListResponse = data;
    let requestInsertData = {};
    requestInsertData['district'] = districtname;
    requestInsertData['locality'] = slocality;
    requestInsertData['dname'] = dealername;
    requestInsertData['dno'] = dealerno;
    requestInsertData['cname'] = cname;
    requestInsertData['cno'] = mno;
    requestInsertData['address'] = locAddress;
    requestInsertData['emailid'] = emailid;


    this.dbService.addRequestData(requestInsertData).then((result) => {
      let toast = this.toastCtrl.create({
        message: 'Request send successfully',
        duration: 3000
      });
      toast.present();
      this.navCtrl.push(ListPage);
      this.name = "";
      this.email = "";
      this.mobile = 0;
      this.address = "";
      this.district = "";
      this.locality = "";
      this.dname = "";
      this.dno = 0;

    }, (error) => {
      
      console.log("ERROR: ", error);
      if (error.code == 6) {
        let requestInsert = "Not Saved";
        this.doAlert(requestInsert);
      }
    });

    });
    return true;
  }
  doAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: msg,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  viewRequest() {
    this.navCtrl.push(ListPage);
  }
  postDetails(district, locality, dname, dno, cname, mno, locAddress, emailid) {
    return new Promise(resolve => {
      this.http.get('http://poriyaalan.com/student/tennis/postEmail.php?district=' + district + '&locality=' + locality + '&dname=' + dname + '&dno=' + dno + '&cname=' + cname + '&mno=' + mno + '&locAddress=' + locAddress + '&emailid=' + emailid).map(res => res.json()).subscribe(data => {
        this.responseData = data;
        resolve(this.responseData);
        console.log(this.responseData);
      });
    });

  }
}
