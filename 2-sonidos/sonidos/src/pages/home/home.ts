import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ANIMALES }  from  "../../data/data.animales"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales:any[] = [];

  constructor() {
    this.animales = ANIMALES.slice(0);

  }

}
