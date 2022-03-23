import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MvpFormContainerComponent } from './mvp-form-container/mvp-form-container.component';
import { MvpListContainerComponent } from './mvp-list-container/mvp-list-container.component';
import { MvppComponent } from './mvpp.component';

const routes: Routes = [
  { path: '', component: MvppComponent },
  { path: 'form', component:MvpFormContainerComponent },
  { path: 'list', component:MvpListContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvppRoutingModule { }
