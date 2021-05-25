import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { 
    this.flag=true;
  }
  flag: boolean | undefined;
  nombre:string|undefined;
  ngOnInit(): void {
  }
  @Output() pasaje = new EventEmitter<boolean>();
  Show(a:boolean)
  {
    this.pasaje.emit(a);
  }
  Enviar(a:boolean)
  {
    this.flag=a;
  }
  Guardar(event: any){
    this.nombre= event.target.value;
  }
}
