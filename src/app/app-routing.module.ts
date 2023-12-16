import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, CanActivateFn } from '@angular/router';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { SoporteComponent } from './modulos/soporte/soporte.component';
import { MuseoAntioquiaComponent } from './modulos/museo-antioquia/museo-antioquia.component';
import { ServiciosComponent } from './modulos/servicios/servicios.component';
import { LoginComponent } from './modulos/login/login.component';
import { ValidaruserGuard } from './guards/validaruser.guard';
import { RegistrarComponent } from './modulos/registrar/registrar.component';
import { ConfiguracionComponent } from './modulos/configuracion/configuracion.component';
import { CerroElVoladorComponent } from './modulos/cerro-el-volador/cerro-el-volador.component';
import { CerroMonserrateComponent } from './modulos/cerro-monserrate/cerro-monserrate.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
    canActivate: [ValidaruserGuard],
     children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'soporte', component: SoporteComponent},
        {path: 'museo-antioquia', component: MuseoAntioquiaComponent},
        {path: 'servicios', component: ServiciosComponent},
        {path: 'cerro-el-volador', component: CerroElVoladorComponent},
        {path: 'cerro-monserrate', component: CerroMonserrateComponent},
        {path: 'configuracion', component: ConfiguracionComponent},



        {path: '', redirectTo: '/dashboard', pathMatch:'full'},

    ]
  },
    {path: 'registrar', component: RegistrarComponent},
    {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
