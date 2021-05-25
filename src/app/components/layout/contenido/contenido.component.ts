import { Component, Input, OnInit } from '@angular/core';

interface Cards
{
  title: string;
  text: string;
  img: string;
}

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  
  cardcontent: Array<Cards> = [
    {
      title: "Fender Telecaster Blacktop",
      text: "$3000",
      img: "../../../../assets/img/fender telecaster blacktop.jpg"
    },
    {
      title: "Gibson LP Deluxe",
      text: "$4000",
      img: "../../../../assets/img/gibson lp-deluxe.jfif"
    },
    {
      title: "Epiphone casino",
      text: "$5000",
      img:"../../../../assets/img/Epiphone-Casino-Natural.jpg"
    }
  ];
  ComprarLP(a: string, b:string)
  {
    alert("Compra exitosa! en breve nos contactaremos!\n"+a+b);
  }
  constructor() { }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  ngOnInit(): void {
  }

}
