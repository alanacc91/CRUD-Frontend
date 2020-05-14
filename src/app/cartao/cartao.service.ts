import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from 'src/propriedadades/url.service';
import { Observable } from 'rxjs';
import { Cartao } from '../models/cartao';
@Injectable({
  providedIn: 'root'
})
export class CartaoService {
  private _url: string = '';
  constructor(
    public urlService: UrlService,
    private http: HttpClient
  ) {
    this._url = `${this.urlService.recuperarUrlPadrao()}/cartao`;
  }

  selecionarTodosPaginados(page: number, size: number): Observable<any> {
    return this.http.get(`${this._url}/paginados/${page}/${size}`);
  }

  selecionarTodos(): Observable<any> {
    return this.http.get(`${this._url}/todos`);
  }

  selecionarPorId(id: number): Observable<any> {
    return this.http.get(`${this._url}/id/${id}`);
  }

  selecionarPorNumero(numero: string): Observable<any> {
    return this.http.get(`${this._url}/numero/${numero}`);
  }

  salvar(cartao: Cartao): Observable<any> {
    return this.http.post(this._url, cartao);
  }

  atualizar(cartao: Cartao): Observable<any> {
    return this.http.put(this._url, cartao);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this._url}/${id}`);
  }

}
