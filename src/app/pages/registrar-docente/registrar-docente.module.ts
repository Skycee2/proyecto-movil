import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarDocentePageRoutingModule } from './registrar-docente-routing.module';

import { RegistrarDocentePage } from './registrar-docente.page';

import { InputTrimModule } from 'ng2-trim-directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarDocentePageRoutingModule,
    InputTrimModule,
  ],
  declarations: [RegistrarDocentePage]
})
export class RegistrarDocentePageModule {}
