import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGiftComponent } from './main-gift/main-gift.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    MainGiftComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainGiftComponent,
    BusquedaComponent,
    ResultadosComponent
  ]
})
export class GiftAppModule { }
