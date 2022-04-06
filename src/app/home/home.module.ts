import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { HeroeComponent } from '../heroes/heroe/heroe.component';
import { ListadoComponent } from '../heroes/listado/listado.component';
import { HeroesModule } from '../heroes/heroes.module';
import { ContadorComponent } from '../contador/contador/contador.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeroesModule
    
  ],
  declarations:[HomePage, ContadorComponent]
})
export class HomePageModule {}
