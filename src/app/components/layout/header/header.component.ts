import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() pasaje = new EventEmitter<boolean>();
  flag: boolean=true;
  Show(a:boolean)
  {
    this.pasaje.emit(a);
  }
}
