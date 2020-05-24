import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  sair(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
