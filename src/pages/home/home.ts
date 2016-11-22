import { Component } from '@angular/core';
import {SelectPackagePage} from "../select-package/select-package";
import { NavController,PopoverController} from 'ionic-angular';
import {PopOverPagePage} from "../pop-over-page//pop-over-page";
import {AboutPage} from "../about/about";
import {PhoneInfoPage} from "../phone-info/phone-info";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public allNetworks = <any>[];

  constructor(public navCtrl: NavController, private popOver: PopoverController) {
    
    this.allNetworks = [{
      id:1,
      name: "Mobilink",
      pic: '/assets/img/mobilink.jpg',
      intro:"Mobilink is a trade name of Pakistan Mobile Communications Limited, a mobile operator in Pakistan providing a range of prepaid and postpaid voice and data telecommunication services to both individual and corporate subscribers."
    },{
      id:2,
      name: 'Warid',
      pic: '/assets/img/warid.jpg',
      intro:"Warid is a GSM, LTE based mobile operator in Pakistan. Warid is the seventh mobile carrier to enter the Pakistani market. It commenced commercial operations in May 23, 2005."
    },{
      id:3,
      name: 'Zong',
      pic: '/assets/img/zong.jpg',
      intro:"Zong or China Mobile Pakistan is a pan Pakistan mobile network operator headquartered in Islamabad, which offers voice and data services ranging from postpaid and prepaid plans, 2G, 3G and 4G services, mobile banking to fixed telephony. "
    },{
      id:4,
      name: 'UFone',
      pic: '/assets/img/ufone.jpg',
      intro: "Pak Telecom Mobile Limited or Ufone is a Pakistani GSM cellular service provider. It was the third mobile operator to enter Pakistani market. It started its operations under the brand name of Ufone, in Islamabad on January 29, 2001."
    },{
      id:5,
      name: 'Telenor',
      pic: '/assets/img/telenor.png',
      intro: "Telenor Group is a Norwegian multinational telecommunications company headquartered at Fornebu in Bærum, close to Oslo. It is one of the world's largest mobile telecommunications companies with operations in Scandinavia, Eastern Europe and Asia. "
    }]
  }
  
  //Pop Over function 
  
  presentPopover(myEvent) {
    let popover = this.popOver.create(PopOverPagePage);
    popover.present({
      ev: myEvent
    });
  }
  
  
  gotoAboutPage(){
    console.log('about')
    this.navCtrl.push(AboutPage);
  }
  
  gotoNetwork(id){
   
   this.navCtrl.push(SelectPackagePage,id);
    
  }
  gotoPhonePage(){
    this.navCtrl.push(PhoneInfoPage);
  }

}
