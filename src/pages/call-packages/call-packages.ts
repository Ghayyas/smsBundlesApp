import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';

/*
  Generated class for the CallPackages page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-call-packages',
  templateUrl: 'call-packages.html'
})
export class CallPackagesPage {
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
        packageId: 2,
        name: "J Talk LNO & Weekend***",
        minutes: '1000',
        validity: "1 month",
        subCode: "For subscriptions and further details, please call 777.",
        subFee: "Rs. 200/-",
      },
      {
        networkId: 1,
        packageId: 2,
        name: "J Talk Budget",
        minutes: '1000',
        validity: "1 month",
        subCode: "For subscriptions and further details, please call 777.",
        subFee: "Rs. 500/-",
      },
      {
        networkId: 1,
        packageId: 2,
        name: "J Talk Unlimited	",
        minutes: '5000',
        validity: "1 month",
        subCode: "For subscriptions and further details, please call 777.",
        subFee: "Rs. 1000/-",
      },
      {
        networkId: 1,
        packageId: 1,
        name: "Monthly Hybrid Bundle",
        minutes: '6000 Mins (200 mins Daily) with 6000 SMS + 600MBS(3G)',
        validity: "30 Days",
        subCode: "*430#",
        unSub: "*430*4#",
        subFee: "Rs. 359 (Incl. Tax)",
        checkStatus: "*430*2#"
      },
      {
        networkId: 1,
        packageId: 1,
        name: "Haftawar Offer",
        minutes: '700 Mins with 700 SMS + 70MBS(3G)',
        validity: "Weekly",
        subCode: "*407#",
        unSub: "*407*4#",
        subFee: "Rs. 75 (Incl. Tax)",
        checkStatus: "*407*2#"
      },
      {
        networkId: 1,
        packageId: 1,
        name: "Super Bundle",
        minutes: '250 Jazz + Warid Minutes',
        validity: "1 Day",
        subCode: "*212#",
        unSub: "*212*4#",
        subFee: "Rs. 13 (Incl. Tax)",
        checkStatus: "*212*2#"
      },
      {
        networkId: 1,
        packageId: 1,
        name: "Day Bundle",
        minutes: 'Unlimited + 20MBs(3G) + 150 SMS',
        validity: "1 Day (12 AM - 7 PM)",
        subCode: "*340#",
        unSub: " *340*4#",
        subFee: "Rs. 10 (Incl. Tax)",
        checkStatus: "*340*2#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Pakistan Offer",
        minutes: 'FREE calls all across the country from 8pm at night to 6pm',
        validity: "1 Day (12 AM - 7 PM)",
        subCode: "SMS PK to 4337.",
        unSub: "PK<space>OFF to 4337",
        subFee: "Rs.12+tax daily.",
        checkStatus: "*200*700#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Hourly Package",
        minutes: 'FREE calls all across the country from 11:00 PM - 6:59 PM	',
        validity: "1 Day	",
        subCode: "You can activate your Hourly Package by simply sending an SMS to 2742. E.g. to select 9:00 PM - 10:00 PM as your Hourly Package, just type 9pm and SMS it to 2742. Rs. 0.5+tax/request apply.",
        // unSub: "PK<space>OFF to 4337",
        subFee: "Rs. 4+tax/hour",
        checkStatus: "Type: FIND and SMS to 2742"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Hourly Package",
        minutes: 'FREE calls all across the country from 7:00 PM - 10:59 PM',
        validity: "1 Day	",
        subCode: "You can activate your Hourly Package by simply sending an SMS to 2742. E.g. to select 9:00 PM - 10:00 PM as your Hourly Package, just type 9pm and SMS it to 2742. Rs. 0.5+tax/request apply.",
        // unSub: "PK<space>OFF to 4337",
        subFee: "Rs. 8+tax/hour",
        checkStatus: "Type: FIND and SMS to 2742"
      },
      {
        networkId: 2,
        packageId: 2,
        name: "Monthly Super Hybrid",
        minutes: '1000 min on-net	',
        validity: "1 Month",
        subCode: "*99*1#",
        unSub: "*99*4#",
        subFee: "Rs. 200",
        checkStatus: "*99*3#"
      },
      {
        networkId: 2,
        packageId: 2,
        name: "UNLIMITED HYBRID	",
        minutes: '2500 min on-net	',
        validity: "1 Month",
        subCode: "*99*2#",
        unSub: "*99*4#",
        subFee: "Rs. 400",
        checkStatus: "*99*3#"
      },
      {
        networkId: 3,
        packageId: 1,
        noPackage: "No Package Avalible Yet"
      },
      {
        networkId: 3,
        packageId: 2,
        noPackage: "No Package Avalible Yet"
      },
      {
        networkId: 4,
        packageId: 1,
        name: "Ufone Bayhisaab Offer",
        minutes: 'Get 20 minutes of Ufone to Ufone talk time and 500 SMS to any network.',
        validity: "1 Day",
        subCode: "“710”",
        // unSub: "*99*4#",
        subFee: "Rs.15.99 + tax",
        checkStatus: "*706# "
      },
      {
        networkId: 4,
        packageId: 2,
        name: "Ufone Talkville",
        minutes: 'Unlimited on-net (Ufone to Ufone) talk time.',
        validity: "1 Month",
        subCode: "SUB to 2500",
        // unSub: "*99*4#",
        subFee: "Rs. 500",
        // checkStatus: "*706# "
      },
      {
        networkId: 4,
        packageId: 2,
        name: "Unlimited PTCL Bucket",
        minutes: 'The Unlimited PTCL Bucket allows you to make endless calls to PTCL & Vfone numbers anywhere in Pakistan from your Ufone Postpay connection.',
        validity: "1 Month",
        subCode: " SMS ‘SUB’ to 7500",
        // unSub: "*99*4#",
        subFee: "Rs. 100+tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 4,
        packageId: 2,
        name: "Offnet Freedom Buckets",
        minutes: ' 1000 off-net minutes',
        validity: "1 Month",
        subCode: "SMS 'sub' to 6500",
        // unSub: "*99*4#",
        subFee: "Rs. 1.25/min + tax",
        // checkStatus: "*706# "
      },
     ]
    
  }

  ionViewDidLoad() {
    console.log('Hello CallPackagesPage Page');
  }

}
