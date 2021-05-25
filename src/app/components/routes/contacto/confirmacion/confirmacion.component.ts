import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  @Input() nombre: string|undefined;
  constructor() { }

  ngOnInit(): void {
  }
  
}