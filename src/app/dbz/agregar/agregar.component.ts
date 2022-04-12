import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})


export class AgregarComponent  {


@Input() nuevo: Personaje = {
     nombre: "",
     poder: 0
};

  constructor ( private dbzService: DbzService){

  }
//ejemplo de mandar datos del componente hijo al padre
///@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar ( ) {

    if( this.nuevo.nombre.trim().length === 0 ){ 
      return; } 
   console.log(this.nuevo);
  // this.onNuevoPersonaje.emit( this.nuevo ); funcionalidad que se ejecuta con el evento y manda los datos.
      this.dbzService.agregarPersonaje( this.nuevo );
   this.nuevo ={
     nombre: "",
     poder: 0
   }
  
   
  
  } 

}
