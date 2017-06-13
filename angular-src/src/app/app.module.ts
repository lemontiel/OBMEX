import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { RegistrarclienteComponent } from './components/registrarcliente/registrarcliente.component';

import {AuthService} from './services/auth.service';

const appRoutes: Routes =  [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'registrarcliente', component: RegistrarclienteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    InventoryComponent,
    DashboardComponent,
    HomeComponent,
    ClientesComponent,
    ClienteComponent,
    RegistrarclienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
