import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController, Platform, AlertController, ActionSheetController } from 'ionic-angular';
import { PhotoLibrary, RequestAuthorizationOptions } from '@ionic-native/photo-library';
//import { File } from '@ionic-native/file';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

declare var window;

@IonicPage()
@Component({
  selector: 'page-full',
  templateUrl: 'full.html',
})
export class FullPage {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  @ViewChild('image') myImage: ElementRef;

  image: any = {};
  imageSrc: string;
  displayImage: string = 'block';
  displayCanvas: string = 'block';
  width: any;
  height: any;
  data: any;
  canvas: string;
  showEdit: boolean = true;
  constructor(private admobFree: AdMobFree, private base64ToGallery: Base64ToGallery, private modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController, private socialSharing: SocialSharing, private platform: Platform, private photoLibrary: PhotoLibrary, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.image = this.navParams.get('item');
    this.data = this.navParams.get('data');
    this.imageSrc = './'+this.image.path;
  }

  ionViewDidLoad() {
    //console.log(this.image.path);
    this.renderImage().then(()=>{
      this.canvas = this.myCanvas.nativeElement.toDataURL();
      //this.displayCanvas = 'none';
      this.displayImage = 'none';
      //console.log(this.canvas);
    });

    const interstitialConfig: AdMobFreeInterstitialConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id: '', // set your ad id here
      isTesting: true, // set to false to make the ads live (before publishing)
      autoShow: true,
     };
     this.admobFree.interstitial.config(interstitialConfig);
     
     this.admobFree.interstitial.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       })
       .catch(e => console.log(e));
  }

  closeWallpaper(){
    this.viewCtrl.dismiss();
  }

  renderImage(): Promise<any>{
    return new Promise(resolve=>{
      this.displayImage = 'block';
      this.displayCanvas = 'block';
      let wImage = this.myImage.nativeElement;
      let wwidth = wImage.clientWidth;
      let wheight = wImage.clientHeight;
      let first = '';
      let second = '';
      let textColor = '#424242';
      let textPlacement: number = 0;
      if (this.data){
        //console.log(this.data);
        first = this.data.item.first;
        second = this.data.item.second;
        textColor = this.data.item.textColor;
        textPlacement = this.data.item.textPlacement;
        this.showEdit = false;
      }
      //console.log(wwidth+','+wheight);
      //this.displayImage = 'none';
  
      let canvas = this.myCanvas.nativeElement;
      var context = canvas.getContext('2d');
  
      var imageObj = new Image();
      var emoticon = new Image();
      emoticon.src = './assets/images/wallpaper/emoticon.png';


      this.width = this.platform.width();
      this.height = this.platform.height();
  
      canvas.height = this.height;
      canvas.width = this.width;

      //var truth = true;
  
      imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, wwidth, wheight);
        // if (truth){
        //   context.drawImage(emoticon, 0, 0, wwidth, wheight);
        // }
        context.font = 'italic 35pt Verdana';
        context.fillStyle = textColor;
        //context.textAlign = 'right';
        context.fillText(first, wwidth*0.03, wheight*textPlacement, wwidth*.97);
        context.fillText(second, wwidth*0.03, wheight*(textPlacement+0.06), wwidth*.97);
        resolve();
      };
      
      imageObj.src = './'+this.image.path;
    })
    
  }

  

  addText(){
    let modalCss = {
      showBackdrop: true,
      enableBackdropDismiss: false,
      cssClass: "my-modal"
    }
    let modal = this.modalCtrl.create('TextPage', {data: this.data}, modalCss);
    modal.present();
    modal.onDidDismiss(data => {
      if(data){
        this.navCtrl.push('FullPage', {item: this.image, data: data});
      }
    });
  }

  share(){
    this.socialSharing.share('http://www.', 'MyCool Wallpaper', this.canvas).then(response=>{

    }).then(response=> {

    }).catch(err=>{
      alert(JSON.stringify(err))
    })

    //alert(this.file.applicationDirectory);
  }

  setWallpaper(){
    let confirm = this.alertCtrl.create({
      title: 'Wallpaper App',
      message: 'Do you want to set this image as wallpaper?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            //console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            let canvas:string = this.myCanvas.nativeElement.toDataURL();
            // window.plugins.wallpaper.setImage(this.image.path)
            let newCanvas = canvas.replace('data:image/png;base64,','');
            //console.log(newCanvas);
            window.plugins.wallpaper.setImageBase64(newCanvas);
            
            this.showAlert('','Image is set as wallpaper');
          }
        }
      ]
    });
    confirm.present();
  }


  setOrSaveWallpaper() {
    if (this.platform.is('android')) {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Options',
        buttons: [
          {
            text: 'Set image as wallpaper',
            handler: () => {
              this.setWallpaper();
            }
          }, {
            text: 'Save image to gallery',
            handler: () => {
              this.saveWallpaper();
            }
          }, {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              //console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    } else {
      this.saveWallpaper();
    }
  }

  saveWallpaper(){
    let photoLibraryOptions: RequestAuthorizationOptions = {
      read: true,
      write: true
    };

    this.photoLibrary.requestAuthorization(photoLibraryOptions).then(() => {

      // this.photoLibrary.saveImage(this.file.applicationDirectory+'www/'+this.image.path,'Wallpaper').then(response=>{
      //   this.showAlert('','Save image successfull');
      // }).catch(err=> {
      //   this.showAlert('','Save image successfull');
      // });

      let canvas = this.myCanvas.nativeElement.toDataURL();

      this.base64ToGallery.base64ToGallery(canvas).then(
        res => {
          console.log('Saved image to gallery ', res)
          this.showAlert('','Save image successful');
        },
        err => console.log('Error saving image to gallery ', err)
      );

    }).catch(err => console.log('permissions weren\'t granted'));
  }

  showAlert(title: string, message: string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
