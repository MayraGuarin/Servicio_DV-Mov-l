import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MuseoAntioquiaService {
  //codigo para obtener y generar comentarios
  comentarios: string[] = [];

  obtenerComentarios(): string[] {
    return this.comentarios;
  }

  agregarComentario(nuevoComentario: string): void {
    this.comentarios.push(nuevoComentario);
  }

  // finaliza el codigo
}
