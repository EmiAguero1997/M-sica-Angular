import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ConfirmacionComponent } from './contacto/confirmacion/confirmacion.component';
import { ConsumirapiComponent } from './consumirapi/consumirapi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    NosotrosComponent,
    ConfirmacionComponent,
    ConsumirapiComponent,
    FormsModule,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RoutesModule { }
