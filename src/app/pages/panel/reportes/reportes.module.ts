import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ReportesRoutingModule } from './reportes-routing.module'
import { ReportesComponent } from './reportes.component';


@NgModule({
  declarations: [
    ReportesComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [ReportesComponent],
})
export class ReportesModule { }
