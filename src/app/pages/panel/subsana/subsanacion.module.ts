import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SubsanacionRoutingModule } from './subsanacion-routing.module';
import {SubsanacionComponent } from './subsanacion.component';


@NgModule({
  declarations: [
    SubsanacionComponent
  ],
  imports: [
    CommonModule,
    SubsanacionRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [SubsanacionComponent],
})
export class SubsanacionModule { }
