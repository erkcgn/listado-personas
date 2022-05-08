import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient){}
    
    cargarPersonas(){
        return this.httpClient.get<Persona[]>('https://listado-personas-69ddc-default-rtdb.firebaseio.com/datos.json');
    }

    //Guardar personas
    guardarPersonas(personas: Persona[]){
        this.httpClient.put('https://listado-personas-69ddc-default-rtdb.firebaseio.com/datos.json', personas)
        .subscribe(
            response => console.log("resultado de guardar Personas" + response),
            error => console.log("Error al guardar Personas:" + error)
        );
    }

    modificarPersona(index:number, persona: Persona){
        let url: string;
        url = 'https://listado-personas-69ddc-default-rtdb.firebaseio.com/datos/' + index + '.json';
        this.httpClient.put(url, persona)
        .subscribe(
            response => console.log("resultado modificar Persona:" + response),
            error => console.log("Error en modificar Persona:" + error)
        )
    }
}