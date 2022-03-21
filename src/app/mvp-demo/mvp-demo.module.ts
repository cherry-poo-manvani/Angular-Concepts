import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvpDemoRoutingModule } from './mvp-demo-routing.module';
import { MvpDemoComponent } from './mvp-demo.component';
import { MvpFormContainerComponent } from './mvp-form-container/mvp-form-container.component';
import { MvpListContainerComponent } from './mvp-list-container/mvp-list-container.component';
import { MvpFormPresentationComponent } from './mvp-form-container/mvp-form-presentation/mvp-form-presentation.component';
import { MvpListPresentationComponent } from './mvp-list-container/mvp-list-presentation/mvp-list-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MvpService } from './mvp.service';


@NgModule({
  declarations: [
    MvpDemoComponent,
    MvpFormContainerComponent,
    MvpListContainerComponent,
    MvpFormPresentationComponent,
    MvpListPresentationComponent
  ],
  imports: [
    CommonModule,
    MvpDemoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    MvpService
  ]
})
export class MvpDemoModule { }
