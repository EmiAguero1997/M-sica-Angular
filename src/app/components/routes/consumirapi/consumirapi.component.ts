import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/servicios/personas.service';
@Component({
  selector: 'app-consumirapi',
  templateUrl: './consumirapi.component.html',
  styleUrls: ['./consumirapi.component.css']
})
export class ConsumirapiComponent implements OnInit {
  public personas: Array<any>=[]
  constructor(private personasService: PersonasService) {
    this.personasService.getPersonas().subscribe((resp : any)=> {this.personas=resp.results})
  }
   

  ngOnInit(): void {
  }

}
