import { Component, OnInit, Input,Renderer,ElementRef } from '@angular/core';

import { CadastroService } from './cadastro.service';
import { Observable }       from 'rxjs/Observable';
import { Location } from '@angular/common';
import {EventEmitter} from "@angular/common/src/facade/async";

import { Response } from '@angular/http';

import { Usuario } from './cadastro.model'
import * as $ from 'jquery';

declare var jQuery : any;

@Component({
    moduleId: module.id,
    selector : 'cadastro-usuario',
    templateUrl : 'cadastro-usuario.component.html',
    styleUrls :[
        'cadastro.css'
    ]
})
export class CadastroUsuarioComponent implements OnInit{
   
    public myFocusEvent = new EventEmitter<boolean>();
    private dataPikaday : any;

    private inputFocused = true;
   usuario : Usuario[]=[];
   cadastro : Usuario[]=[];
   
    
        constructor(
            private cadastroService : CadastroService,
            private location : Location,
            private element : ElementRef

        ){} 

        ngOnInit(){
            this.getCadastro();
        }

    

        setMyFocusEvent(myFocusEvent:boolean){
            this.myFocusEvent.emit(myFocusEvent);
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

            log(tem){
                console.log(tem);
            }
            
}
$(function () {
               console.log("ativoud focus");
  
            });
