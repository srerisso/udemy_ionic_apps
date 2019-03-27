import { Component } from '@angular/core';
import { NgModule } from '@angular/core'

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {
  nombre:string = "Logan";

  constructor() {}

  cambiar_nombre() {
    this.nombre = "Wolverine";
  }

}
