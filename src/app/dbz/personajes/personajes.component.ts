import { Component, OnInit, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
<<<<<<< HEAD
export class PersonajesComponent  {
 //@Input() personajes: Personaje[] = [];
 get personajes () {
   return this.dbzService.personaje;
 }

 constructor( private dbzService: DbzService ) { 
   
    
}
  
=======
export class PersonajesComponent{
//@Input() personajes: Personaje[] = [];
 
get personajes () {
  return this.dbzService.personajes;
}
constructor (private dbzService: DbzService){

}
>>>>>>> 54037e362c1e371fc3f44442a9d73a6cdeefeaca
}
