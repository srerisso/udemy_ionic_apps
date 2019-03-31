import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MutantesService {

  mutantes:any[] = [];

  // constructor( private http:Http ) {
  constructor( private http:HttpClient ) {
    console.log("Servicio de Mutantes listo para usar.");
    this.cargar_mutantes();
  }

  cargar_mutantes() {
    this.http.get("assets/data/mutantes.json")
             .subscribe( respuesta => {
               console.log(respuesta);
               this.mutantes = respuesta.mutantes;
             })
  }

}
