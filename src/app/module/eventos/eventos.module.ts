import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EventosModule { }

export interface Evento {
  idEvento: number,
  Endereco_idEndereco: number,
  Usuario_idUsuario: number,
  Nome: string,
  Decricao: string,
  DataInicio: string,
  HoraInicio: string,
  HoraFinal: string,
  Vagas: number
}