import { ListaDeProdutos } from './../../components/lista-de-produtos/lista-de-produtos';
import { Component, ViewChild } from '@angular/core';
import { HeaderGerenciadorDeProdutos } from "../../components/header-gerenciador-de-produtos/header-gerenciador-de-produtos";
import { TituloDaListaDeProdutos } from "../../components/titulo-da-lista-de-produtos/titulo-da-lista-de-produtos";
import { IProduto } from '../../interfaces/IProdutoInterface';

@Component({
  selector: 'app-gerenciamento-de-produtos',
  imports: [HeaderGerenciadorDeProdutos, TituloDaListaDeProdutos, ListaDeProdutos],
  templateUrl: './gerenciamento-de-produtos.html',
  styleUrl: './gerenciamento-de-produtos.scss'
})
export class GerenciamentoDeProdutos {
  @ViewChild('listaProdutos') listaDeProdutos!: ListaDeProdutos;

  atualizarTabela(produto: IProduto){
    this.listaDeProdutos.adicionarProdutoNaTabela(produto);
  }
}
