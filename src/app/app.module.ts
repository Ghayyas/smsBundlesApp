import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AllNetworksPage } from '../pages/all-networks/all-networks';
import { CallPackagesPage } from '../pages/call-packages/call-packages';
import { InternetPackagesPage } from '../pages/internet-packages/internet-packages';
import { MessagesPackagesPage } from '../pages/messages-packages/messages-packages';
import { SelectPackagePage } from "../pages/select-package/select-package";
import {PopOverPagePage} from "../pages/pop-over-page//pop-over-page";
import {PhoneInfoPage} from "../pages/phone-info/phone-info";
import {AboutPage} from "../pages/about/about";
import {SimInfo} from "../providers/sim-info";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AllNetworksPage,
    MessagesPackagesPage,
    InternetPackagesPage,
    CallPackagesPage,
    PopOverPagePage,
    PhoneInfoPage,
    AboutPage,
    SelectPackagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],  
  entryComponents: [
    MyApp,
    HomePage,
    AllNetworksPage,
    MessagesPackagesPage,
    InternetPackagesPage,
    CallPackagesPage,
    PopOverPagePage,
    PhoneInfoPage,
    AboutPage,
    SelectPackagePage
  ],
  providers: [SimInfo]
})
export class AppModule {}
