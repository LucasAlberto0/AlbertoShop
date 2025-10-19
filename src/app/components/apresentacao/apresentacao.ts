import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apresentacao',
  imports: [],
  templateUrl: './apresentacao.html',
  styleUrl: './apresentacao.scss'
})
export class Apresentacao {
  private _router = inject(Router);

  NavegacaoRota() {
    this._router.navigate(['gerenciamento'])
  }
}
