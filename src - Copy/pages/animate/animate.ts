import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const DB_NAME: string = 'requestDb';
const DB_LOCATION: string = 'default';

@Injectable()
export class DbService {

    public requestDb: any;
    data: any;
    dateTime: any;
    collectPresetName: any;
    collectPresetByName: any;


    constructor(public http: Http, public platform: Platform) {
        this.platform = platform;
        this.requestDb = new SQLite();
        this.requestDb.create(
          {
              name: DB_NAME,
              location: DB_LOCATION 
          }).then(()=>{
          }, (error) => {
              
          });
    }

    /*
    ** initialize service - Create table to store, retrieve, list and delete share email datas.
    */
    public initializeDataService() {
        this.platform.ready().then(() => {
            //console.log('initializing db');
            this.requestDb.create({ name: "requestDb", location: "default" }).then((db: SQLiteObject) => {
                db.executeSql('CREATE TABLE IF NOT EXISTS requestTbl (district VARCHAR, locality VARCHAR, dname VARCHAR, dno VARCHAR, cname VARCHAR, cno VARCHAR, emailid VARCHAR, address VARCHAR, updatedOn INTEGER)', {}).then((data) => {
                    // this.deleteShare();
                    this.getRequestData();
                }, (error) => {
                    //console.error("Unable to create table", error);
                });
            }, (error) => {

            });
        });
    }

   /*
   ** get share data from table.
   */
    getRequestData() {
        return new Promise((resolve, reject) => {
            this.requestDb.create({ name: "requestDb", location: "default" }).then((db: SQLiteObject) => {

                db.executeSql("SELECT rowid,* FROM requestTbl ORDER BY updatedOn DESC LIMIT 10", []).then((data) => {
                    let shareDateDetails = [];

                    if (data.rows.length > 0) {
                        for (let i = 0; i < data.rows.length; i++) {
                            shareDateDetails.push({ district: data.rows.item(i).district, locality: data.rows.item(i).locality, dname: data.rows.item(i).dname, dno: data.rows.item(i).dno, cname: data.rows.item(i).cname, cno: data.rows.item(i).cno, emailid: data.rows.item(i).emailid, address: data.rows.item(i).address, rowid: data.rows.item(i).rowid });
                        }
                    }
                    resolve(shareDateDetails);
                }, (error) => {
                    reject(error);
                    console.error("Unable to create table", error);
                    
                });
            }, (error) => {

            });
        });
    }

   /*
   ** insert share data into table.
   */
    addRequestData(data) {

        this.dateTime = new Date();
        this.dateTime = this.dateTime.getTime();
        return new Promise((resolve, reject) => {
            this.requestDb.create({ name: "requestDb", location: "default" }).then((db: SQLiteObject) => {
                db.executeSql("INSERT INTO requestTbl (district, locality, dname, dno, cname, cno, emailid, address, updatedOn) VALUES ('" + data.district + "','" + data.locality + "','" + data.dname + "','" + data.dno + "','" + data.cname + "','" + data.cno + "','" + data.emailid + "','" + data.address + "','" + this.dateTime + "')", []).then((data) => {
                    resolve(data);
                }, (error) => {
                    reject(error);
                });
            });
        });
    }

   /*
   ** delete share data from table.
   */
    deleteRequestData() {
        this.requestDb.create({ name: "requestDb", location: "default" }).then((db: SQLiteObject) => {
            db.executeSql("DELETE FROM requestTbl", {}).then((data) => {
            }, (error) => {
            });
        }, (error) => {
        });
    }
}
