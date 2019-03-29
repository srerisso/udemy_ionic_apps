import { Component } from '@angular/core';

import { MutantesService } from "../../services/mutantes.service";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {

  // inyectamos servicio para compartir datos, métodos entre components
  constructor( private _ms:MutantesService ) { }

}
