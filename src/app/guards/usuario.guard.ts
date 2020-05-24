import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {TokenService} from '../service/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  constructor(private service: TokenService){}

  async canActivate(){
    if(localStorage.getItem('jwt')!==null){
      let resposta= await this.service.verificarToken();
      if(resposta.ok){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
  
}
