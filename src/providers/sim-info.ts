import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import {Sim} from "ionic-native";

/*
  Generated class for the SimInfo provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
declare var window:any;

@Injectable()
export class SimInfo {
  public simInfo :any;

  constructor(public toast:ToastController ) {
    console.log('Hello SimInfo Provider');
  }

   presentToast(msg) {
    let toast = this.toast.create({
      message: msg,
      position: 'buttom',
      duration: 3000
    });
    toast.present();
  }

  run() {
    console.log('Hello PhoneInfoPage Page');
    this.hasReadPermission();
    this.equestReadPermission();
    // setTimeout(()=>{
    Sim.getSimInfo().then(
     (info) => {
       this.simInfo = info;  
       console.log('Sim info: ', info)
     },
     (err) => {
       console.log('Unable to get sim info: ', err);
       this.presentToast("Unable to get sim info: " + err);
     });  
  // },1000);
        
}


  
  hasReadPermission() {
  window.plugins.sim.hasReadPermission((s)=>{
  //  console.log('Has Sim Read Permission successCallback',s);
  }, 
  (e)=>{
    this.presentToast('Sim Read Permission Error..');
    // console.log('Sim Read Permission Error',e);
  });
}
equestReadPermission() {
  window.plugins.sim.requestReadPermission((s)=>{
  //  console.log('Sim Read Requst successCallback',s);
}, 
  (e)=>{
    this.presentToast('Sim Read Request Denied..');
    // console.log(' Simp Read Request Error',e);
  });
}

}
