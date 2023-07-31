import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {UsuariRoutingModule} from './usuari-routing.module'
import {  UsuariComponent } from './usuari.component';


@NgModule({
  declarations: [
   UsuariComponent,

   
  ],
  imports: [
    CommonModule,
    UsuariRoutingModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [UsuariComponent],
})
export class UsuariModule { }
