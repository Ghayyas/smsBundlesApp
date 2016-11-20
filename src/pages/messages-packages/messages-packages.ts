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
      },
       {
        networkId: 2,
        packageId: 2,
        name: "Zoom Basic	",
        smsNum: '250',
        whatsApp: "250 MB",
        // validity: "30 days",
        subCode: "Type 'ZOOMBA' for Zoom Basic & send it to 4000 for activation",
        subFee: "Rs. 50+tax",
        unSub: " Type “ZOOMBD” for Zoom Basic &send it to 4000 for de-activation",
        checkStatus: "*767*3#"
      },
       {
        networkId: 2,
        packageId: 2,
        name: "Zoom Limited",
        smsNum: '750',
        whatsApp: "750 MB",
        // validity: "30 days",
        subCode: "Type \" ZOOMLA \" for Zoom Limited & send it to 4000 for activation",
        subFee: "Rs. 90+tax",
        unSub: " Type “ZOOMLD” for Zoom Limited &send it to 4000 for de-activation",
        checkStatus: "*767*3#"
      },
     {
        networkId: 2,
        packageId: 2,
        name: "Zoom Un Limited*",
        smsNum: '7500',
        // whatsApp: "750 MB",
        // validity: "30 days",
        subCode: "Type \"ZOOMULA\" for Zoom Un Limited & send it to 4000 for activation",
        subFee: "Rs. 210+tax",
        unSub: "Type “ZOOMULD” for Zoom Un Limited &send it to 4000 for de-activation",
        // checkStatus: "*767*3#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Daily SMS Bundle",
        smsNum: '500',
        // whatsApp: "30 MB",
        validity: "1 day",
        subCode: "Just Dial *704# or SMS <sub> to 704",
        subFee: "Rs.2.50+tax",
        unSub: "To unsubscribe, SMS <unsubscribe> to 704",
        // checkStatus: "*767*3#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Daily SMS-Whatsapp Bundle",
        smsNum: '500',
        whatsApp: "30 MB",
        validity: "1 day",
        subCode: "Just Dial *700# and reply with 1 or SMS to 700.",
        subFee: "Rs.3.99+tax",
        unSub: "To unsubscribe, SMS to 700",
        // checkStatus: "*767*3#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Fortnightly SMS Bundle",
        smsNum: '500',
        // whatsApp: "30 MB",
        validity: "15 days",
        subCode: "Just SMS <sub> to 700. You would receive an SMS asking you to choose from the following bundles – send a reply with 3 for fortnightly.",
        subFee: "Rs.50+tax",
        unSub: "To unsubscribe, SMS <unsubscribe> to 700",
        // checkStatus: "*767*3#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Weekly SMS Bundle",
        smsNum: '1,200',
        // whatsApp: "30 MB",
        validity: "7 days",
        subCode: "To subscribe, just dial *702# or Just SMS <sub> to 700. You would receive an SMS asking you to choose from the following bundles – send a reply with 2 for weekly.",
        subFee: "Rs.10.99+Tax",
        unSub: "To unsubscribe, SMS <unsubscribe> to 700",
        // checkStatus: "*767*3#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Weekly SMS Bundle",
        smsNum: '1,200',
        // whatsApp: "30 MB",
        validity: "7 days",
        subCode: "To subscribe, just dial *702# or Just SMS <sub> to 700. You would receive an SMS asking you to choose from the following bundles – send a reply with 2 for weekly.",
        subFee: "Rs.10.99+Tax",
        unSub: "To unsubscribe, SMS <unsubscribe> to 700",
        // checkStatus: "*767*3#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Monthly SMS-Whatsapp Bundle",
        smsNum: '500',
        whatsApp: "30 MB",
        validity: "30 days",
        subCode: "Just SMS to 700. You would receive an SMS asking you to choose from the following bundles – send a reply with 4 for monthly.",
        subFee: "Rs 80+tax",
        unSub: "To unsubscribe, SMS to 700",
        // checkStatus: "*767*3#"
      },
       {
        networkId: 3,
        packageId: 2,
        noPackage: "No Package Avalible Yet.."
       },
       {
        networkId: 4,
        packageId: 1,
        name: "Daily Package",
        smsNum: '1,500',
        // whatsApp: "30 MB",
        validity: "24 Hrs",
        subCode: "SMS 'Sub' to 605 ",
        subFee: "Rs 3.99 + tax",
        unSub: "write message “Unsub” and send to 506",
        checkStatus: "To check remaining free SMS & expiry date you can send blank SMS to 606."
      },
      {
        networkId: 4,
        packageId: 1,
        name: "Fortnightly Package",
        smsNum: '10,000',
        // whatsApp: "30 MB",
        validity: "14 days",
        subCode: "SMS 'Sub' to 603 ",
        subFee: "Rs 30 + tax",
        unSub: "write message “Unsub” and send to 506",
        checkStatus: "To check remaining free SMS & expiry date you can send blank SMS to 606."
      },
      {
        networkId: 4,
        packageId: 1,
        name: "Unlimited Package",
        smsNum: '20,000',
        // whatsApp: "30 MB",
        validity: "30 days",
        subCode: "SMS 'Sub' to 607 ",
        subFee: "Rs 80 + tax",
        unSub: "write message “Unsub” and send to 506",
        checkStatus: "To check remaining free SMS & expiry date you can send blank SMS to 606."
      },
      {
        networkId: 4,
        packageId: 1,
        name: "Yearly SMS Package",
        smsNum: 'Unlimited*',
        // whatsApp: "30 MB",
        validity: "One Year",
        subCode: "SMS 'Sub' to 601 ",
        subFee: "Rs. 666 + tax",
        unSub: "write message “Unsub” and send to 506",
        checkStatus: "To check remaining free SMS & expiry date you can send blank SMS to 606."
      },
      {
        networkId: 4,
        packageId: 1,
        name: "*Uth SMS FnF Package",
        smsNum: 'Unlimited*',
        // whatsApp: "30 MB",
        validity: "30 days",
        subCode: "SMS 'Sub' to 604",
        subFee: "Rs. 5 + tax",
        unSub: "write message “Unsub” and send to 506",
        checkStatus: "To check remaining free SMS & expiry date you can send blank SMS to 606."
      },
      {
        networkId: 4,
        packageId: 1,
        name: "*Uth Daily SMS Package",
        smsNum: '600',
        // whatsApp: "30 MB",
        validity: "24 Hours",
        subCode: "SMS 'Sub' to 612",
        subFee: "Rs.1.99 + Tax",
        unSub: "write message “Unsub” and send to 506",
        checkStatus: "To check remaining free SMS & expiry date you can send blank SMS to 606."
      },
      {
        networkId: 4,
        packageId: 1,
        name: "*Weekly SMS Bucket",
        smsNum: '1200',
        // whatsApp: "30 MB",
        validity: "07 Days",
        subCode: "SMS 'Sub' to 608",
        subFee: "Rs. 10 + tax",
        unSub: "write message “Unsub” and send to 506",
        checkStatus: "To check remaining free SMS & expiry date you can send blank SMS to 606."
      },
      {
        networkId: 4,
        packageId: 1,
        name: "*Daily On-net SMS Package",
        smsNum: '500',
        // whatsApp: "30 MB",
        validity: "24 Hours",
        subCode: "SMS 'Sub' to 611",
        subFee: "Rs. 2 + tax",
        unSub: "write message “Unsub” and send to 506",
        checkStatus: "To check remaining free SMS & expiry date you can send blank SMS to 606."
      },
      {
        networkId: 4,
        packageId: 1,
        name: "*Night Package",
        smsNum: '300',
        // whatsApp: "30 MB",
        validity: "8 Hrs (12 am to 8 am)",
        subCode: "SMS 'Sub' to 609",
        subFee: "Rs 1+tax",
        unSub: "write message “Unsub” and send to 506",
        checkStatus: "To check remaining free SMS & expiry date you can send blank SMS to 606."
      },
      {
        networkId: 4,
        packageId: 1,
        name: "45 Day SMS Bucket",
        smsNum: '30,000',
        // whatsApp: "30 MB",
        validity: "45 Days",
        subCode: "SMS 'Sub' to 614",
        subFee: "Rs.99 + tax",
        unSub: "write message “Unsub” and send to 506",
        checkStatus: "To check remaining free SMS & expiry date you can send blank SMS to 606."
      },
      {
        networkId: 4,
        packageId: 2,
        name: "Postpay Monthly SMS Package",
        smsNum: '10,000',
        // whatsApp: "30 MB",
        validity: "1 month",
        subCode: "SMS 'Sub' to 610",
        subFee: "Rs 150 + tax",
        unSub: "write message “Unsub” and send to 8610",
        checkStatus: "The customer can check remaining free SMS by sending a blank SMS to 8606. SMS to short code 8606 will charged at Rs. 0.50 + tax."
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Daily SMS Bundle (Talkshawk)",
        smsNum: '200',
        // whatsApp: "30 MB",
        validity: "1 Day",
        subCode: "*345*116#",
        subFee: "Rs. 4.00",
        // unSub: "write message “Unsub” and send to 8610",
        // checkStatus: "The customer can check remaining free SMS by sending a blank SMS to 8606. SMS to short code 8606 will charged at Rs. 0.50 + tax."
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Weekly SMS Bundle (Talkshawk)",
        smsNum: '1,000',
        // whatsApp: "30 MB",
        validity: "7 Days",
        subCode: "*345*117#",
        subFee: "Rs. 11.00",
        // unSub: "write message “Unsub” and send to 8610",
        // checkStatus: "The customer can check remaining free SMS by sending a blank SMS to 8606. SMS to short code 8606 will charged at Rs. 0.50 + tax."
      },
      {
        networkId: 5,
        packageId: 1,
        name: "15 Day Economy SMS Bundle (Talkshawk)",
        smsNum: '600',
        // whatsApp: "30 MB",
        validity: "15 Days",
        subCode: "*345*112#",
        subFee: "Rs. 14.50",
        // unSub: "write message “Unsub” and send to 8610",
        // checkStatus: "The customer can check remaining free SMS by sending a blank SMS to 8606. SMS to short code 8606 will charged at Rs. 0.50 + tax."
      },
      {
        networkId: 5,
        packageId: 1,
        name: "5 Day SMS Bundle (Talkshawk)",
        smsNum: '300',
        // whatsApp: "30 MB",
        validity: "5 Days",
        subCode: "*345*015#",
        subFee: "Rs. 7.00",
        // unSub: "write message “Unsub” and send to 8610",
        // checkStatus: "The customer can check remaining free SMS by sending a blank SMS to 8606. SMS to short code 8606 will charged at Rs. 0.50 + tax."
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Daily Messaging Bundle (Djuice)",
        smsNum: '300',
        // whatsApp: "30 MB",
        validity: "Daily",
        subCode: "*2*2*1#",
        subFee: "Rs. 2.00",
        // unSub: "write message “Unsub” and send to 8610",
        // checkStatus: "The customer can check remaining free SMS by sending a blank SMS to 8606. SMS to short code 8606 will charged at Rs. 0.50 + tax."
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Weekly Messaging Bundle (Djuice)",
        smsNum: '1200',
        whatsApp: "100 MB",
        validity: "7 Days",
        subCode: "*2*2*2#",
        subFee: "Rs. 10.00",
        // unSub: "write message “Unsub” and send to 8610",
        // checkStatus: "The customer can check remaining free SMS by sending a blank SMS to 8606. SMS to short code 8606 will charged at Rs. 0.50 + tax."
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Weekly SMS Bundle (Djuice)",
        smsNum: '1200',
        // whatsApp: "100 MB",
        validity: "Weekly",
        subCode: "*2*2*2#",
        subFee: "Rs. 7.99",
        // unSub: "write message “Unsub” and send to 8610",
        // checkStatus: "The customer can check remaining free SMS by sending a blank SMS to 8606. SMS to short code 8606 will charged at Rs. 0.50 + tax."
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Monthly Messaging Bundle (Djuice)",
        smsNum: '10,000',
        whatsApp: "300 MB",
        validity: "30 Days",
        subCode: "*2*2*3#",
        subFee: "Rs. 40.00",
        // unSub: "write message “Unsub” and send to 8610",
        // checkStatus: "The customer can check remaining free SMS by sending a blank SMS to 8606. SMS to short code 8606 will charged at Rs. 0.50 + tax."
      },
      {
        networkId: 5,
        packageId: 1,
        name: "15 Day Messaging Bundle (Djuice)",
        smsNum: '3500',
        whatsApp: "200 MB",
        validity: "15 Days",
        subCode: "*2*2*5#",
        subFee: "Rs. 35.00",
        // unSub: "write message “Unsub” and send to 8610",
        // checkStatus: "The customer can check remaining free SMS by sending a blank SMS to 8606. SMS to short code 8606 will charged at Rs. 0.50 + tax."
      },
      {
        networkId: 5,
        packageId: 1,
        name: "SMS Minutes Bundle (Djuice)",
        smsNum: '700',
        whatsApp: "200 MB",
        validity: "7 Days",
        subCode: "345*105#",
        subFee: "Rs. 11.95",
        // unSub: "write message “Unsub” and send to 8610",
        // checkStatus: "The customer can check remaining free SMS by sending a blank SMS to 8606. SMS to short code 8606 will charged at Rs. 0.50 + tax."
      },
      {
        networkId: 5,
        packageId: 2,
        name: "SMS Bundle 30",
        smsNum: '250',
        // whatsApp: "200 MB",
        validity: "Monthly",
        subCode: "*345*761*",
        subFee: "Rs. 30+Tax",
        // unSub: "write message “Unsub” and send to 8610",
        // checkStatus: "The customer can check remaining free SMS by sending a blank SMS to 8606. SMS to short code 8606 will charged at Rs. 0.50 + tax."
      },
      {
        networkId: 5,
        packageId: 2,
        name: "SMS Bundle 60",
        smsNum: '600',
        // whatsApp: "200 MB",
        validity: "Monthly",
        subCode: "*345*762*",
        subFee: "Rs. 60+Tax",
        // unSub: "write message “Unsub” and send to 8610",
        // checkStatus: "The customer can check remaining free SMS by sending a blank SMS to 8606. SMS to short code 8606 will charged at Rs. 0.50 + tax."
      },
      {
        networkId: 5,
        packageId: 2,
        name: "SMS Bundle 200",
        smsNum: '6000',
        // whatsApp: "200 MB",
        validity: "Monthly",
        subCode: "*345*763#",
        subFee: "Rs. 200+Tax",
        // unSub: "write message “Unsub” and send to 8610",
        // checkStatus: "The customer can check remaining free SMS by sending a blank SMS to 8606. SMS to short code 8606 will charged at Rs. 0.50 + tax."
      },
    ];
    
    
  }

  ionViewDidLoad() {
    console.log('Hello MessagesPackagesPage Page');
    
  }

}
