import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {  

  nombreInput:string = '';
  apellidoInput:string = '';
  
  constructor(
    private loggingService:LoggingService,
    private personasService: PersonasService,
    private router: Router) {
      this.personasService.saludar.subscribe(
        (indice:number) => alert("El indice es: " + indice)
      );
    }
  
  ngOnInit() {

  }
  
  onGuardarPersona(){
    let persona1 = new Persona(
      this.nombreInput, this.apellidoInput
    );
    this.personasService.agregarPersona(persona1);
    this.router.navigate(['personas']);
  }
  

}
