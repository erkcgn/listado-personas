import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  
  constructor(private loginService: LoginService){}

  ngOnInit(): void {
      firebase.default.initializeApp({
        apiKey: "AIzaSyC6mve6u1SM43jWXO8sMfhRY8WAw5oK5G8",
        authDomain: "listado-personas-69ddc.firebaseapp.com"
      });    
  } 

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }
}
