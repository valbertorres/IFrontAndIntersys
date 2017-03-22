import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers, RequestOptions,RequestMethod } from '@angular/http';
import { Usuario } from './cadastro.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class CadastroService{
 private cadastroUrl:string = 'http://186.202.61.22:8135/AUDSPED/AUDITORIA/TpVOcadcli/VOcadcli/audsped0001/1/500//0';
 private cadastroUrlPut:string = 'http://186.202.61.22:8135/AUDSPED/AUDITORIA/TpVOcadcli/VOcadcli';
 private fibase = 'https://intersys-c915f.firebaseio.com/data.json';
 private urlNewApp ='http://186.202.61.22:8135/datasnap/rest/service/cadcli_usuarios/audsped0001/1/500/0/0';

 private usuario :Usuario;
 private text : string[];

private headers : Headers = new Headers({

          'Content-Typ':'application/json',
          'Access-Control-Allow-Origin': '*'

      });
    constructor(private http:Http ){}
    
    getFindAll(){
 
      return this.http.get(this.urlNewApp)
      .map((res : Response) => res.json().result[0]);
    }

    getTitle(){
      return this.http.get(this.urlNewApp)
      .map((response :Response) => response.json())
    }

   /* getContato():Promise<Usuario[]>{
      return this.http.get(this.cadastroUrl)
      .toPromise()
      .then(response => response.json().result[0] as Usuario[])
      .catch()
    }*/

  /* getFindId(usuario2 : Usuario):Promise<Usuario>{
      return this.getContato()
      .then((usuario: Usuario[]) =>
        usuario.find(usuario=>usuario.ccnpj === usuario2.ccnpj))
    }*/

    create(fields : any){
        const body =JSON.stringify({fields});
        let bt : any ={"type":"VOcadcli.TVOcadcli","id":1,
"fields":{"ccnpj":"02\u002e299\u002e715\u002f0001-12","cdenom":"Valber","cender_bairro":"pedorso","cender_cep":"74305-110","cender_cidade":"GOIANIA","cender_codloc_ibge":"5208707","cender_complemento":"QDD","cender_log":"AVENIDA C 8","cender_num":"477","cender_uf":"GO","cid":30,"cie":"ISENTO","cobs":"","cpastadefault":"","cperiodo_dtfin":"28/02/2017 00:00:00","cperiodo_dtini":"01/02/2017 00:00:00","cqtdnf_mensal":10,"crazsoc":"LINDOMAR A","cserv_analise_balanco":"N","cserv_auditar_estoque":"S","cserv_comparativo_fiscalxcontabil":"N","cueve_computador":"LINDOMAR-PC","cueve_cpf_usuario":"469\u002e562\u002e121-53","cueve_dathor":"10/03/2017 18:05:42","numreg":0,"pdatabase":"audsped0001","qtdreg":0}
}
        console.log(bt);
         let headers = new Headers({ 'Content-Type': 'text/html' });

       return this.http.put(this.cadastroUrlPut, bt, {headers : headers})
       
    }

    post():Promise<any>{
           let bt : any ={"type":"VOcadcli.TVOcadcli","id":1,
"fields":{"ccnpj":"02\u002e299\u002e715\u002f0001-12","cdenom":"Valber2","cender_bairro":"pedorso","cender_cep":"74305-110","cender_cidade":"GOIANIA","cender_codloc_ibge":"5208707","cender_complemento":"QDD","cender_log":"AVENIDA C 8","cender_num":"477","cender_uf":"GO","cid":30,"cie":"ISENTO","cobs":"","cpastadefault":"","cperiodo_dtfin":"28/02/2017 00:00:00","cperiodo_dtini":"01/02/2017 00:00:00","cqtdnf_mensal":10,"crazsoc":"LINDOMAR A","cserv_analise_balanco":"N","cserv_auditar_estoque":"S","cserv_comparativo_fiscalxcontabil":"N","cueve_computador":"LINDOMAR-PC","cueve_cpf_usuario":"469\u002e562\u002e121-53","cueve_dathor":"10/03/2017 18:05:42","numreg":0,"pdatabase":"audsped0001","qtdreg":0}
}
      return this.http
      .post(this.cadastroUrlPut, bt,{headers : this.headers})
      .toPromise()
      .then((response : Response) => response.json().result as any)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
  // In a real world app, you might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}

}