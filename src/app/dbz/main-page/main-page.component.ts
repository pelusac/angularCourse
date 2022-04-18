import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
 
  
  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }
 

  constructor( ) { 
  }

  ngOnInit() {}

  
  

}
