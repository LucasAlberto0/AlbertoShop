import { Component } from '@angular/core';
import { HeaderGerenciadorDeProdutos } from "../../components/header-gerenciador-de-produtos/header-gerenciador-de-produtos";
import { TituloDaListaDeProdutos } from "../../components/titulo-da-lista-de-produtos/titulo-da-lista-de-produtos";
import { ListaDeProdutos } from "../../components/lista-de-produtos/lista-de-produtos";

@Component({
  selector: 'app-gerenciamento-de-produtos',
  imports: [HeaderGerenciadorDeProdutos, TituloDaListaDeProdutos, ListaDeProdutos],
  templateUrl: './gerenciamento-de-produtos.html',
  styleUrl: './gerenciamento-de-produtos.scss'
})
export class GerenciamentoDeProdutos {

}
