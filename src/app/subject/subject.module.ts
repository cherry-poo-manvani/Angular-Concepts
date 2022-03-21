import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SubjectRoutingModule } from '../subject/subject-routing.module';
import { SubFormComponent } from './sub-form/sub-form.component';
import { SubListComponent } from './sub-list/sub-list.component';
import { SubjectComponent } from './subject.component';
import { SubjectService } from './subject.service';


@NgModule({
  declarations: [
    SubjectComponent,
    SubFormComponent,
    SubListComponent,
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    SubjectService
  ]

})
export class SubjectModule { }
