import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginUsuarioComponent } from './pages/login-usuario/login-usuario.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { InicioUsuarioComponent } from './pages/inicio-usuario/inicio-usuario.component';
import { MenuUsuarioComponent } from './pages/menu-usuario/menu-usuario.component';
import { CadastrarEventosComponent } from './pages/cadastrar-eventos/cadastrar-eventos.component';
import { VisualizarEventosComponent } from './pages/visualizar-eventos/visualizar-eventos.component';
import { DetalhesEventosComponent } from './pages/detalhes-eventos/detalhes-eventos.component';
import { GerenciarEventosComponent } from './pages/gerenciar-eventos/gerenciar-eventos.component';
import { GerenciarEnderecosComponent } from './pages/gerenciar-enderecos/gerenciar-enderecos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { Erro404Component } from './pages/erro404/erro404.component';

//Guardas
import { UsuarioGuard } from './guards/usuario.guard';

//Componentes não ultilizados
import { CadastrarEnderecosComponent } from './pages/cadastrar-enderecos/cadastrar-enderecos.component';


const routes: Routes = [
  { path: '', component: LoginUsuarioComponent },
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  {
    path: 'usuario',
    component: MenuUsuarioComponent,
    canActivate: [UsuarioGuard],
    children: [
      { path: '', component: InicioUsuarioComponent },
      { path: 'novoEvento', component: CadastrarEventosComponent },
      { path: 'eventos', component: VisualizarEventosComponent },
      { path: 'evento/:idEvento', component: DetalhesEventosComponent },
      { path: 'meusEventos', component: GerenciarEventosComponent },
      { path: 'meusEnderecos', component: GerenciarEnderecosComponent },
      { path: 'perfil', component: PerfilComponent },
    ],
  },
  { path: '**', component: Erro404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
