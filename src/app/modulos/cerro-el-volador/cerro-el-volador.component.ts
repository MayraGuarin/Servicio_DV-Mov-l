import { Component } from '@angular/core';
import { CerrarsesionService } from 'src/app/servicios/cerrarsesion.service';
import { CerroElVoladorService } from 'src/app/servicios/cerro-el-volador.service';

@Component({
  selector: 'app-cerro-el-volador',
  templateUrl: './cerro-el-volador.component.html',
  styleUrls: ['./cerro-el-volador.component.css']
})
export class CerroElVoladorComponent {


  //variables para dar me gusta
  likesCount = 0;
  dislikesCount = 0;

  //variables para los comentarios
  comentarios: string[] = [];  // guarda todos los comentarios
  nuevoComentario: string = '';


  // codigo para que salga recuadro con las opciones de restaurante, mapa...
  opcionSeleccionada: string = '';

  constructor(private svolador: CerroElVoladorService){}

  ngOnInit(): void {
    this.obtenerComentarios(); // variable para obtener comentarios
  }
  // fncion para obtener comentarios
  obtenerComentarios(){
      this.comentarios = this.svolador.obtenerComentarios();
  }
  // funcion para agregar comentarios
  agregarComentario() {
    if (this.nuevoComentario.trim() !== '') {
      this.svolador.agregarComentario(this.nuevoComentario);
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

