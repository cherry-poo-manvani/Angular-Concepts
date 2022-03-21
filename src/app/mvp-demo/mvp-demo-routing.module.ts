import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MvpDemoComponent } from './mvp-demo.component';
import { MvpFormContainerComponent } from './mvp-form-container/mvp-form-container.component';
import { MvpListContainerComponent } from './mvp-list-container/mvp-list-container.component';

const routes: Routes = [
  { path: '' ,

  children:[
    { path:'', redirectTo:'list', pathMatch:'full' },
    { path:'list', component:MvpListContainerComponent },
    { path:'form', component:MvpFormContainerComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvpDemoRoutingModule { }
