import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
=======
>>>>>>> 54037e362c1e371fc3f44442a9d73a6cdeefeaca

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
<<<<<<< HEAD
export class MainPageComponent implements OnInit {
 
  
  nuevo: Personaje = {
    nombre: "",
    poder: 0
=======
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
>>>>>>> 54037e362c1e371fc3f44442a9d73a6cdeefeaca
  }
 

<<<<<<< HEAD
  constructor( ) { 
  }
=======
//obtiene los personajes del servicio co get()
// get personajes(): Personaje[]{
//   return this.dbzService.personajes;
// }

// agregarNuevoPersonaje( argumento: Personaje){
//   this.personajes.push( argumento );
// }
 
>>>>>>> 54037e362c1e371fc3f44442a9d73a6cdeefeaca

// 

<<<<<<< HEAD
  
  
=======
contructor ( ){}
>>>>>>> 54037e362c1e371fc3f44442a9d73a6cdeefeaca

}
