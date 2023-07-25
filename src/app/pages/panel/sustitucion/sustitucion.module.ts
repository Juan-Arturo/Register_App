import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SustitucionRoutingModule } from './sustitucion-routing.module'
import { SustitucionComponent } from './sustitucion.component';


@NgModule({
  declarations: [
    SustitucionComponent
  ],
  imports: [
    CommonModule,
    SustitucionRoutingModule,
    FormsModule
    
  ]
})
export class SustitucionModule { }
