import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost/servicio_movil/src/app/php/login/';

  constructor(private http:HttpClient) { }

//consulta datos del login
  consultar(user:any, clave:any) {
    return this.http.get(`${this.url}login.php?user=${user}&clave=${clave}`);
  }

}

