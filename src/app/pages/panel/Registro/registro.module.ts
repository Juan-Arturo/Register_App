import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {RegistroRoutingModule} from './registro-routing.module'
import {  RegistroComponent } from './registro.component';


@NgModule({
  declarations: [
   RegistroComponent,

   
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [RegistroComponent],
})
export class RegistroModule { }
