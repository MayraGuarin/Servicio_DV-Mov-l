import { MuseoAntioquiaService } from './../../servicios/museo-antioquia.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-museo-antioquia',
  templateUrl: './museo-antioquia.component.html',
  styleUrls: ['./museo-antioquia.component.css']
})


export class MuseoAntioquiaComponent {
// variables
  likesCount = 0;
  dislikesCount = 0;

  //variables para los comentarios
  comentarios: string[] = [];  // guarda todos los comentarios
  nuevoComentario: string = '';


  // codigo para que salga recuadro con las opciones de restaurante, mapa...
  opcionSeleccionada: string = '';


  constructor(private smuseo: MuseoAntioquiaService){}

  ngOnInit(): void {
    this.obtenerComentarios(); // variable para obtener comentarios
  }
  // fncion para obtener comentarios
  obtenerComentarios(){
      this.comentarios = this.smuseo.obtenerComentarios();
  }
  // funcion para agregar comentarios
  agregarComentario() {
    if (this.nuevoComentario.trim() !== '') {
      this.smuseo.agregarComentario(this.nuevoComentario);
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
