import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './estructura/header/header.component';
import { NavComponent } from './estructura/nav/nav.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { SoporteComponent } from './modulos/soporte/soporte.component';
import { MuseoAntioquiaComponent } from './modulos/museo-antioquia/museo-antioquia.component';
import { ServiciosComponent } from './modulos/servicios/servicios.component';
import { LoginComponent } from './modulos/login/login.component';
import { RegistrarComponent } from './modulos/registrar/registrar.component';
import { ConfiguracionComponent } from './modulos/configuracion/configuracion.component';
import { CerroElVoladorComponent } from './modulos/cerro-el-volador/cerro-el-volador.component';
import { CerroMonserrateComponent } from './modulos/cerro-monserrate/cerro-monserrate.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PrincipalComponent,
    DashboardComponent,
    SoporteComponent,
    MuseoAntioquiaComponent,
    ServiciosComponent,
    LoginComponent,
    RegistrarComponent,
    ConfiguracionComponent,
    CerroElVoladorComponent,
    CerroMonserrateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
