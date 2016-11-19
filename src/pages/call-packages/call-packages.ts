import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CallPackagesPage Page');
  }

}
