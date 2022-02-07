import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './user-service.service';
import { UserfilterPipe } from './pipes/userfilter.pipe';


@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent,
    UserfilterPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UserFormComponent,
    UserListComponent
  ],
  providers:[
    UserServiceService
  ]
})
export class UserModule { }


