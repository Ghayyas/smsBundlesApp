import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the MessagesPackages page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-messages-packages',
  templateUrl: 'messages-packages.html'
})
export class MessagesPackagesPage {
   public smsPackages = <any>[];
   public networkId: any;
   public packageId:any;
  constructor(public navCtrl: NavController, private params: NavParams) {
    
    var d = this.params.data;
    console.log('d',d);
    this.networkId = d.networkId
    this.packageId = d.packageid
    this.smsPackages = [
      {
        networkId: 1,
        packageId: 1,
        name: "Daily SMS + WhatsApp Bundle",
        smsNum: '1,500',
        whatsApp: "10 MBs",
        validity: "1 Day",
        subCode: "*334#",
        subFee: "Rs. 5.98 (Incl. Tax)",
        unSub: "*334*4#",
        checkStatus: "*334*2#"
      },
      {
        networkId: 1,
        packageId: 1,
        name: "Weekly Bundle",
        smsNum: '1000',
        whatsApp: "25 MBs",
        validity: "7 Days",
        subCode: "*101*1*07#",
        subFee: "Rs. 13.13 (Incl. Tax)",
        unSub: " *101*4*07#",
        checkStatus: "*101*2*07#"
      },
      {
        networkId: 1,
        packageId: 1,
        name: "Daily Bundle",
        smsNum: '1,200',
        // whatsApp: "10 MBs",
        validity: "1 Day",
        subCode: "*101*1*01#",
        subFee: "Rs. 4.77 (Incl. Tax)",
        unSub: "*101*4*01#",
        checkStatus: "*101*2*01#"
      },
       {
        networkId: 1,
        packageId: 1,
        name: "Monthly Bundle",
        smsNum: '10,000',
        whatsApp: "Unlimited",
        validity: "30 Days",
        subCode: "*101*1*02#",
        subFee: "Rs. 47.79 (Incl. Tax)",
        unSub: " *101*4*02#",
        checkStatus: "*101*2*02#"
      },
       {
        networkId: 1,
        packageId: 2,
        name: "J SMS-1",
        smsNum: '300',
        // whatsApp: "Unlimited",
        validity: "1 month",
        subCode: "The J SMS bundle can be subscribed by calling 777 (Club Postpaid members can subscribe to the bundles by calling their respective CAMs)",
        subFee: "Rs.30 (Monthly)",
        // unSub: " *101*4*02#",
        // checkStatus: "*101*2*02#"
      },
      {
        networkId: 1,
        packageId: 2,
        name: "J SMS-2	",
        smsNum: '600',
        // whatsApp: "Unlimited",
        validity: "1 month",
        subCode: "The J SMS bundle can be subscribed by calling 777 (Club Postpaid members can subscribe to the bundles by calling their respective CAMs)",
        subFee: "Rs.50 (Monthly)",
        // unSub: " *101*4*02#",
        // checkStatus: "*101*2*02#"
      },
      {
        networkId: 1,
        packageId: 2,
        name: "J SMS-3",
        smsNum: 'Unlimited',
        // whatsApp: "Unlimited",
        validity: "1 month",
        subCode: "The J SMS bundle can be subscribed by calling 777 (Club Postpaid members can subscribe to the bundles by calling their respective CAMs)",
        subFee: "Rs.150 (Monthly)",
        // unSub: " *101*4*02#",
        // checkStatus: "*101*2*02#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Daily Sms",
        smsNum: '500',
        // whatsApp: "Unlimited",
        validity: "1 day",
        subCode: "SMS 'DS' to 3333",
        subFee: "3.5+tax",
        unSub: "SMS 'SMS off' to 3333",
        checkStatus: "*200*2#"
      },
       {
        networkId: 2,
        packageId: 1,
        name: "3 Day Sms",
        smsNum: '500',
        whatsApp: "50 MBs",
        validity: "3 days",
        subCode: "SMS 'TS' to 3333",
        subFee: "5+tax",
        unSub: "SMS “TS off” to 3333",
        checkStatus: "*200*526#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Weekly Sms	",
        smsNum: '1,300	',
        whatsApp: "50 MBs",
        validity: "7 days",
        subCode: "SMS 'WS' to 3333	",
        subFee: "9.99+tax	",
        unSub: " SMS “SMS off” to 3333",
        checkStatus: "*200*2#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Monthly Sms",
        smsNum: '10,000',
        whatsApp: "500 MBs",
        validity: "30 days",
        subCode: "SMS 'MS' to 3333",
        subFee: "70+tax",
        // unSub: " SMS “SMS off” to 3333",
        checkStatus: "*200*767#"
      }
    ];
    
    
  }

  ionViewDidLoad() {
    console.log('Hello MessagesPackagesPage Page');
    
  }

}
