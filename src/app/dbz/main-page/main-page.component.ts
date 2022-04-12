import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent  {
//personajes: Personaje[] = [];
  // personajes: Personaje[] = [
  //   {
  //     nombre: "Goku",
  //     poder: 15000
  //   },
  //   {
  //     nombre: "vegeta",
  //     poder: 10000
  //   },
  //   {
  //     nombre: "Trunks",
  //     poder: 11000
  //   }
  // ];

  nuevo:Personaje = {
   nombre: "",
   poder: 0
  }

//obtiene los personajes del servicio co get()
// get personajes(): Personaje[]{
//   return this.dbzService.personajes;
// }

// agregarNuevoPersonaje( argumento: Personaje){
//   this.personajes.push( argumento );
// }
 

// 

contructor ( ){}

}
