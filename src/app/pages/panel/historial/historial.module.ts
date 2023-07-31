import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {HistorialRoutingModule} from './historial-routing.module'
import {  HistorialComponent } from './historial.component';


@NgModule({
  declarations: [
   HistorialComponent,

   
  ],
  imports: [
    CommonModule,
    HistorialRoutingModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [HistorialComponent],
})
export class HistorialModule { }
