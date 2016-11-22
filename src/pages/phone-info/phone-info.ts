import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
// import {Sim} from "ionic-native";
import {SimInfo} from "../../providers/sim-info";
/*
  Generated class for the PhoneInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
// declare var window:any;
@Component({
  selector: 'page-phone-info',
  templateUrl: 'phone-info.html'
})
export class PhoneInfoPage {
  public simInfo :any;
  constructor(public navCtrl: NavController, public info:SimInfo) {
    this.simInfo = this.info.simInfo;
  }

//  presentToast(msg) {
//     let toast = this.toast.create({
//       message: msg,
//       position: 'buttom',
//       duration: 3000
//     });
//     toast.present();
//   }

//   ionViewDidLoad() {
//     console.log('Hello PhoneInfoPage Page');
//     this.hasReadPermission();
//     this.equestReadPermission();
//     // setTimeout(()=>{
//     Sim.getSimInfo().then(
//      (info) => {
//        this.simInfo = info;  
//        console.log('Sim info: ', info)
//      },
//      (err) => {
//        console.log('Unable to get sim info: ', err);
//        this.presentToast("Unable to get sim info: " + err);
//      });  
//   // },1000);
        
// }


  
//   hasReadPermission() {
//   window.plugins.sim.hasReadPermission((s)=>{
//   //  console.log('Has Sim Read Permission successCallback',s);
//   }, 
//   (e)=>{
//     this.presentToast('Sim Read Permission Error..');
//     // console.log('Sim Read Permission Error',e);
//   });
// }
// equestReadPermission() {
//   window.plugins.sim.requestReadPermission((s)=>{
//   //  console.log('Sim Read Requst successCallback',s);
// }, 
//   (e)=>{
//     this.presentToast('Sim Read Request Denied..');
//     // console.log(' Simp Read Request Error',e);
//   });
// }

}
