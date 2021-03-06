import { Component } from '@angular/core';
import { ANIMALES } from "../../data/data.animales";
import { Animal } from "../../interfaces/animal.interface";

// import { Refresher } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animales:Animal[] = [];
  audio = new Audio();
  audioTiempo: any;

  constructor() {
    this.animales = ANIMALES;

  }

   reproducir( animal:Animal) {
     this.pausar_audio(animal);
     // pausar el animal que se está reproduciendo
     if (animal.reproduciendo) {
       animal.reproduciendo = false;
       return;
     }

     console.log(animal);

     this.audio.src = animal.audio;

     this.audio.load();
     this.audio.play();

     animal.reproduciendo = true;

     this.audioTiempo = setTimeout(() => animal.reproduciendo = false, animal.duracion*1000);

   }

   private pausar_audio( animalSel:Animal ) {
     clearTimeout(this.audioTiempo);

     this.audio.pause();
     this.audio.currentTime = 0;

     for (let animal of this.animales){
       if (animal.nombre != animalSel.nombre) {
         animal.reproduciendo = false;
       }
     }

   }

   borrar_animal(index:number) {
     this.animales.splice(index, 1);
   }

   ionRefresh(event) {
      console.log("Inicio del refresh");
      setTimeout(() => {
        console.log('Ha terminado el refresh');
        this.animales = ANIMALES.slice(0);
        console.log(ANIMALES.slice(0));
        // refresher.target.complete();
        event.target.complete();
      }, 1500);
    }

}
