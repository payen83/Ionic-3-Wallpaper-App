import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public params = {data: undefined, events: undefined};

  constructor(public navCtrl: NavController) {
    this.params.data = {
      "headerImage": "assets/images/background/2.jpg",
      "avatar": "assets/images/avatar/0.jpg",
      "title": "My Cool Wallpaper",
      "subtitle": "Insert your description here",
      "items": [{
        "id": 1,
        "title": "Isaac Raid",
        "image": "assets/images/avatar/0.jpg",
        "icon": "icon-share-variant",
        "favorite": false
    },
    {
        "id": 2,
        "title": "Jason Graham2",
        "image": "assets/images/avatar/1.jpg",
        "icon": "icon-share-variant",
        "favorite": false
    },
  ]
      
    };

    this.params.events = {
      'onLike': function (item: any) {
        console.log("Like");
        
      },
      'onFavorite': function (item: any) {
        console.log("Favorite");
        //item.favorite = !item.favorite;
      },
      'onShare': function (item: any) {
        console.log("Share");
      },
      'onSkipPrevious': function (item: any) {
        console.log("Skip Previous");
      },
      'onPlay': function (item: any) {
        console.log("Play");
      },
      'onSkipNext': function (item: any) {
        console.log("Skip Next");
      },
      'onFab': function (item: any) {
        console.log("Fab");
      },
      'onItemClick': function (item: any) {
        console.log(item.title);
      },
      'onContact': function (item: any) {
        console.log('Contact Us');
      },
    };

  }

}
