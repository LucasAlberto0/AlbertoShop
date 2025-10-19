import { ProdutosService } from './../../services/produtos-service';
import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IProduto } from '../../interfaces/IProdutoInterface';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal implements OnInit {
  form: FormGroup;
  titulo: string;
  ehEdicao: boolean;

  constructor(private _fb: FormBuilder, 
    private _produtosService: ProdutosService, 
    private _dialogRef: MatDialogRef<Modal>, 
    @Inject(MAT_DIALOG_DATA) public data: { produto?: IProduto }) {

    const produto = data?.produto;
    this.ehEdicao = !!produto;
    this.titulo = this.ehEdicao ? 'Editar Produto' : 'Novo Produto';

    this.form = this._fb.group({
      id: [produto?.id ?? null],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      preco: [0, [Validators.required, Validators.min(0)]],
      estoque: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    if (this.ehEdicao && this.data?.produto) {
      this.form.patchValue(this.data.produto);
    }
  }

  salvar() {
    if (this.form.invalid) return;

    const produtoForm: IProduto = this.form.getRawValue();

    if (this.ehEdicao && produtoForm.id != null) {
      this._produtosService.atualizarProduto(produtoForm.id, produtoForm).subscribe({
        next: (produtoAtualizado) => this._dialogRef.close(produtoAtualizado),
        error: (err) => console.error('Erro ao editar produto:', err)
      });
    } else {
      const { id, ...payload } = produtoForm as any;
      this._produtosService.criarProduto(payload).subscribe({
        next: (novoProduto) => this._dialogRef.close(novoProduto),
        error: (err) => console.error('Erro ao criar produto:', err)
      });
    }
  }

  cancelar() {
    this._dialogRef.close();
  }

}
