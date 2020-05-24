import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private backLink = environment.apiLink + "/user/";
  private headers = new HttpHeaders({
    'x-access-token': localStorage.getItem('jwt')
  });

  constructor(private http: HttpClient) { }

  async getUsuario() {
    let resposta = await this.http.get(this.backLink,{ observe: 'response',headers: this.headers}).toPromise();
    console.log(resposta);
    return resposta;
  }

  async postUsuario(Dados) {
    console.log("Inicializando o post");
    let resposta = await this.http.post(this.backLink + "", Dados, { observe: 'response' }).toPromise();
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }

  async login(Dados) {
    console.log("Inicializando o post");
    let resposta = await this.http.post(this.backLink + "login", Dados, { observe: 'response' }).toPromise();
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }

  async updateUsuario(Dados) {
    console.log("Inicializando o post");
    let resposta = await this.http.put(
      this.backLink + "",
      Dados,
      {
        observe: 'response',
        headers: this.headers
      }).toPromise();

    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }

  async deleteUsuario() {
    console.log("Inicializando o post");
    let resposta = await this.http.delete(
      this.backLink,
      {
        observe: 'response',
        headers: this.headers
      }).toPromise();

    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }

}
