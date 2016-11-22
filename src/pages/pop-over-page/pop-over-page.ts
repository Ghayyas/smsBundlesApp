import { Component } from '@angular/core';
import { NavController, ViewController, ModalController} from 'ionic-angular';
import {PhoneInfoPage} from "../phone-info/phone-info";
import {AboutPage} from "../about/about";
import {SocialSharing} from 'ionic-native';
/*
  Generated class for the PopOverPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pop-over-page',
  template: `
    <ion-list>
    <!--  <button ion-item (click)="close() || gotoMyPhonePage()">My Phone Detail</button> -->
      <button ion-item icon-only (click)="close() || shareApplication()"> 
      <ion-icon name="share-alt"></ion-icon> &nbsp; Share</button>
      <button ion-item (click)="close() || submitReview()" icon-only>
        <ion-icon name="thumbs-up"></ion-icon>

      &nbsp; Submit Review</button>
    <!--  <button ion-item (click)="close() || gotoAboutPage()">About</button>  -->
     </ion-list>
    `
  // templateUrl: 'pop-over-page.html'
})
export class PopOverPagePage {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController, private model: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello PopOverPagePage Page');
  }
  
  close() {
    this.viewCtrl.dismiss();
  }
  gotoMyPhonePage(){
    // console.log('works')
   let model =  this.model.create(PhoneInfoPage);
   
  
   model.present();
  }
  
  shareApplication(){
    SocialSharing.share("All Network Packages Info", null, null, "http://bit.ly/1WQ5sDG");
  }
  
  submitReview(){
    
    window.open('market://details?id=com.deucen.netyatraa', '_system', 'location=yes');
   
  }
  
  gotoAboutPage(){
   let model =  this.model.create(AboutPage);
  
    model.present();
  }
}
