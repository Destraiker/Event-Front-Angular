import { Component, OnInit } from '@angular/core';
import { Evento } from '../../module/eventos/eventos.module';
import { EventosService } from '../../service/eventos.service';
import { Endereco } from '../../module/endereco/endereco.module';
import { EnderecoService } from '../../service/endereco.service';

@Component({
  selector: 'app-cadastrar-eventos',
  templateUrl: './cadastrar-eventos.component.html',
  styleUrls: ['./cadastrar-eventos.component.css']
})
export class CadastrarEventosComponent implements OnInit {
  evento: Evento = {} as Evento;
  enderecos: Endereco={} as Endereco;
  respObj: any;
  
  constructor(private eventoService: EventosService, private enderecoService: EnderecoService) { }

  async ngOnInit() {
    await this.enderecoService.getAddress().then((resposta) => {
      this.respObj=resposta.body;
      this.enderecos=this.respObj.data;
    }).catch((err) => {
      console.log(err);
    });
  }
  async onSubmit(form) {
    console.log(form.value);
    await this.eventoService.postEvent(form.value).then((resposta) => {
      alert("Cadastrado")
    }).catch((err) => {
      console.log(err);
    });
  }

}
