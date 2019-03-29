import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';

@Injectable()
export class MutantesService {

  mutantes:any[] = [];

  // constructor( private http:Http ) {
  constructor( ) {  
    console.log("Servicio de Mutantes listo para usar.");
    this.cargar_mutantes();
  }

  cargar_mutantes() {
    this.http.get("assets/data/mutantes.json")
             .subscribe( respuesta => {
               let data = respuesta.json();
               console.log(data);
             })
  }

}
