import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenunciaRoutingModule } from './renuncia-routing.module'
import { RenunciaComponent } from './renuncia.component';


@NgModule({
  declarations: [
    RenunciaComponent
  ],
  imports: [
    CommonModule,
    RenunciaRoutingModule
  ]
})
export class RenunciaModule { }
