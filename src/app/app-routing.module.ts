import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContenidoComponent } from './components/layout/contenido/contenido.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ContactoComponent } from './components/routes/contacto/contacto.component';
import { NosotrosComponent } from './components/routes/nosotros/nosotros.component';
import { ConsumirapiComponent} from './components/routes/consumirapi/consumirapi.component';
import { LoginComponent } from './components/auth/login/login.component'

const routes: Routes = [
  { path: 'home', component: LayoutComponent },
  {path:'contacto', component: ContactoComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {
    path: 'contenido', component: ContenidoComponent
  },
  {path:'consumirapi', component: ConsumirapiComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
