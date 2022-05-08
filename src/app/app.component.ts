import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  
  constructor(){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyC6mve6u1SM43jWXO8sMfhRY8WAw5oK5G8",
      authDomain: "listado-personas-69ddc.firebaseapp.com",
    })
  }    
}
