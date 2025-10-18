import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apresentacao',
  imports: [],
  templateUrl: './apresentacao.html',
  styleUrl: './apresentacao.scss'
})
export class Apresentacao {
  private router = inject(Router);

  NavegacaoRota() {
    this.router.navigate(['gerenciamento'])
  }
}
