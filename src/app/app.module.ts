import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AllNetworksPage } from '../pages/all-networks/all-networks';
import { CallPackagesPage } from '../pages/call-packages/call-packages';
import { InternetPackagesPage } from '../pages/internet-packages/internet-packages';
import { MessagesPackagesPage } from '../pages/messages-packages/messages-packages';
import { SelectPackagePage } from "../pages/select-package/select-package";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AllNetworksPage,
    MessagesPackagesPage,
    InternetPackagesPage,
    CallPackagesPage,
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
    SelectPackagePage
  ],
  providers: []
})
export class AppModule {}
