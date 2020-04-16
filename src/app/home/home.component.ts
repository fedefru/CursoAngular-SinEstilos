import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {

  listadoRopa:Array<string>;
  prendaGuardar:string;
  fecha:any;

  constructor(private ropaService: RopaService) {
    this.fecha = new Date();
   }

  ngOnInit() {
    this.listadoRopa = this.ropaService.getRopa();
    console.log(this.listadoRopa);
  }

  guardarPrenda() {
    this.ropaService.addPrenda(this.prendaGuardar);
    this.prendaGuardar = null;
  }

  eliminarPrenda(index:number) {
    this.ropaService.deleteRopa(index);
  }
}
