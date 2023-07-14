import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubsanacionRoutingModule } from './subsanacion-routing.module';
import {SubsanacionComponent } from './subsanacion.component';


@NgModule({
  declarations: [
    SubsanacionComponent
  ],
  imports: [
    CommonModule,
    SubsanacionRoutingModule
  ]
})
export class SubsanacionModule { }
