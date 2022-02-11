import { NgModule, OnInit } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './user-service.service';
import { UserfilterPipe } from './pipes/userfilter.pipe';
import { Departmentfilter } from './pipes/departmentfilter.pipe';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent,
    UserfilterPipe,
    Departmentfilter

  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  exports: [
    UserFormComponent,
    UserListComponent,
    UserfilterPipe,
    Departmentfilter
  ],
  providers:[
    UserServiceService
  ]
})
export class UserModule implements OnInit
{
  ngOnInit(): void {
  } 
 
}


