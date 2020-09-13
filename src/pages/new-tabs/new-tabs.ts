import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the NewTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-tabs',
  templateUrl: 'new-tabs.html',
})
export class NewTabsPage {
  params: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params.data = [
      { page: "WallpaperPage", icon: "ios-contact", title: "Contact" },
      { page: AboutPage, icon: "ios-heart", title: "About" },
      { page: ContactPage, icon: "ios-settings", title: "Contacts" }
      // { page: "TabPage4", icon: "ios-send", title: "Send" },
      // { page: "TabPage5", icon: "ios-trash", title: "Trash" }
    ]

    this.params.events = {
      'onItemClick': function (item: any) {
            console.log("onItemClick");
      }
  };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTabsPage');
  }

}
