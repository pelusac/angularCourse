import { Component, Input, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})


export class AgregarComponent  {

@Input() personajes: Personaje[] = [];
@Input() nuevo: Personaje;

  agregar ( ) {

    if( this.nuevo.nombre.trim().length === 0 ){ 
      return; } 
    else {
     this.personajes.push(this.nuevo);
     
    }
   this.nuevo ={
     nombre: "",
     poder: 0
   }
   console.log(this.nuevo);
   console.log(this.personajes);
  } 

}
