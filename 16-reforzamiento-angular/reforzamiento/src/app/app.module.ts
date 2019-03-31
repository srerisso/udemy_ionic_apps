import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VariablesComponent } from './components/variables/variables.component';

import { FormsModule } from '@angular/forms';
import { EstructuralesComponent } from './components/estructurales/estructurales.component';
import { HttpComponent } from './components/http/http.component';

import { MutantesService } from "./services/mutantes.service";

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VariablesComponent,
    EstructuralesComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MutantesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
