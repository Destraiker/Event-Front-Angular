import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUsuarioComponent } from './pages/login-usuario/login-usuario.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { InicioUsuarioComponent } from './pages/inicio-usuario/inicio-usuario.component';
import { MenuUsuarioComponent } from './pages/menu-usuario/menu-usuario.component';
import { CadastrarEventosComponent } from './pages/cadastrar-eventos/cadastrar-eventos.component';
import { VisualizarEventosComponent } from './pages/visualizar-eventos/visualizar-eventos.component';
import { DetalhesEventosComponent } from './pages/detalhes-eventos/detalhes-eventos.component';
import { GerenciarEventosComponent } from './pages/gerenciar-eventos/gerenciar-eventos.component';
import { GerenciarEnderecosComponent } from './pages/gerenciar-enderecos/gerenciar-enderecos.component';
import { CadastrarEnderecosComponent } from './pages/cadastrar-enderecos/cadastrar-enderecos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { Erro404Component } from './pages/erro404/erro404.component';

//HTTP
import { HttpClientModule } from '@angular/common/http';
//FORMS
import { FormsModule } from '@angular/forms';

//Guardas
import {UsuarioGuard} from './guards/usuario.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginUsuarioComponent,
    CadastroUsuarioComponent,
    InicioUsuarioComponent,
    MenuUsuarioComponent,
    CadastrarEventosComponent,
    VisualizarEventosComponent,
    DetalhesEventosComponent,
    GerenciarEventosComponent,
    GerenciarEnderecosComponent,
    CadastrarEnderecosComponent,
    PerfilComponent,
    Erro404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [UsuarioGuard,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
