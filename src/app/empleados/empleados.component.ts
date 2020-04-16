import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  titulo = 'Curso de Angular - Federico Frutos';
  empleado: Empleado;
  trabajadores: Array<Empleado>;
  trabajadorExterno: boolean;
  color: string;
  color_seleccionado: string;

  constructor() {
    this.trabajadorExterno = true;
    this.empleado = new Empleado('Federico',24,'Programador',true);
    this.color = 'red';
    this.color_seleccionado = 'red';
    this.trabajadores = [
      new Empleado('Fabrizio',22,'Cocinero', true),
      new Empleado('Rodrigo',27,'Poeta', false),
      new Empleado('Julian',20,'Mecanico',true)
    ];
    
  }

  ngOnInit() {
    console.log(this.empleado);
  }

  cambiarExterno(valor) {
    this.trabajadorExterno = valor;
  }

}
