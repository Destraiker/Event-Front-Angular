import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../../module/eventos/eventos.module';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../service/eventos.service';
import { Endereco } from '../../module/endereco/endereco.module';
import { EnderecoService } from '../../service/endereco.service';

@Component({
  selector: 'app-detalhes-eventos',
  templateUrl: './detalhes-eventos.component.html',
  styleUrls: ['./detalhes-eventos.component.css']
})
export class DetalhesEventosComponent implements OnInit {

  evento: Evento = {} as Evento;
  endereco: Endereco = {} as Endereco;
  respObj: any;

  constructor(private enderecoService: EnderecoService, private eventoService: EventosService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    const par = this.activatedRoute.snapshot.paramMap.get('idEvento');
    await this.eventoService.getByIdEvent(par).then(async (resposta) => {
      this.respObj = resposta.body;
      this.evento = this.respObj.data[0];
      await this.enderecoService.getByIdAddress(this.evento.Endereco_idEndereco).then((resposta) => {
        this.respObj = resposta.body;
        this.endereco = this.respObj.data[0];
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
  }

}
