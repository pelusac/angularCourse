import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGiftComponent } from './main-gift/main-gift.component';



@NgModule({
  declarations: [
    MainGiftComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainGiftComponent
  ]
})
export class GiftAppModule { }
