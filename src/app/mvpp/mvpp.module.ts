import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvppRoutingModule } from './mvpp-routing.module';
import { MvppComponent } from './mvpp.component';
import { MvpFormContainerComponent } from './mvp-form-container/mvp-form-container.component';
import { MvpListContainerComponent } from './mvp-list-container/mvp-list-container.component';
import { MvpFormPresentationComponent } from './mvp-form-container/mvp-form-presentation/mvp-form-presentation.component';
import { MvpListPresentationComponent } from './mvp-list-container/mvp-list-presentation/mvp-list-presentation.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MvppComponent,
    MvpFormContainerComponent,
    MvpListContainerComponent,
    MvpFormPresentationComponent,
    MvpListPresentationComponent
  ],
  imports: [
    CommonModule,
    MvppRoutingModule,
    HttpClientModule
  ]
})
export class MvppModule { }
