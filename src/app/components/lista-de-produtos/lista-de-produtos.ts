import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProdutosService } from '../../services/produtos-service';
import { IProduto } from '../../interfaces/IprodutoInterface';

@Component({
  selector: 'app-lista-de-produtos',
  imports: [MatTableModule],
  templateUrl: './lista-de-produtos.html',
  styleUrl: './lista-de-produtos.scss'
})
export class ListaDeProdutos implements OnInit {
  displayedColumns: string[] = ['nome', 'descricao', 'preco', 'estoque', 'acoes' ];
  dataSource: IProduto[] = [];

  constructor(private _produtoService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this._produtoService.listarProdutos().subscribe({
      next: (data) => (this.dataSource = data),
      error: (err) => console.error('Erro ao buscar produtos', err)
    });
  }

  deletarProduto(id: number) {
    this._produtoService.deletarProduto(id).subscribe(() => this.carregarProdutos());
  }
}
