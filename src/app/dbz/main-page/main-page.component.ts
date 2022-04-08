import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  personajes: Personaje[] = [
    {
    nombre: "Goku",
    poder: 15000
    },
    {
    nombre: "Vegeta",
    poder: 7500
    }
  ];

  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }


  constructor() { }

  ngOnInit() {}

  agregar(){
    if ( this.nuevo.nombre.length === 0 ){
      return;
    }
    else {
      console.log(this.nuevo);
      this.personajes.push(this.nuevo);
      this.nuevo = {
        nombre: "",
        poder: 0
      }
    }
    
  }

  

}
