import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  _url = 'https://pokeapi.co/api/v2/berry'

  constructor(private http: HttpClient) {
    console.log("Servicio Persona");
   }
  getPersonas()
  {
    
    return this.http.get(this._url);
  }
}
