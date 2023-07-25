import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-subsanacion',
  templateUrl: './subsanacion.component.html',
  styleUrls: ['./subsanacion.component.css']
})
export class SubsanacionComponent {
  @ViewChild('content', { static: false }) modalContent!: ElementRef; // Definimos una referencia al ElementRef

  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalService.open(this.modalContent, { centered: true, size: 'lg' });
  }

}
