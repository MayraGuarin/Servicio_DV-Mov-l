import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

//FUNCON - CODIGO PARA QUE LOGIN Y REGISTRO ESTEN EN LA MISMA PAGINA

  showLoginForm: boolean = true;
  showRegisterForm: boolean = false;

  toggleForms() {
    this.showLoginForm = !this.showLoginForm;
    this.showRegisterForm = !this.showRegisterForm;
  }


  email:any;
  clave:any;
  usuario:any;
  error=false;
  user={

    usuario: "",
    clave:" ",

}
 // Nuevas propiedades para el registro




constructor(private slogin: LoginService, private router:Router){ }

  ngOnInit(): void {
  }
//ingresar con datos para el login
  consulta(){
    this.slogin.consultar(this.email, this.clave) .subscribe((result:any)=> {
      this.usuario = result;
      console.log(this.usuario);

      if(this.usuario[0].validar =="valida"){
        console.log("entro");

        sessionStorage.setItem('id', this.usuario[0].id_usuario);

        sessionStorage.setItem('nombre', this.usuario[0].nombre);

        sessionStorage.setItem('tipo', this.usuario[0].tipo);

        this.router.navigate(['dashboard']);
      }else{
        console.log("no entro");
        this.error=true;
      }
    })
  }


}



