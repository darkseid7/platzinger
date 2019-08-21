import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//aquí se importan todas mis vistas o componentes a me dida que se van creando 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

//creo una constante que contendrá todas las redirecciones de la aplicación 
const appRoutes: Routes = [
  //creo una ruta vacía que será la que se muestre en caso de acceder a una ruta que no esxista
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'conversation', component: ConversationComponent},
  {path: 'profile', component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConversationComponent,
    ProfileComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //el RouterModule recibe como parámetro appRoutes que es dodne están mis rutas almacenadas
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  //aquí estoy cargando dos vistas al mismo tiempo
  // bootstrap: [LoginComponent, AppComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
