import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SustitucionComponent } from './sustitucion.component';

const routes: Routes = [
  {
    path: '',
    component: SustitucionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SustitucionRoutingModule { }
