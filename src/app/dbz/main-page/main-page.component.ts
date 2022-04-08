import { Component, OnInit } from '@angular/core';


interface Personaje {
  nombre: string;
  poder: number
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  
  nuevo: Personaje = {
    nombre: "Trunx",
    poder: 140000
  }


  constructor() { }

  ngOnInit() {}

  agregar(){
    console.log(this.nuevo);
  }

  cambiarNombre ( event: any) {
    console.log(event.target.value);
  }

}
