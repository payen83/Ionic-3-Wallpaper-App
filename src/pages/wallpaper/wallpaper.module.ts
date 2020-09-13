import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WallpaperPage } from './wallpaper';
import { SubImageGalleryModule } from '../../components/sub-image-gallery/sub-image-gallery.module';

@NgModule({
  declarations: [
    WallpaperPage,
  ],
  imports: [
    IonicPageModule.forChild(WallpaperPage),
    SubImageGalleryModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class WallpaperPageModule {}
