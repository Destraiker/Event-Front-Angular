import { Component, OnInit } from '@angular/core';
import { Endereco } from '../../module/endereco/endereco.module';
import { EnderecoService } from '../../service/endereco.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gerenciar-enderecos',
  templateUrl: './gerenciar-enderecos.component.html',
  styleUrls: ['./gerenciar-enderecos.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class GerenciarEnderecosComponent implements OnInit {
  enderecos: Endereco[];
  respObj: any;
  alterEndereco:Endereco={} as Endereco;

  constructor(private enderecoService: EnderecoService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  async ngOnInit() {
    await this.enderecoService.getAddress().then((resposta) => {
      this.respObj = resposta.body;
      this.enderecos = this.respObj.data;
    }).catch((err) => {
      console.log(err);
    });
  }
  open(content, Endereco) {
    this.alterEndereco=Endereco;
    this.modalService.open(content);
  }

  async onSubmit(form){
    form.value.idEndereco=this.alterEndereco.idEndereco;
    await this.enderecoService.updateAddress(form.value).then((resposta) => {
      alert("alterado")
      this.modalService.dismissAll();
    }).catch((err) => {
      console.log(err);
    });
  }
  async delete(){
    await this.enderecoService.deleteAddress(this.alterEndereco.idEndereco).then((resposta) => {
      alert("Deletado");
      this.modalService.dismissAll();
      this.ngOnInit();
    }).catch((err) => {
      console.log(err);
    });
  }
  close(){
    this.modalService.dismissAll();
  }

}
