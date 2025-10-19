import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProdutosService } from '../../services/produtos-service';
import { IProduto } from '../../interfaces/IProdutoInterface';
@Component({
  selector: 'app-lista-de-produtos',
  imports: [MatTableModule],
  templateUrl: './lista-de-produtos.html',
  styleUrl: './lista-de-produtos.scss'
})
export class ListaDeProdutos implements OnInit {
  displayedColumns: string[] = ['nome', 'descricao', 'preco', 'estoque', 'acoes' ];
  dataSource = new MatTableDataSource<IProduto>([]);

  constructor(private _produtoService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this._produtoService.listarProdutos().subscribe({
      next: (produtos) => (this.dataSource.data = produtos),
      error: (err) => console.error(err)
    });
  }

  adicionarProdutoNaTabela(produto: IProduto) {
    this.dataSource.data = [...this.dataSource.data, produto]
  }

  deletarProduto(id: number) {
    this._produtoService.deletarProduto(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(p => p.id !== id);
    });
  }
}
