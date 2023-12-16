import { Component } from '@angular/core';
import { SoporteService } from 'src/app/servicios/soporte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent {

  verf = false;
  soporte:any;
  iduser: any;
  user = {
    Nombre:"",
    Correo:"",
    inquietudes:"",
  };

  //para validar el arroba


  //PARA VALIDAR
  validNombre = true;
  validCorreo = true;
  validinquietudes = true;
  beditar = false;

constructor(private ssoporte: SoporteService) {}

ngOnInit(): void {
    this.consulta();
    this.limpiar();
}

   /**/  mostrar(dato:any) {
      switch(dato){
        case 0:
          this.verf = false;
          this.beditar = false;
          this.iduser = "";
          this.limpiar();
          break;
          case 1:
            this.verf = true;
            break;
      }
    }
    limpiar() {
      this.user.Nombre = "";
      this.user.Correo = "";
      this.user.inquietudes = "";
    }
    validar(){
      if(this.user.Nombre==""){
          this.validNombre = false;
      }else{
        this.validNombre = true;
      }
      if(this.user.Correo==""){
        this.validCorreo = false;
      }else{
      this.validCorreo = true;
      }
      if(this.user.inquietudes==""){
      this.validinquietudes = false;
      }else{
      this.validinquietudes = true;
      }
    }


    consulta(){
      this.ssoporte.consultar().subscribe((result:any) =>{
        this.soporte = result;
        console.log(this.soporte);
      })
    }
    ingresar(){
     console.log(this.user);

     this.validar();
        if(this.validNombre==true && this.validCorreo==true && this.validinquietudes==true){

          this.ssoporte.insertar(this.user).subscribe((datos:any)=>{
          if (datos['resultado']=='OK') {
                    this.consulta();
          }
        });
        this.mostrar(0);
        this.limpiar();
        }
    }
    pregunta(){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Su petición fue envianda con exito',
        showConfirmButton: false,
        timer: 1500
      })
    }
    borrarusuario(id:any){
      this.ssoporte.eliminar(id).subscribe((datos:any)=>{
        if(datos['resultado']=='OK') {
          this.consulta();
        }
      });
    }
    cargardatos(datos:any, id:number) {
      console.log(datos);
        this.user.Nombre = datos.Nombre;
        this.user.Correo = datos.Correo;
        this.user.inquietudes = datos.inquietudes;
        this.iduser=id;
        this.mostrar(1);
        this.beditar = true;
    }
    editar(){

      this.validar();

      if(this.validNombre ==true && this.validCorreo ==true && this.validinquietudes==true){
        this.ssoporte.edit(this.user, this.iduser).subscribe((datos:any)=>{
          if(datos['resultado']=='OK'){
            this.consulta();
          }
        });
        this.mostrar(0);
      }
    }





}


