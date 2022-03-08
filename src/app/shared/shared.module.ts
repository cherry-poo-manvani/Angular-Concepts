import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';



@NgModule({
  declarations: [
    ConfirmationPopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConfirmationPopupComponent
  ]
})
export class SharedModule { }
