import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface ProdutosInterface {
  nome: string;
  descricao: string;
  preco: number;
  estoque: number;
}

const ELEMENT_DATA: ProdutosInterface[] = [
  { nome: 'Notebook Dell', descricao: 'Core i5, 8GB RAM', preco: 3.500, estoque: 15 },
  { nome: 'Mouse Logitech', descricao: 'Wireless, ergonômico', preco: 150, estoque: 50 },
  { nome: 'Teclado Mecânico', descricao: 'RGB, switches blue', preco: 450, estoque: 30 },
];

@Component({
  selector: 'app-lista-de-produtos',
  imports: [MatTableModule],
  templateUrl: './lista-de-produtos.html',
  styleUrl: './lista-de-produtos.scss'
})
export class ListaDeProdutos {
  displayedColumns: string[] = ['nome', 'descricao', 'preco', 'estoque', 'acoes' ];
  dataSource = ELEMENT_DATA;
}
