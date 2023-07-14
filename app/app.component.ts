import { Component } from '@angular/core';
import { PageInformationHFService } from './services/page-information-hf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'candidatos';

  constructor(public _infoPaginaHF:PageInformationHFService){

  }
}
