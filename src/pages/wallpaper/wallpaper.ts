import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';


@IonicPage()
@Component({
  selector: 'page-wallpaper',
  templateUrl: 'wallpaper.html',
})
export class WallpaperPage {
  images: Array<any>;

  constructor(private admobFree: AdMobFree, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.images = [
      { id: 0, path: "assets/images/wallpaper/1.jpg"},
      { id: 1, path: "assets/images/wallpaper/2.jpg"},    
      { id: 2, path: "assets/images/wallpaper/3.jpg"},   
      { id: 3, path: "assets/images/wallpaper/4.jpg"},    
      { id: 4, path: "assets/images/wallpaper/5.jpg"},    
      { id: 5, path: "assets/images/wallpaper/6.jpg"},    
      { id: 6, path: "assets/images/wallpaper/7.jpg"},    
      { id: 7, path: "assets/images/wallpaper/8.jpg"},    
      { id: 8, path: "assets/images/wallpaper/9.jpg"},
      { id: 9, path: "assets/images/wallpaper/10.jpg"}
    ];
    
  }

  ionViewDidLoad() {
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id: '',
      bannerAtTop: true, //set to false to make banner at bottom
      isTesting: true, // set to false to make the ads live (before publishing)
      autoShow: true,
      offsetTopBar: true
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       })
       .catch(e => console.log(e));
  }

  viewFull(image: any){
    let modal = this.modalCtrl.create('FullPage', {item: image});
    modal.present();
  }

}