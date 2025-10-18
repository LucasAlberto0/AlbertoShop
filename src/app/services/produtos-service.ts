import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from '../interfaces/IProdutoInterface';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private apiUrl = 'http://localhost:3000/produtos'
  

  constructor(private _http: HttpClient ) {}

  listarProdutos(): Observable<IProduto[]> {
    return this._http.get<IProduto []>(this.apiUrl);
  }

  criarProduto(produto: IProduto): Observable<IProduto> {
    return this._http.post<IProduto>(this.apiUrl, produto);
  }

  deletarProduto(id: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}/${id}`);
  }
}
