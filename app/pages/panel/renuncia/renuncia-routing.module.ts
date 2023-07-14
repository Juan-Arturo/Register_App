import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenunciaComponent } from './renuncia.component';

const routes: Routes = [
  {
    path: '',
    component: RenunciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenunciaRoutingModule { }
