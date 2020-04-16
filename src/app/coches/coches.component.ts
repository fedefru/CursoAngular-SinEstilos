import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.scss'],
  providers: [PeticionesService]
})
export class CochesComponent implements OnInit {
  public coche: Coche;
  public coches:Array<Coche>;
  public articulos;

  constructor(private peticionesService: PeticionesService) {
    this.coche = new Coche('','','');
    this.coches = [
      new Coche('Fiat uno','552','Rojo'),
      new Coche('Corsa','223','Gris'),
      new Coche('Ford Falcon','1212','Plateado'),
      new Coche('Mustang','0','Rojo')
    ];
   }

  ngOnInit() {
    this.peticionesService.getArticulos().subscribe(
      result => {
        this.articulos = result;
      },
      error => {
          var errorMessage = <any> error;
          console.log(errorMessage);
      }
      
    );
  }

  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche('','','');  
  }

}
