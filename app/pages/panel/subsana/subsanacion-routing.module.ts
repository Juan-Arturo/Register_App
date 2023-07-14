import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubsanacionComponent } from './subsanacion.component';

const routes: Routes = [
  {
    path: '',
    component: SubsanacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubsanacionRoutingModule { }
