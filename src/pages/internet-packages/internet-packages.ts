import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the InternetPackages page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-internet-packages',
  templateUrl: 'internet-packages.html'
})
export class InternetPackagesPage {
   public smsPackages = <any>[];
   public networkId: any;
   public packageId:any;
  constructor(public navCtrl: NavController, public params:NavParams) {
    
    var d = this.params.data;
    console.log('d',d);
    this.networkId = d.networkId
    this.packageId = d.packageid
    this.smsPackages = [
      {
        networkId: 1,
        packageId: 1,
        name: "Daily – Lite",
        Volume: "50 MB",
        validity: "1 day",
        subCode: "*117*11#",
        subFee: "Rs. 12",
        checkStatus: "*117*11*2#"
      },
      {
        networkId: 1,
        packageId: 1,
        name: "Daily Social Bundle",
        Volume: "30 MB for Facebook and WhatsApp",
        validity: "24 hours",
        subCode: "*114*5#",
        subFee: "Rs. 5",
        checkStatus: "*114*5*2#"
      },
      {
        networkId: 1,
        packageId: 1,
        name: "Daily Social Bundle",
        Volume: "30 MB for Facebook and WhatsApp",
        validity: "24 hours",
        subCode: "*114*5#",
        subFee: "Rs. 5",
        checkStatus: "*114*5*2#"
      },
      {
        networkId: 1,
        packageId: 1,
        name: "Base Rate Offer – Champions Package",
        Volume: "PKR 2.39/MB",
        validity: "N/A",
        subCode: "*117*68#",
        subFee: "Free",
        checkStatus: "*117*68*2#"
      },
      {
        networkId: 1,
        packageId: 1,
        name: "Weekly – 1000MB",
        Volume: "1000MB",
        validity: "7 days",
        subCode: "117*47#",
        subFee: "Rs. 110",
        checkStatus: "  *11747*2#"
      },
      {
        networkId: 1,
        packageId: 2,
        name: "Monthly Starter",
        Volume: "1GB",
        validity: "30 days",
        subCode: "To subscribe to 3G bundles dial *446#. Alternatively, customers can dial 777 or visit their nearest Jazz Experience Center/ Jazz Point.",
        subFee: "Rs. 140",
        // checkStatus: "  *11747*2#"
      },
      {
        networkId: 1,
        packageId: 2,
        name: "Monthly Lite",
        Volume: "2 GB",
        validity: "30 days",
        subCode: "To subscribe to 3G bundles dial *446#. Alternatively, customers can dial 777 or visit their nearest Jazz Experience Center/ Jazz Point.",
        subFee: "Rs. 250",
        // checkStatus: "  *11747*2#"
      },
      {
        networkId: 1,
        packageId: 2,
        name: "Monthly Mini	",
        Volume: "5 GB",
        validity: "30 days",
        subCode: "To subscribe to 3G bundles dial *446#. Alternatively, customers can dial 777 or visit their nearest Jazz Experience Center/ Jazz Point.",
        subFee: "Rs. 500",
        // checkStatus: "  *11747*2#"
      },
      {
        networkId: 1,
        packageId: 2,
        name: "Monthly Super",
        Volume: "12 GB",
        validity: "30 days",
        subCode: "To subscribe to 3G bundles dial *446#. Alternatively, customers can dial 777 or visit their nearest Jazz Experience Center/ Jazz Point.",
        subFee: "Rs. 1200",
        // checkStatus: "  *11747*2#"
      },
      {
        networkId: 1,
        packageId: 2,
        name: "3G Monthly Heavy	",
        Volume: "25 GB",
        validity: "30 days",
        subCode: "To subscribe to 3G bundles dial *446#. Alternatively, customers can dial 777 or visit their nearest Jazz Experience Center/ Jazz Point.",
        subFee: "Rs. 2000",
        // checkStatus: "  *11747*2#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Daily Bundles",
        Volume: "2 MB	",
        validity: "1 day",
        subCode: "SMS 2 MB to 7777.",
        subFee: "Rs.3.5",
        checkStatus: "Dial *200*4#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Daily Bundles",
        Volume: "15 MB	",
        validity: "1 day",
        subCode: "SMS 15 MB to 7777	",
        subFee: "Rs.11.99	  ",
        checkStatus: "Dial *200*4#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Daily Bundles",
        Volume: "Unlimited",
        validity: "1 day",
        subCode: "SMS UL to 7777",
        subFee: "Rs.9.99",
        checkStatus: "Dial *200*4#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Weekly Bundles",
        Volume: "250 MB",
        validity: "1 week",
        subCode: "SMS WM to 7777",
        subFee: "Rs.35",
        checkStatus: "Dial *200*9#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Monthly Bundles",
        Volume: "10 MB",
        validity: "1 Month",
        subCode: "SMS 10 MB to 7777	",
        subFee: "Rs.30",
        checkStatus: "Dial *200*3#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Monthly Bundles",
        Volume: "100 MB	",
        validity: "1 Month",
        subCode: "SMS 100 MB to 7777",
        subFee: "Rs.99.99	",
        checkStatus: "Dial *200*3#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Monthly Bundles",
        Volume: "500 MB",
        validity: "1 Month",
        subCode: "SMS 500 MB to 7777",
        subFee: "Rs.150",
        checkStatus: "Dial *200*3#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Monthly Bundles",
        Volume: "2GB",
        validity: "1 Month",
        subCode: "SMS 2GB to 7777",
        subFee: "Rs.500",
        checkStatus: "SMS 2GB to 7777	"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Daily Recursive Bundles",
        Volume: "Daily Bundle 2MB",
        validity: "1 Day",
        subCode: "SMS R2MB to 77777",
        subFee: "Rs.3.50",
        checkStatus: "Dial *200*4#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Daily Recursive Bundles",
        Volume: "Daily Bundle 15MB",
        validity: "1 Day",
        subCode: "SMS R15MB to 7777",
        subFee: "Rs.11.99",
        checkStatus: "Dial *200*4#"
      },
      {
        networkId: 2,
        packageId: 1,
        name: "Daily Recursive Bundles",
        Volume: "Daily Bundle Unlimited",
        validity: "1 Day",
        subCode: "SMS RUL to 7777",
        subFee: "Rs.9.99",
        checkStatus: "Dial *200*4#"
      },
      {
        networkId: 2,
        packageId: 2,
        name: "Share Smart",
        Volume: "15GB",
        validity: "1 Month",
        subCode: "SMS Add <space> numberto 4000",
        subFee: "Rs. 1,500",
        checkStatus: "Dial *400# to get any package information and check internet balance"
      },
      {
        networkId: 2,
        packageId: 2,
        name: "Share Extra",
        Volume: "20GB",
        validity: "1 Month",
        subCode: "SMS Add <space> numberto 4000",
        subFee: "Rs. 2,000",
        checkStatus: "Dial *400# to get any package information and check internet balance"
      },
      {
        networkId: 2,
        packageId: 2,
        name: "Share Ultra",
        Volume: "35GB",
        validity: "1 Month",
        subCode: "SMS Add <space> numberto 4000",
        subFee: "Rs. 3,000",
        checkStatus: "Dial *400# to get any package information and check internet balance"
      },
      {
        networkId: 2,
        packageId: 2,
        name: "Share Ultra",
        Volume: "35GB",
        validity: "1 Month",
        subCode: "SMS Add <space> numberto 4000",
        subFee: "Rs. 3,000",
        checkStatus: "Dial *400# to get any package information and check internet balance"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Daily Mini 20MB",
        Volume: "20MB",
        validity: "1 Day",
        subCode: "*6464#",
        subFee: "Rs. 5",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Daily Basic 100MB",
        Volume: "100MB",
        validity: "1 Day",
        subCode: "*6464#",
        subFee: "Rs. 15",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Daily Premium 500MB",
        Volume: "500MB",
        validity: "1 Day",
        subCode: "*6464#",
        subFee: "Rs. 35",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Daily time Offer",
        Volume: "1 GB",
        validity: "4am to 4pm",
        subCode: "*6464#",
        subFee: "Rs. 12",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Good Night Offer",
        Volume: "1 GB",
        validity: "1am to 9pm",
        subCode: "*6464#",
        subFee: "Rs. 6",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Weekly Premium 700MB",
        Volume: "70 MB",
        validity: "7 Days",
        subCode: "*6464#",
        subFee: "Rs. 70",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Super Weekly Offer",
        Volume: "2000 MB",
        validity: "7 Days",
        subCode: "*6464#",
        subFee: "Rs. 100",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Monthly Mini 150MB",
        Volume: "150 MB",
        validity: "1 Month",
        subCode: "*6464#",
        subFee: "Rs. 50",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Monthly Basic 500MB",
        Volume: "500 MB",
        validity: "1 Month",
        subCode: "*6464#",
        subFee: "Rs. 150",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Monthly Premium 2GB",
        Volume: "2 GB",
        validity: "1 Month",
        subCode: "*6464#",
        subFee: "Rs. 300",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Monthly Premium 6GB + Free 1GB every night (1am - 9am)",
        Volume: "6GB",
        validity: "1 Month",
        subCode: "*6464#",
        subFee: "Rs. 600",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Monthly Premium Plus 10GB",
        Volume: "10 GB",
        validity: "1 Month",
        subCode: "*6464#",
        subFee: "Rs. 1,800",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Monthly Premium Plus 20GB",
        Volume: "20 GB",
        validity: "1 Month",
        subCode: "*6464#",
        subFee: "Rs. 3,500",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Social Pack Daily",
        Volume: "100 MB",
        validity: "1 Day",
        subCode: "*6464#",
        subFee: "Rs. 10",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "All In One Bundles",
        Volume: "40 MB",
        validity: "1 Day",
        subCode: "*6464#",
        subFee: "Rs. 20",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "All In One Bundles",
        Volume: "500 MB",
        validity: "7 Day",
        subCode: "*6464#",
        subFee: "Rs. 150",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "All In One Bundles",
        Volume: "700 MB",
        validity: "1 Month",
        subCode: "*6464#",
        subFee: "Rs. 350",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "All In One Bundles",
        Volume: "1500 MB",
        validity: "1 Month",
        subCode: "*6464#",
        subFee: "Rs. 500",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "All In One Bundles",
        Volume: "2 GB",
        validity: "1 Month",
        subCode: "*6464#",
        subFee: "Rs. 600",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "All In One Bundles",
        Volume: "4 GB",
        validity: "1 Month",
        subCode: "*6464#",
        subFee: "Rs. 799",
        checkStatus: "Dial *6655#"
      },
      {
        networkId: 3,
        packageId: 1,
        name: "Monthly 6GB Bundle",
        Volume: "6GBs+ Free Nights (1GB FUP  from 1 am - 9 am	",
        validity: "1 Month",
        subCode: "*6*1#",
        subFee: "Rs.600 +Tax",
        checkStatus: "*102#"
      },
      {
        networkId: 3,
        packageId: 2,
        noPackage: "No Package Avalible yet."
      },
      {
        networkId: 4,
        packageId: 2,
        name: "Postpaid 1GB	",
        Volume: "1 GB",
        validity: "1 Month",
        subCode: "*4547#",
        subFee: "Rs.300",
        checkStatus: "*4545#"
      },
      {
        networkId: 4,
        packageId: 2,
        name: "Postpaid 3GB	",
        Volume: "3072 MBS",
        validity: "1 Month",
        subCode: "*805#",
        subFee: "Rs.700",
        checkStatus: "*4545#"
      },
      {
        networkId: 4,
        packageId: 2,
        name: "Postpaid 5GB	",
        Volume: "5 GB",
        validity: "1 Month",
        subCode: "*7550#",
        subFee: "Rs.1000",
        checkStatus: "*4545#"
      },
      {
        networkId: 4,
        packageId: 2,
        name: "Postpaid 10GB",
        Volume: "10240 MBS",
        validity: "1 Month",
        subCode: "*8550#",
        subFee: "1200",
        checkStatus: "*4545#"
      },
      {
        networkId: 4,
        packageId: 1,
        name: "Daily light bucket",
        Volume: "40	 MBS",
        validity: "24 hours	",
        subCode: "*804#",
        subFee: "RS.10",
        unSub:"UNSUB to 8804",
        checkStatus: "*4545#"
      },
      {
        networkId: 4,
        packageId: 1,
        name: "Daily heavy bucket	",
        Volume: "75 MBS",
        validity: "24 hours",
        subCode: "*8042#",
        subFee: "15",
        unSub: "*4804#",
        checkStatus: "*4545#"
        // unSub:"UNSUB to 8804"
      },
      {
        networkId: 4,
        packageId: 1,
        name: "Special daily bucket",
        Volume: "50 MBS",
        validity: "01 AM- 09 PM",
        subCode: "*810#",
        subFee: "05",
        unSub: "UNSUB to 7810	",
        checkStatus: "*4545#"
      },
      {
        networkId: 4,
        packageId: 1,
        name: "Mega Internet bucket	",
        Volume: "1024 MBS",
        validity: "1 AM - 6 AM",
        subCode: "*550#",
        subFee: "99",
        unSub: "*5501#",
        checkStatus: "*4545#"
      },
      {
        networkId: 4,
        packageId: 1,
        name: "3 Day Bucket",
        Volume: "100 MBS",
        validity: "24 hours",
        subCode: "*3350#",
        subFee: "25	",
        // unSub: "*5501#",
        checkStatus: "*4545#"
      },
      {
        networkId: 4,
        packageId: 1,
        name: "Weekly Light bucket	  ",
        Volume: "250 MBS",
        validity: "24 hours",
        subCode: "*7811#",
        subFee: "50	",
        // unSub: "*5501#",
        checkStatus: "*4545#"
      },
      {
        networkId: 4,
        packageId: 1,
        name: "Weekly heavy bucket	",
        Volume: "500 MBS",
        validity: "24 hours",
        subCode: "*7815#",
        subFee: "125	",
        // unSub: "*5501#",
        checkStatus: "*4545#"
      },
      {
        networkId: 4,
        packageId: 1,
        name: "Monthly 1GB Bucket",
        Volume: "1,024 MBS",
        validity: "1 Month",
        subCode: "*7807#",
        subFee: "250",
        // unSub: "*5501#",
        checkStatus: "*4545#"
      },
      {
        networkId: 4,
        packageId: 1,
        name: "Monthly 3GB Bucket	",
        Volume: "3,096 MBS",
        validity: "1 Month",
        subCode: "*803#",
        subFee: "500",
        // unSub: "*5501#",
        checkStatus: "*4545#"
      },
      {
        networkId: 4,
        packageId: 1,
        name: "Monthly 10GB Bucket",
        Volume: "10,240 MBS",
        validity: "1 Month",
        subCode: "*5100#",
        subFee: "1,000",
        // unSub: "*5501#",
        checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Daily Unlimited Internet Bundle (TalkShawk)",
        Volume: "750 MB (1AM - 7PM)",
        validity: "1 Day",
        subCode: "*345*139#",
        subFee: "Rs. 13.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Monthly Starter Bundle (TalkShawk)",
        Volume: "2,250 MB",
        validity: "30 Days",
        subCode: "*345*935#",
        subFee: "Rs. 300.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Daily Bundle (TalkShawk)",
        Volume: "75 MB",
        validity: "1 Day",
        subCode: "*345*131#",
        subFee: "Rs. 15.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Monthly Plus Bundle (TalkShawk)",
        Volume: "10,500 MB",
        validity: "30 Days",
        subCode: "*345*136#",
        subFee: "Rs. 1,195.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Monthly Bundle (TalkShawk)",
        Volume: "4 GB",
        validity: "30 Days",
        subCode: "*345*135#",
        subFee: "Rs. 478.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Weekly Bundle (TalkShawk)",
        Volume: "750 MB",
        validity: "7 Days",
        subCode: "*345*134#",
        subFee: "Rs. 75.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      }, 
      {
        networkId: 5,
        packageId: 1,
        name: "4G 3 Day Bundle (TalkShawk)",
        Volume: " 200MB + Free 200MB for Facebook",
        validity: "3 Days",
        subCode: "*345*133#",
        subFee: "Rs. 35.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Monthly Lite (TalkShawk)",
        Volume: "1.5 GB + 1 GB Pocket TV",
        validity: "30 Days",
        subCode: "*345*835#",
        subFee: "Rs. 140.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Weekly Plus Bundle (TalkShawk)",
        Volume: "1200MB",
        validity: "7 Days",
        subCode: "*345*164#",
        subFee: "Rs. 100.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "Punjab Internet Offer (TalkShawk)",
        Volume: "300MB + 300MB Facebook",
        validity: "3 Days",
        subCode: "*345*163#",
        subFee: "Rs. 35.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Daily Lite Bundle (TalkShawk)",
        Volume: "50 MB",
        validity: "1 Day",
        subCode: "*345*141#",
        subFee: "Rs. 12.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Weekly Unlimited Internet Bundle (TalkShawk)",
        Volume: "3 GB (1AM - 7PM)",
        validity: "1 Day",
        subCode: "*345*144#",
        subFee: "Rs. 70.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G free Trial",
        Volume: "100 MB",
        validity: "1 Day",
        subCode: "N/A",
        subFee: "N/A",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Weekly Bundle (Djuice)",
        Volume: "750 MB",
        validity: "7 Days",
        subCode: "*345*134#",
        subFee: "Rs. 75.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G 3 Day Bundle (Djuice)",
        Volume: "200MB + Free 200MB for Facebook",
        validity: "3 Days",
        subCode: "*345*133#",
        subFee: "Rs. 35.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Monthly Lite (Djuice)",
        Volume: "1.5 GB + 1 GB Pocket TV",
        validity: "30 Days",
        subCode: "*345*835#",
        subFee: "Rs. 140.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Daily Lite Bundle (Djuice)",
        Volume: "50 MB",
        validity: "1 Day",
        subCode: "*345*141#",
        subFee: "Rs. 12.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Weekly Unlimited Internet Bundle (Djuice)",
        Volume: "3 GB (1AM - 7PM)",
        validity: "7 Days",
        subCode: "*345*144#",
        subFee: "Rs. 70.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Daily Bundle (Djuice)",
        Volume: "75 MB",
        validity: "1 Day",
        subCode: "*345*131#",
        subFee: "Rs. 15.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Monthly Plus Bundle (Djuice)",
        Volume: "10,500 MB",
        validity: "1 Month",
        subCode: "*345*136#",
        subFee: "Rs. 1,195.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Monthly Bundle (Djuice)",
        Volume: "4 GB",
        validity: "1 Month",
        subCode: "*345*135#",
        subFee: "Rs. 478.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 1,
        name: "4G Daily Unlimited Internet Bundle (Djuice)",
        Volume: "750 MB (1AM - 7PM)",
        validity: "1 Day",
        subCode: "*345*139#",
        subFee: "Rs. 13.00",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 2,
        name: "Internet 100",
        Volume: "150 MB",
        validity: "1 Month",
        subCode: "*345*481#",
        subFee: "RS. 100+ Tax",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 2,
        name: "Internet 200",
        Volume: " 300 MB",
        validity: "1 Month",
        subCode: "*345*482#",
        subFee: "Rs. 200+Tax",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 2,
        name: "Internet 350",
        Volume: "600 MB",
        validity: "1 Month",
        subCode: "*345*483#",
        subFee: "Rs. 350+Tax",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 2,
        name: "Internet 1000",
        Volume: "8000 MB",
        validity: "1 Month",
        subCode: "*345*485#",
        subFee: "Rs. 1000+Tax",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 2,
        name: "Internet 600",
        Volume: "4000 MB",
        validity: "1 Month",
        subCode: "*345*484#",
        subFee: "Rs. 600+Tax",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
      {
        networkId: 5,
        packageId: 2,
        name: "Postpaid Social Bundle",
        Volume: "Unlimited Facebook, Whatapp and Twitter",
        validity: "1 Month",
        subCode: "*345*486#",
        subFee: "Rs. 100+Tax",
        // unSub: "*5501#",
        // checkStatus: "*4545#"
      },
    ]
    
  }

  ionViewDidLoad() {
    console.log('Hello InternetPackagesPage Page');
  }

}
