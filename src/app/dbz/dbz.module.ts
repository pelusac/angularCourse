import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
<<<<<<< HEAD
import { DbzService } from './services/dbz.service';
=======
>>>>>>> 54037e362c1e371fc3f44442a9d73a6cdeefeaca

import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
<<<<<<< HEAD
    
=======
>>>>>>> 54037e362c1e371fc3f44442a9d73a6cdeefeaca
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
