import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../module/usuario/usuario.module';
import {UsuarioService} from '../../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  usuario: Usuario={} as Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(form){
    let resposta =await this.usuarioService.postUsuario(form.value);
    if(resposta.ok){
      alert("Cadastrado com suscesso.");
      this.router.navigate(['/login/']);
    }else{
      alert("Erro!");
    }
  }

}
