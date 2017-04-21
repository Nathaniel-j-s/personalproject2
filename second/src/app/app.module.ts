import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { AddPropComponent } from './components/add-prop/add-prop.component';
import { EditPropComponent } from './components/edit-prop/edit-prop.component';
import { PropComponent } from './components/prop/prop.component';
import { RoomComponent } from './components/room/room.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { EditRoomComponent } from './components/edit-room/edit-room.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {PropAuthService} from './services/prop-auth.service';
import {RoomAuthService} from './services/room-auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {tokenNotExpired} from 'angular2-jwt';
import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'account', component: AccountComponent, canActivate:[AuthGuard]},
  {path:'add-prop', component: AddPropComponent, canActivate:[AuthGuard]},
  {path:'edit-prop/:id', component: EditPropComponent, canActivate:[AuthGuard]},
  {path:'prop/:id', component: PropComponent, canActivate:[AuthGuard]},
  {path:'add-room', component: AddRoomComponent, canActivate:[AuthGuard]},
  {path:'edit-room/:id', component: EditRoomComponent, canActivate:[AuthGuard]},
  {path:'room/:id', component: RoomComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AccountComponent,
    AddPropComponent,
    EditPropComponent,
    PropComponent,
    RoomComponent,
    AddRoomComponent,
    EditRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, PropAuthService, RoomAuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
