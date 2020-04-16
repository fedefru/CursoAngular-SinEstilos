import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {

  ropa = ['Camiseta Adidas','Remera Nike','Pantalon de jean'];
  constructor() { }

  addPrenda(nuevaPrenda:string) {
    this.ropa.push(nuevaPrenda);
    return this.getRopa();
  }

  getRopa() {
    return this.ropa;
  }

  deleteRopa(index:number) {
    this.ropa.splice(index,1);
    return this.getRopa();
  }
}
