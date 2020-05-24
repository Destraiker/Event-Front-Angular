import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../module/usuario/usuario.module';
import {UsuarioService} from '../../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {
  usuario: Usuario={} as Usuario;
  respObj: any;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(form){
    await this.usuarioService.login(form.value).then((resposta)=>{
      this.respObj=resposta.body;
      localStorage.setItem('jwt',this.respObj.data.jwt );
      this.router.navigate(['/usuario/']);
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
