import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubFormComponent } from './sub-form/sub-form.component';
import { SubListComponent } from './sub-list/sub-list.component';
import { SubjectComponent } from './subject.component';

const routes: Routes = [{ path: '', component: SubjectComponent },
{path: 'sublist', component: SubListComponent},
{path: 'subform', component: SubFormComponent},
{path: 'edit/:id',component: SubFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
