import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTabsPage } from './new-tabs';
import { TabsLayout2Module } from '../../components/tabs/layout-2/tabs-layout-2.module';

@NgModule({
  declarations: [
    NewTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewTabsPage),
    TabsLayout2Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewTabsPageModule {}
