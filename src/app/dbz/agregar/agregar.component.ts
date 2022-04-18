<<<<<<< HEAD
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { Input } from '@angular/core';
import { DbzModule } from '../dbz.module';
=======
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

import { Personaje } from '../interfaces/dbz.interface';
>>>>>>> 54037e362c1e371fc3f44442a9d73a6cdeefeaca
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
<<<<<<< HEAD
export class AgregarComponent {

@Input() personajes: Personaje[] = [];
@Input() nuevo: Personaje;
//@Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

constructor (private dbzService: DbzService){

}
 
  agregar(){
    if ( this.nuevo.nombre.length === 0 ){
      return;
    }
    else {
      console.log(this.nuevo);
      this.dbzService.agregarPersonaje ( this.nuevo );
      //this.onNewPersonaje.emit( this.nuevo );
      this.nuevo = {
        nombre: "",
        poder: 0
      }
    }
    
  }

=======


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
>>>>>>> 54037e362c1e371fc3f44442a9d73a6cdeefeaca

}
