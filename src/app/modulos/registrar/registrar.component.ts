import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RegistrarService } from 'src/app/servicios/registrar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
user ={
  nombre: "",
  usuario:"",
  clave:"",
  celular: "",
  tipo_usuario:"",
}
//validaciones obligatorias para que los campos no queden en cero
validnombre =true;
validusuario =true;
validclave =true;
validcelular =true;
validtipo_usuario =true;


  constructor(private sregistro: RegistrarService, private router:Router){ }

  ngOnInit(): void {
  }
  ingresar() {

    this.validar();
    if(this.validnombre==true && this.validusuario==true &&  this.validclave==true &&   this.validcelular==true && this.validtipo_usuario==true){

    this.sregistro.insertar(this.user).subscribe(
      (datos: any) => {
       console.log('Registro exitoso, inicia sesión');
        this.mostrarAlerta(true);
      },
      error =>{
        if (error.status === 409) {
          console.log('error durante el registro.');
          this.mostrarAlerta(false);
        } else {

          console.log('el usuario ya esta registrado, inicia sesion');
          this.mostrarAlerta(false);
        }
      },

    );
    }
  }

//funcion para las validaciones, que los campos no queden en blanco
validar(){
  if(this.user.nombre== ""){
      this.validnombre = false;
    }else{
    this.validnombre =true;
  }
  if(this.user.usuario== ""){
    this.validusuario = false;
    }else{
    this.validusuario =true;
  }
  if(this.user.clave== ""){
    this.validclave = false;
    }else{
    this.validclave =true;
  }

  if(this.user.celular== ""){
    this.validcelular = false;
    }else{
    this.validcelular =true;
  }

  if(this.user.tipo_usuario== ""){
    this.validtipo_usuario = false;
    }else{
    this.validtipo_usuario =true;
  }
  }

  //funcion para que salga la alerta del registro exitoso
  mostrarAlerta(exito:boolean) {
    // Verificar si todos los campos obligatorios son válidos
    this.validar();
    if (exito && this.validnombre && this.validusuario && this.validclave && this.validcelular && this.validtipo_usuario) {
    // Mostrar la alerta solo si los campos obligatorios son válidos y el registro es exitoso

    Swal.fire({
      title: 'Te has registrado con éxito, por favor Inicia Sesión',
      icon: 'success',
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  } else {
    // Mostrar la alerta de error si el registro no fue exitoso o algún campo es inválido
    Swal.fire({
      title: 'Usuario ya registrado. Inicie sesión por favor.',
      icon: 'error',
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  }
}
 }

