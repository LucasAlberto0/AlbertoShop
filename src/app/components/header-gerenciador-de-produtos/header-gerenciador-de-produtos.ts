import { Component, inject } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header-gerenciador-de-produtos',
  imports: [],
  templateUrl: './header-gerenciador-de-produtos.html',
  styleUrl: './header-gerenciador-de-produtos.scss'
})
export class HeaderGerenciadorDeProdutos {
  private _router = inject(Router);

  Logout(){
    this._router.navigate(['']);
  }
}
