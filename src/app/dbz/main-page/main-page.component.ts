import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent  {

  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "vegeta",
      poder: 10000
    },
    {
      nombre: "Trunks",
      poder: 11000
    }
  ];

  nuevo:Personaje = {
    nombre: "",
    poder: 0
  }


 

 
 


}
