import { Component, ViewChild, ElementRef} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-sustitucion',
  templateUrl: './sustitucion.component.html',
  styleUrls: ['./sustitucion.component.css']
})
export class SustitucionComponent {
  vdate: string; /*variable que almacena dia actual*/ 

  
  @ViewChild('content', { static: false }) modalContent!: ElementRef; // Definimos una referencia al ElementRef

  constructor(private modalService: NgbModal) {
    
    this.vdate = this.getToday();
  }

  
  
  openModal() {
    this.modalService.open(this.modalContent, { centered: true, size: 'lg' });
  }

  getToday(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


}


