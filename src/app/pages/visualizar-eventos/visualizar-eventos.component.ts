import { Component, OnInit } from '@angular/core';
import { Evento } from '../../module/eventos/eventos.module';
import { EventosService } from '../../service/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizar-eventos',
  templateUrl: './visualizar-eventos.component.html',
  styleUrls: ['./visualizar-eventos.component.css']
})
export class VisualizarEventosComponent implements OnInit {

  eventos: Evento[];
  respObj: any;

  constructor(private eventoService: EventosService, private router: Router) { }

  async ngOnInit() {
    await this.eventoService.getEvent().then((resposta) => {
      this.respObj = resposta.body;
      this.eventos = this.respObj.data;
    }).catch((err) => {
      console.log(err);
    });
  }
  detalhes(idEvento){
    this.router.navigate(['usuario/evento/'+idEvento]);
  }

}
