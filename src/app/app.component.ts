import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TabsPage } from '../pages/tabs/tabs';
//import { NewTabsPage } from '../pages/new-tabs/new-tabs';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = "WallpaperPage";
  params: any = {
    "background": "assets/images/background/16.jpg",
    "image": "assets/images/logo/login.png",
    "title": "MyCool Wallpaper"
  };

  
  pages: any = [
    {"title" : "Wallpaper", "theme"  : "listViews",  "icon" : "icon-image-album", "listView" : true, "component": "WallpaperPage"},
    {"title" : "Tutorial", "theme"  : "login",  "icon" : "icon-library", "listView" : false, "component":ContactPage},
    {"title" : "About", "theme"  : "parallax",  "icon" : "icon-information", "listView" : false, "component": AboutPage},
    // {"title" : "Register Pages", "theme"  : "register",  "icon" : "icon-comment-account", "listView" : false, "component":""},
    // {"title" : "Image Gallery", "theme"  : "imageGallery",  "icon" : "icon-apps", "listView" : false, "component":""},
    // {"title" : "Splash Screen", "theme"  : "splashScreens",  "icon" : "icon-logout", "listView" : false, "component":""},
    // {"title" : "Check Boxs", "theme"  : "checkBoxes",  "icon" : "icon-checkbox-marked", "listView" : false, "component":""},
    // {"title" : "Search Bars", "theme"  : "searchBars",  "icon" : "icon-magnify", "listView" : false, "component":""},
    // {"title" : "Typo + small components", "theme"  : "textViews",  "icon" : "icon-tumblr", "listView" : false, "component":""},
    // {"title" : "Wizard", "theme"  : "wizard",  "icon" : "icon-cellphone-settings", "listView" : false, "component":""},
    // {"title" : "Spinner", "theme"  : "spinner",  "icon" : "icon-image-filter-tilt-shift", "listView" : false, "component":""},
    // {"title" : "Tabs", "theme"  : "tabs",  "icon" : "icon-view-array", "listView" : false, "component":""},
    // {"title" : "Maps", "theme"  : "maps",  "icon" : "icon-google-maps", "listView" : false, "component":""},
    // {"title" : "Scanner", "theme"  : "qrcode",  "icon" : "icon-qrcode", "listView" : false, "component":""}
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
