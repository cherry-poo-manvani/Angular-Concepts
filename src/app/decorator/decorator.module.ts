import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratorRoutingModule } from './decorator-routing.module';
import { DecoratorComponent } from './decorator.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    DecoratorComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    DecoratorRoutingModule
  ]
})
export class DecoratorModule { }
