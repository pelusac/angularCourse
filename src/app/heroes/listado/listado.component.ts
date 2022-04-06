import { Component } from "@angular/core";
import { AttachSession } from "protractor/built/driverProviders";

@Component ({
    selector: 'app-listado',
    templateUrl: 'listado.component.html',
    styleUrls: ['listado.component.scss']
})

export class ListadoComponent {
   heroes: string[] = ["Spiderman", "IronMan","Hulk", "Thor", "Capitan America"];
   heroeBorrado: string[] = [];
   
   borraHeroes () {
        console.log("Borrando...");
        //this.heroe = this.heroes.shift();
        if (this.heroes.length > 0 ){
           this.heroeBorrado.push(this.heroes.shift());
        }
        if (this.heroes.length === 0){
            this.heroes = ["Spiderman", "IronMan","Hulk", "Thor", "Capitan America"];
            this.heroeBorrado = [];
        }
   }
   
}     