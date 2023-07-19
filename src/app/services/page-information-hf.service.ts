import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageInformationInterface } from '../Interfaces/page-information-hf.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInformationHFService {

    info: PageInformationInterface={};
    loading = false;

  constructor(private http: HttpClient) { 


   // console.log('SERVICIOS DE INFO PAGINA EN LINEA')
    
   this.http.get('assets/data/data-information.json')
    .subscribe((resp: PageInformationInterface) => {
      this.loading=true;
      this.info= resp;
       console.log(resp);
    });
  }
}
