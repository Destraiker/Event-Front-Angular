import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EnderecoModule { }

export interface Endereco {
  idEndereco: number,
  Usuario_idUsuario: number,
  Estado: string,
  Cidade: string,
  Bairro: string,
  Rua: string,
  Numero: string,
  Complemento: string
}
