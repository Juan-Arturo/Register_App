import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuari',
  templateUrl: './usuari.component.html',
  styleUrls: ['./usuari.component.css']
})
export class UsuariComponent {
  @ViewChild('content', { static: false }) modalContent!: ElementRef; // Definimos una referencia al ElementRef

  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalService.open(this.modalContent, { centered: true, size: 'lg' });
  }

}
