import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
   }

  getPrueba() {
   return 'Hola mundo desde el service';
  }

  getArticulos(): Observable<any>{
    return this.http.get(this.url);
  }

}
