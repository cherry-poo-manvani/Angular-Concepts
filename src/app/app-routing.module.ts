import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
// import { CoreComponent } from './core/core.component';
// import { UListComponent } from './user-form/u-list/u-list.component';
// import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'user'
  },
  
  {
    path: 'user', 
    loadChildren: () => import('./user/user.module')  
    .then(m => m.UserModule)  
 },

 {
  path: 'resume', 
  loadChildren: () => import('./resume-builder/resume-builder.module')  
  .then(m => m.ResumeBuilderModule)  
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
