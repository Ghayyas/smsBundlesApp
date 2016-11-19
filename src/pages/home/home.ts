import { Component } from '@angular/core';
import {SelectPackagePage} from "../select-package/select-package";
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public allNetworks = <any>[];

  constructor(public navCtrl: NavController) {
    
    this.allNetworks = [{
      id:1,
      name: "Mobilink"
    },{
      id:2,
      name: 'Warid'
    },{
      id:3,
      name: 'Zong'
    },{
      id:4,
      name: 'UFone'
    },{
      id:5,
      name: 'Telenor'
    }]
  }
  
  gotoNetwork(id){
   
   this.navCtrl.push(SelectPackagePage,id);
    
  }

}
