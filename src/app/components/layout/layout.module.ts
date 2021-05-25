import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ConfirmacionComponent } from '../routes/contacto/confirmacion/confirmacion.component';
import { LoginComponent } from '../auth/login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ContenidoComponent,
    ConfirmacionComponent,
    LoginComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
