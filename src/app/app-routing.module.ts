import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadosComponent } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

const routes: Routes = [{
    path: '', component: HomeComponent
  },{
    path: 'home', component: HomeComponent
  },{
    path: 'contacto', component: ContactoComponent
  },{
    path: 'empleado', component: EmpleadosComponent
  },{
    path: 'contacto/:id', component: ContactoComponent
  },{
    path: 'coches', component: CochesComponent
  },{
    path: 'plantillas' , component: PlantillasComponent
  },{
    path: '**', component: HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
