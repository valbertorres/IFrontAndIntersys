import { NgModule } from '@angular/core';

import { CadastroUsuarioComponent } from './cadastro-usuario.component'; 
import { CadastroRoutinModule } from './cadastro-routing.module';
import { LoginComponent } from './../login/login.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FocusDirective } from './focus.directive';

import { DataDirective } from '../directive/data.directive';





@NgModule({
    imports: [
        CadastroRoutinModule,
        CommonModule,
        FormsModule
    ],
     declarations:[
         CadastroUsuarioComponent,
         LoginComponent,
         FocusDirective,
         DataDirective
         ],
     exports:[
         CadastroUsuarioComponent,
         LoginComponent
     ]
})
export class Cadastromodule{

}