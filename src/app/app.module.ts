import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { NuevoavisoComponent } from './componentes/nuevoaviso/nuevoaviso.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { AboutComponent } from './componentes/about/about.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { LoginComponent } from './componentes/login/login.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from './servicios/auth.service';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NuevoavisoComponent,
    AdminComponent,
    AboutComponent,
    NotFoundComponent,
    DetallesComponent,
    EditarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
