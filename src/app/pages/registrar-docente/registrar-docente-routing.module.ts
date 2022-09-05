import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarDocentePage } from './registrar-docente.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarDocentePageRoutingModule {}
