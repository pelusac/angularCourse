<<<<<<< HEAD
import { Injectable } from "@angular/core";
=======
import { Injectable} from "@angular/core";
import { TouchSequence } from "selenium-webdriver";
>>>>>>> 54037e362c1e371fc3f44442a9d73a6cdeefeaca
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [
        {
<<<<<<< HEAD
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
    get personaje (): Personaje[] {
        return [...this._personajes];
    }
    constructor(){
        console.log("servicio iniciado")
    }

    agregarPersonaje ( personaje: Personaje) {
        this._personajes.push( personaje );
=======
          nombre: "Goku",
          poder: 15000
        },
        {
          nombre: "vegeta",
          poder: 10000
        },
        {
          nombre: "Trunks",
          poder: 11000
        }
      ];
    
      nuevo:Personaje = {
       nombre: "",
       poder: 0
      }
    
    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    
    contructor() {
        console.log("Servicio iniciado");
    }

    agregarPersonaje ( personaje: Personaje ) {
        this._personajes.push (personaje);
>>>>>>> 54037e362c1e371fc3f44442a9d73a6cdeefeaca
    }
}