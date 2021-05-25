import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import {HeaderComponent} from './components/layout/header/header.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import{ContenidoComponent} from './components/layout/contenido/contenido.component';
import { ContactoComponent } from './components/routes/contacto/contacto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmacionComponent } from './components/routes/contacto/confirmacion/confirmacion.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PersonasService } from './servicios/personas.service';
import { ConsumirapiComponent } from './components/routes/consumirapi/consumirapi.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ContenidoComponent,
    ContactoComponent,
    ConfirmacionComponent,
    ConsumirapiComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
