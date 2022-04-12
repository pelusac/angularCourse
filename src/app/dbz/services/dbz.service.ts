import { Injectable} from "@angular/core";
import { TouchSequence } from "selenium-webdriver";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [
        {
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
    }
}