import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariComponent } from './usuari.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariRoutingModule { }
