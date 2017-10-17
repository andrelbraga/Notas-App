import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Router } from '@angular/router';
import { MyApp } from './app.component';

//natives
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//pages
import { AppRoutingModule } from '../app/app.routes';
import { CollectionPage } from '../pages/page-collection/page-collection';
import { HeaderPage } from '../pages/page-header/page-header';
import { HomePage } from '../pages/page-home/page-home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddData } from '../pages/add-data/add-data';




@NgModule({
  declarations: [
    MyApp,
    CollectionPage,
    HeaderPage,
    HomePage,
    TabsPage,
    AddData
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //AppRoutingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CollectionPage,
    HeaderPage,
    HomePage,
    TabsPage,
    AddData
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
