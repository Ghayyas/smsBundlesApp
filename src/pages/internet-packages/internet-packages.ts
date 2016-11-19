import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello InternetPackagesPage Page');
  }

}
