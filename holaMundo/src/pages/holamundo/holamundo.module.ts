import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HolamundoPage } from './holamundo';

@NgModule({
  declarations: [
    HolamundoPage,
  ],
  imports: [
    IonicPageModule.forChild(HolamundoPage),
  ],
  exports: [
    HolamundoPage
  ]
})
export class HolamundoPageModule {}
