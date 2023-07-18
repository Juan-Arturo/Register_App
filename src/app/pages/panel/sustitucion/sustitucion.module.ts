import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SustitucionRoutingModule } from './sustitucion-routing.module'
import { SustitucionComponent } from './sustitucion.component';


@NgModule({
  declarations: [
    SustitucionComponent
  ],
  imports: [
    CommonModule,
    SustitucionRoutingModule
  ]
})
export class SustitucionModule { }
