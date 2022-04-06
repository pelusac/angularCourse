import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ComponentModule } from '../component/component.module';
import { HeroeComponent } from '../heroes/heroe/heroe.component';
import { ListadoComponent } from '../heroes/listado/listado.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentModule,
    
  ],
  declarations:[HomePage, HeroeComponent, ListadoComponent]
})
export class HomePageModule {}
