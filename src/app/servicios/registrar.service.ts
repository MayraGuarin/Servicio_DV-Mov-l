import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  url = 'http://localhost/servicio_movil/src/app/php/registrar/';



  constructor(private http:HttpClient) { }


//codigo del registro
insertar(articulo:any) {
  return this.http.post(`${this.url}insertar.php`, JSON.stringify(articulo));
}




}


