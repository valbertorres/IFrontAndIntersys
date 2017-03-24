import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cadastromodule } from './cadastroUsuario/cadastro.module';

import 'pikaday/css/pikaday.css';
import 'moment/moment.js';

import { CadastroService } from './cadastroUsuario/cadastro.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    Cadastromodule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [CadastroService],
  bootstrap: [AppComponent],
  exports : [
    FormsModule
  ]
})
export class AppModule { }
