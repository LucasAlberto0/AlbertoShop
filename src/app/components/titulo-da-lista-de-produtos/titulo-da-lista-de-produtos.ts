import { IProduto } from './../../interfaces/IProdutoInterface';
import { Component, EventEmitter, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-titulo-da-lista-de-produtos',
  imports: [],
  templateUrl: './titulo-da-lista-de-produtos.html',
  styleUrl: './titulo-da-lista-de-produtos.scss'
})
export class TituloDaListaDeProdutos {
  @Output() produtoCadastrado = new EventEmitter<IProduto>();

  constructor(private _dialog: MatDialog, ) {}


  abrirModal() {
    const dialogRef = this._dialog.open(Modal, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe((produtoCriado: IProduto) => {
      if (produtoCriado) {
        this.produtoCadastrado.emit(produtoCriado);
      }
    })
  }
}
