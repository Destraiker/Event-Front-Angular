import { Component, OnInit } from '@angular/core';
import { Endereco } from '../../module/endereco/endereco.module';
import {EnderecoService} from '../../service/endereco.service';

@Component({
  selector: 'app-cadastrar-enderecos',
  templateUrl: './cadastrar-enderecos.component.html',
  styleUrls: ['./cadastrar-enderecos.component.css']
})
export class CadastrarEnderecosComponent implements OnInit {
  endereco: Endereco={} as Endereco;
  respObj: any;
  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
  }
  
  async onSubmit(form){
    await this.enderecoService.postAddress(form.value).then((resposta)=>{
      this.respObj=resposta.body;
      alert('Cadastrado');
    }).catch((err)=>{
      this.respObj=err.body;
      this.respObj.forEach(element => {
        if(element.message!==undefined){
          console.log('Mensagem: '+element.message);
        }else{
          console.log("Element: "+element);
        }
      });
    })
  }

}
