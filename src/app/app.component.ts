import { Component, OnInit } from '@angular/core';
// import { initializeApp } from 'firebase/app';
import * as firebase from 'firebase/compat/app';
import { getDatabase } from "firebase/database"; // agregando esto carga y permite inspeccionar

const database = getDatabase();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  
  constructor(){}

  ngOnInit(): void {
      firebase.default.initializeApp({
        apiKey: "AIzaSyC6mve6u1SM43jWXO8sMfhRY8WAw5oK5G8",
        authDomain: "listado-personas-69ddc.firebaseapp.com"
      });

    // const firebaseConfig = {
    //   apiKey: "AIzaSyC6mve6u1SM43jWXO8sMfhRY8WAw5oK5G8",
    //   authDomain: "listado-personas-69ddc.firebaseapp.com",
    //   databaseURL: "https://listado-personas-69ddc-default-rtdb.firebaseio.com",
    //   projectId: "listado-personas-69ddc",
    //   storageBucket: "listado-personas-69ddc.appspot.com",
    //   messagingSenderId: "672854108183",
    //   appId: "1:672854108183:web:df5fe1541b6cf01684d452",
    //   measurementId: "G-0BSNKZ5WE8"
    // };
    // const app = initializeApp(firebaseConfig);
    
  }    
}
