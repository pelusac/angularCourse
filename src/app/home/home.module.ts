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
import { ContadorModule } from '../contador/contador/contador.module';
import { DbzModule } from '../dbz/dbz.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  declarations:[HomePage]
})
export class HomePageModule {}
