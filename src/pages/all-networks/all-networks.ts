import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CallPackagesPage} from '../call-packages/call-packages';
import { InternetPackagesPage } from '../internet-packages/internet-packages';
import { MessagesPackagesPage } from '../messages-packages/messages-packages';

/*
  Generated class for the AllNetworks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-all-networks',
  templateUrl: 'all-networks.html'
})
export class AllNetworksPage {
   public NetworkName:string;
   public allPackages = <any>[];
  constructor(public navCtrl: NavController,private params:NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('Hello AllNetworksPage Page');
   var data =  this.params.data.networkId;
   var packageid = this.params.data.id;
    console.log('v',data);
    this.loadPackages(data);
     this.allPackages = [
        {
         id: 1,
         name: "Message Packages",
         networkId: data,
         packageid:packageid
        },
         {
           id:2,
           name: "Call Packages",
           networkId: data,
           packageid:packageid
         },
         {
           id:3,
           name: "Internet Packages",
           networkId: data,
           packageid:packageid
         }
      ]
  }
  
  loadPackages(data){
   if(data == 1){
     console.log('one is pressed..');
     this.NetworkName = "Mobilink"
   }
   if(data == 2){
     console.log('two is pressed..');
     this.NetworkName = "Warid"

   }
      if(data == 3){
     console.log('three is pressed..');
     this.NetworkName = "Zong"

   }
      if(data == 4){
     console.log('four is pressed..');
     this.NetworkName = "UFone"

   }
      if(data == 5){
     console.log('five is pressed..');
     this.NetworkName = "Telenor"

   }
 }
  gotoPackage(id){
   console.log("packageid",id);
   if(id.id == '1'){
   this.navCtrl.push(MessagesPackagesPage,id);
   }
   
   if(id.id == '2'){
   this.navCtrl.push(CallPackagesPage,id);
   }
   
   if(id.id == '3'){
   this.navCtrl.push(InternetPackagesPage,id);
   }
   
  }
  
}
