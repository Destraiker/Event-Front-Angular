import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private backLink = environment.apiLink + "/event/";
  private headers = new HttpHeaders({
    'x-access-token': localStorage.getItem('jwt')
  });
  constructor(private http: HttpClient) { }

  async getEvent() {
    let resposta = await this.http.get(this.backLink,{ observe: 'response', headers: this.headers }).toPromise();
    console.log(resposta);
    return resposta;
  }
  async getByIdEvent(idEvento) {
    let resposta = await this.http.get(this.backLink + idEvento, { observe: 'response', headers: this.headers }).toPromise();
    console.log(resposta);
    return resposta;
  }

  async postEvent(Dados) {
    console.log("Inicializando o post");
    let resposta = await this.http.post(this.backLink + "", Dados, {
      observe: 'response',
      headers: this.headers
    }).toPromise();
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }

  async updateEvent(Dados) {
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

  async deleteEvent(idEvento) {
    console.log("Inicializando o post");
    let resposta = await this.http.delete(
      this.backLink + idEvento,
      {
        observe: 'response',
        headers: this.headers
      }).toPromise();

    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }
}
