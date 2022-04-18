import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { Input } from '@angular/core';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
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


}
