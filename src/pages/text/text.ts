import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the TextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text',
  templateUrl: 'text.html',
})
export class TextPage {
  // first: string;
  // second: string;
  // textColor: string;
  // textPlacement: string;
  data: any;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    let temp = this.navParams.get('data');

    if(temp){
      this.data = temp;
    } else {
      this.data = {first: '', second: '', textColor: '#424242', textPlacement: '0.07'};
    }
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TextPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

  addText(){
    let item = {first: this.data.first, second: this.data.second, textColor: this.data.textColor, textPlacement: parseFloat(this.data.textPlacement)};
    this.viewCtrl.dismiss({item: item});
  }

}
