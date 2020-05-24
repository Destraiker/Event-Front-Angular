import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../module/usuario/usuario.module';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario={} as Usuario;
  aux: any;

  constructor(private usuarioService: UsuarioService,private router: Router) { }

  async ngOnInit() {
    await this.usuarioService.getUsuario().then(
      (resposta)=>{
        this.aux=resposta.body;
        console.log(this.aux.data);
        console.log(this.aux.data.Nome)
        this.usuario=this.aux.data[0];
        console.log(this.usuario.Nome)
      }
    ).catch(
      (err)=>{
        console.log(err);
      }
    )
  }

  async onSubmit(form) {
    let resposta = await this.usuarioService.updateUsuario(form.value).then(
      (resposta)=>{
        console.log("Alterado")
      }
    ).catch(
      (err)=>{
        console.log(err);
      }
    )
  }

  async deletar() {
    await this.usuarioService.deleteUsuario().then(
      (resposta)=>{
        localStorage.clear();
        alert('deletado');
        this.router.navigate(['/']);
      }
    ).catch(
      (err)=>{
        console.log(err);
      }
    )
  }
}
