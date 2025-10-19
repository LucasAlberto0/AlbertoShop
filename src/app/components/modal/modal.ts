import { ProdutosService } from './../../services/produtos-service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _produtosService: ProdutosService, private dialogRef: MatDialogRef<Modal>) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      preco: [0, [Validators.required, Validators.min(0)]],
      estoque: [0, [Validators.required, Validators.min(0)]]
    });
  }
  
  ngOnInit(): void {
    this.salvar();
  }

  salvar() {
    if(this.form.valid) {
      this._produtosService.criarProduto(this.form.value).subscribe({
        next: (produtoCriado) => {
          this.dialogRef.close(produtoCriado);
        }
      })
    }
  }

  cancelar() {
    this.dialogRef.close(false);
  }
  
}
