import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  parametros: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.parametros = params['id'];
      console.log(params);
    });
  }

  redirigir() {
    this.router.navigate(['/contacto','Federico']);
  }

  redirigirHome() {
    this.router.navigate(['/home']);
  }
}
