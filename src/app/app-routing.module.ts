
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo:'user', pathMatch:'full' },

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
  {
    path: 'Auser',
    loadChildren: () => import('./auser/auser-routing.module')
      .then(m => m.AuserRoutingModule)
  },

  { path: 'sub', 
  loadChildren: () => import('./subject/subject.module')
  .then(m => m.SubjectModule)
 },

  { path: 'mvp', loadChildren: () => import('./mvp-demo/mvp-demo.module').then(m => m.MvpDemoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
