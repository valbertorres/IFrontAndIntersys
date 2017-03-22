import { Component,OnInit } from '@angular/core';

import { CadastroService } from './cadastro.service';
import { Observable }       from 'rxjs/Observable';
import { Location } from '@angular/common';

import { Response } from '@angular/http';

import { Usuario } from './cadastro.model'




@Component({
    moduleId: module.id,
    selector : 'cadastro-usuario',
    templateUrl : 'cadastro-usuario.component.html',
    styleUrls :[
        'cadastro.css'
    ]
})
export class CadastroUsuarioComponent implements OnInit{
   
   usuario : Usuario[]=[];
   cadastro : Usuario[]=[];
   
    
        constructor(
            private cadastroService : CadastroService,
            private location : Location
        ){} 

        ngOnInit(){
            this.getCadastro();
        }

            getCadastro(){
                this.cadastroService.getFindAll()
                .subscribe(
                    data => {
                        const myAray =[];
                        for(let key in data){
                            myAray.push(data[key]);
                        }
                        this.cadastro = myAray;
                        console.log(this.cadastro);
                    }
                )
            }

            getFibase():void{
                this.cadastroService.getTitle()
                .subscribe(
                    (data : any) => console.log(data)
                )
            }

           /* getTeste(){
                return this.cadastroService.getContato()
                .then((usuario : Usuario[])=>{
                    const array = [];
                    for(let key in usuario){
                        array.push(usuario[key]);
                    }
                    this.usuario = array
                })
            }*/

           /* bustaId(usuario : Usuario):void{
                this.cadastroService.getFindId(usuario)
                .then((cadastro :Usuario)=>{
                    console.log(cadastro)
                })
            }*/

            salvar(cnpj:string, razao:string){
                let promise;
              /*  this.cadastroService.create({cnpj:cnpj,razao:razao})
                .subscribe(
                    data => console.log(data,"salvou"),
                    error => console.error("erro")
                );*/
                
                promise = this.cadastroService.post();
                promise.then();
                console.log("salvou");
            }

            log(usuario){
                console.log(usuario);
            }

            
}



