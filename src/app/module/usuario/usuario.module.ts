import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }

export interface Usuario{
  idUsuario: number, 
  Nome: string, 
  Telefone: string, 
  Email: string, 
  Data_nascimento: string, 
  Senha: string
}