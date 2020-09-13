import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewTabsPageModule } from '../pages/new-tabs/new-tabs.module';
import { WallpaperPageModule } from '../pages/wallpaper/wallpaper.module';
import { FullPageModule } from '../pages/full/full.module';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { File } from '@ionic-native/file';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TextPageModule } from '../pages/text/text.module';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { AdMobFree } from '@ionic-native/admob-free';
import { ParallaxLayout3Module } from '../components/parallax/layout-3/parallax-layout-3.module';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NewTabsPageModule,
    WallpaperPageModule, 
    FullPageModule,
    TextPageModule,
    ParallaxLayout3Module,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PhotoLibrary,
    SocialSharing,
    AdMobFree,
    File,
    Base64ToGallery,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
