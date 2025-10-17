import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-apresentacao',
  imports: [RouterLink],
  templateUrl: './apresentacao.html',
  styleUrl: './apresentacao.scss'
})
export class Apresentacao {
  private router = inject(Router);

  NavegacaoRota() {
    this.router.navigate(['gerenciamento'])
  }
}
