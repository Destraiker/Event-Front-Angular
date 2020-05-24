import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private backLink = environment.apiLink + "/user/address/";
  private headers = new HttpHeaders({
    'x-access-token': localStorage.getItem('jwt')
  });

  constructor(private http: HttpClient) { }

  async getAddress() {
    let resposta = await this.http.get(this.backLink, { observe: 'response', headers: this.headers }).toPromise();
    console.log(resposta);
    return resposta;
  }
  async getByIdAddress(idEndereco) {
    let resposta = await this.http.get(this.backLink + idEndereco, { observe: 'response', headers: this.headers }).toPromise();
    console.log(resposta);
    return resposta;
  }

  async postAddress(Dados) {
    console.log("Inicializando o post");
    let resposta = await this.http.post(this.backLink + "", Dados, {
      observe: 'response',
      headers: this.headers
    }).toPromise();
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }

  async updateAddress(Dados) {
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

  async deleteAddress(idEndereco) {
    console.log("Inicializando o post");
    let resposta = await this.http.delete(
      this.backLink + idEndereco,
      {
        observe: 'response',
        headers: this.headers
      }).toPromise();

    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }
}
