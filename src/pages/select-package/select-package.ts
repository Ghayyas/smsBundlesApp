import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import {AllNetworksPage} from '../all-networks/all-networks';
/*
  Generated class for the SelectPackage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-select-package',
  templateUrl: 'select-package.html'
})
export class SelectPackagePage {
  
  public Packages = <any>[];
  constructor(public navCtrl: NavController, private params: NavParams) {
    
    this.Packages = [
      {
        id: 1,
        name: "PrePaid",
        pic: "./assets/img/prepaid.jpg",
        networkId: this.params.data
      },
      {
        id: 2,
        name: 'PostPaid',
        pic: './assets/img/postpaid.jpg',
        networkId: this.params.data
      }
      
    ]
  }

  ionViewDidLoad() {
    console.log('Hello SelectPackagePage Page');
  }
  gotoNetwork(id){
    this.navCtrl.push(AllNetworksPage,id)
  }

}
