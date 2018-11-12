import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { NuevoavisoComponent } from './componentes/nuevoaviso/nuevoaviso.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { AdminComponent } from './componentes/admin/admin.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'nuevoempleo', component: NuevoavisoComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'detalles/:id', component: DetallesComponent},
  {path: 'editar/:id', component: EditarComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
