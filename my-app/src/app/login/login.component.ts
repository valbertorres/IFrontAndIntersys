import { Component, OnInit,Input} from '@angular/core';
import { CadastroUsuarioComponent } from './../cadastroUsuario/cadastro-usuario.component';
import { LoginModel } from './login.model';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls : [
        'login.css'
    ]
})
  

export class LoginComponent implements OnInit {
    @Input() change : string;

    private login : LoginModel[]=[];

    private cad : CadastroUsuarioComponent;
    constructor() { }

    ngOnInit() { }

    log(login){
        console.log(login)
    }

}

