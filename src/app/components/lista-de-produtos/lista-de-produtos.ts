import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProdutosService } from '../../services/produtos-service';
import { IProduto } from '../../interfaces/IProdutoInterface';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../modal/modal';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-lista-de-produtos',
  imports: [MatTableModule, CurrencyPipe],
  templateUrl: './lista-de-produtos.html',
  styleUrl: './lista-de-produtos.scss'
})
export class ListaDeProdutos implements OnInit {
  displayedColumns: string[] = ['nome', 'descricao', 'preco', 'estoque', 'acoes' ];
  dataSource = new MatTableDataSource<IProduto>([]);

  constructor(private _produtoService: ProdutosService, private _dialog: MatDialog) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this._produtoService.listarProdutos().subscribe({
      next: (produtos) => (this.dataSource.data = produtos)
    });
  }

  adicionarProdutoNaTabela(produto: IProduto) {
    this.dataSource.data = [...this.dataSource.data, produto]
  }

  editarProduto(produto: IProduto) {
    const dialogRef = this._dialog.open(Modal, {
      width: '500px',
      data: {produto}
    });
    dialogRef.afterClosed().subscribe((produtoAtualizado) => {
      if(produtoAtualizado) {
        this.dataSource.data = this.dataSource.data.map(p => p.id === produtoAtualizado.id ? produtoAtualizado : p);
      }
    })
  }

  deletarProduto(id: number) {
    this._produtoService.deletarProduto(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(p => p.id !== id);
    });
  }
}
