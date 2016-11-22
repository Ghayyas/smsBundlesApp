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
      {
        networkId: 5,
        packageId: 1,
        name: "Talkshawk Good Time Offer (Talkshawk)",
        minutes: 'Unlimited on-net minutes for 2 hours (except 6pm to 9pm)',
        validity: "Offer will expire after 2 hours.",
        subCode: "*345*20#",
        // unSub: "*99*4#",
        subFee: "Rs. 5.00",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Talkshawk Full Day Offer (Talkshawk)",
        minutes: 'Unlimited Telenor Calls',
        validity: "The offer shall  be valid  till midnight on the day it is subscribed.",
        subCode: "*5*250#",
        // unSub: "*99*4#",
        subFee: "Rs. 12.00incl. Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Talkshawk Saat Se Saat Offer (Talkshawk)",
        minutes: 'Unlimited on-net 7AM-7PM',
        validity: "The offer is valid for 1 day and will expire at 7PM on the date of subscription.",
        subCode: "*5*727#",
        // unSub: "*99*4#",
        subFee: "Rs. 8.50incl. Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Din Bhar Offer (Talkshawk)",
        minutes: '6 AM to 6 PM FREE calls',
        validity: "Validity 1 Day (6AM – 6PM).",
        subCode: "*345*006#",
        // unSub: "*99*4#",
        subFee: "Rs. 10.00incl. Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Talkshawk Superhit Offer (Talkshawk)",
        minutes: 'Free Calls except 7pm-10pm',
        validity: "Unlimited free on-net calls from Telenor to Telenor except 7PM – 10 PM.",
        subCode: "*345*006#",
        // unSub: "*99*4#",
        subFee: "Rs. 15.00incl. Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Haftawaar Chhappar Phaar Offer (Talkshawk)",
        minutes: '700 Onnet Mins + Weekend FREE',
        validity: "The offer shall be valid till midnight on the seventh day it is subscribed.",
        subCode: "*5*700#",
        // unSub: "*99*4#",
        subFee: "Rs. 74.00incl. Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 1,
        name: "3 Day Din Bhar Offer (Talkshawk)",
        minutes: '6 AM to 6 PM free calls',
        validity: "3 Day (6AM – 6PM).",
        subCode: "*345*626#",
        // unSub: "*99*4#",
        subFee: "Rs. 24.50incl. Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Talkshawk 2 Paisa Weekly Offer (Talkshawk)",
        minutes: '2paisa/sec for all network.',
        validity: "The offer will be valid for 7 days from the day of subscription.",
        subCode: "*345*227#",
        // unSub: "*99*4#",
        subFee: "Rs. 4.78incl. Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 1,
        name: "3 Day Super hit (Talkshawk)",
        minutes: 'Make unlimited FREE on-net calls to your friends and family with the Telenor Superhit Offer.',
        validity: " Free calls except 7pm-10pm",
        subCode: "*345*227#",
        // unSub: "*99*4#",
        subFee: "Rs. 34.00incl. Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Talkshawk 2 Paisa Daily (Talkshawk)",
        minutes: 'Get amazing local call rates on all networks with the Talkshawk 2 Paisa Daily Offer.',
        validity: "The offer will be valid for 1 day from the day of subscription.",
        subCode: "*020#",
        // unSub: "*99*4#",
        subFee: "Rs. 1.20incl. Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Talkshawk Superload Offer (Talkshawk)",
        minutes: '25 Minutes', 
        validity: "Free minutes are valid for 1 day till midnight. ",
        subCode: "*5*100#",
        // unSub: "*99*4#",
        subFee: "Rs. 0.50incl. Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 1,
        name: "50 Minutes Bundle (Djuice)",
        minutes: '50 Telenor Minutes', 
        validity: "The subscription is valid for 1 day.",
        subCode: "*345*700#",
        // unSub: "*99*4#",
        subFee: "Rs. 9.00incl. Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 1,
        name: "3 Day Onnet Offer (Djuice)",
        minutes: '250 Telenor Minutes', 
        validity: "The subscription is valid for 3 days.",
        subCode: "*730#",
        // unSub: "*99*4#",
        subFee: "Rs. 25.00incl. Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Prime Time Offer (Djuice)",
        minutes: 'Free Onnet FNF Calls 9PM - 9AM', 
        validity: "The subscription is valid for 1 day till 9AM from the time of subscription.",
        subCode: "*345*929#",
        // unSub: "*99*4#",
        subFee: "Rs. 4.00incl. Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 1,
        name: "djuice Team Offer (Djuice)",
        minutes: 'Free djuice and FNF calls', 
        validity: "Offer will be valid for 1 day after the first call/Rs3 internet usage and will expire at midnight.",
        subCode: "*345*11#",
        // unSub: "*99*4#",
        subFee: "Rs. 6.00incl. Tax for first call",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 2,
        name: "On Net Bundle 250",
        minutes: '800 On-Net Minutes', 
        validity: "Monthly.",
        subCode: "*345*832*",
        // unSub: "*99*4#",
        subFee: "Rs. 250.00",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 2,
        name: "On Net Bundle 100",
        minutes: '200 On-Net Minutes', 
        validity: "Monthly.",
        subCode: "*345*831*",
        // unSub: "*99*4#",
        subFee: "Rs. 100.00",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 2,
        name: "Any Network Voice Bundle 50",
        minutes: '40 Minutes', 
        validity: "Monthly.",
        subCode: "*345*821#",
        // unSub: "*99*4#",
        subFee: "Rs. 50+Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 2,
        name: "Any Network Voice Bundle 250",
        minutes: '200 Minutes', 
        validity: "Monthly.",
        subCode: "*345*822#",
        // unSub: "*99*4#",
        subFee: "Rs. 250+Tax",
        // checkStatus: "*706# "
      },
      {
        networkId: 5,
        packageId: 2,
        name: "Any Network Voice Bundle 550",
        minutes: '550 Minutes', 
        validity: "Monthly.",
        subCode: "*345*823#",
        // unSub: "*99*4#",
        subFee: "Rs. 550+Tax",
        // checkStatus: "*706# "
      },
     ]
    
  }

  ionViewDidLoad() {
    console.log('Hello CallPackagesPage Page');
  }

}
