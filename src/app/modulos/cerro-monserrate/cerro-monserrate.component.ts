import { Component, OnInit } from '@angular/core';
import { CerroMonserrateService } from 'src/app/servicios/cerro-monserrate.service';

@Component({
  selector: 'app-cerro-monserrate',
  templateUrl: './cerro-monserrate.component.html',
  styleUrls: ['./cerro-monserrate.component.css']
})
export class CerroMonserrateComponent {

  // variables
  likesCount = 0;
  dislikesCount = 0;

  //variables para los comentarios
  comentarios: string[] = [];  // guarda todos los comentarios
  nuevoComentario: string = '';


  // codigo para que salga recuadro con las opciones de restaurante, mapa...
  opcionSeleccionada: string = '';

  constructor(private scerromonserrate: CerroMonserrateService){}


  ngOnInit(): void {
    this.obtenerComentarios(); // variable para obtener comentarios
  }
  // fncion para obtener comentarios
  obtenerComentarios(){
      this.comentarios = this.scerromonserrate.obtenerComentarios();
  }
  // funcion para agregar comentarios
  agregarComentario() {
    if (this.nuevoComentario.trim() !== '') {
      this.scerromonserrate.agregarComentario(this.nuevoComentario);
      this.obtenerComentarios();
      this.nuevoComentario = '';
    }
  }
// funcion para seleccionar las opciones que muestra la pagina
  seleccionarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  //funcion para el like o nolike

 incrementLikes(){
  this.likesCount++; // variable para ir contando cada me gusta
  }
  incrementDisLikes(){
  this.dislikesCount++; // condigo para ir contando los no me gusta
  }


}
