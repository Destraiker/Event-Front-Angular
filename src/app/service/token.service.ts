import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private backLink = environment.apiLink+"/token/";

  constructor(private http: HttpClient) { }

  async verificarToken() {
    console.log("Inicializando o post");
    var token={token: localStorage.getItem('jwt')};
    let resposta = await this.http.post(this.backLink + "", token, { observe: 'response' }).toPromise();
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }
}
