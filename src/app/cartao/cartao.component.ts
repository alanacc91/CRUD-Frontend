import { Component, OnInit } from '@angular/core';
import { Cartao } from '../models/cartao';
import { CartaoService } from './cartao.service';
import { Cliente } from '../models/cliente';
import { Mensagem} from '../models/mensagem';
import $ from "jquery";
@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  listaDeCartoes: Array<Cartao>;
  cartao: Cartao;
  mensagens: Array<Mensagem>;

  constructor(
    private _cartaoService: CartaoService
  ) { }

  ngOnInit(): void {
    this.atualizarTela();
  }

  carregarTabela() {
    this._cartaoService.selecionarTodos().subscribe(listaDeCartoes => {
      this.listaDeCartoes = listaDeCartoes;
    }, () => {
      this.listaDeCartoes = [];
    })
  }

  atualizarTela() {
    this.cartao = new Cartao();
    this.cartao.cliente = new Cliente();
    this.carregarTabela();
  }

  selecionarCartao(cartao: Cartao) {
    this.cartao = {...cartao };
  }

  salvar() {
    this._cartaoService.salvar(this.cartao).subscribe(retorno => {
      console.log(retorno)
      this.atualizarTela();
      this.mensagens = retorno['mensagens']['mensagemDeNegocios'];
      $('#modalAlerta').show();
    }, retorno => {
      this.atualizarTela();
      this.mensagens = retorno['error']['mensagens']['mensagemDeNegocios'];
      $('#modalAlerta').show();
    })
  }

  atualizar() {
    this._cartaoService.atualizar(this.cartao).subscribe(retorno => {
      this.atualizarTela();
      this.mensagens = retorno['mensagens']['mensagemDeNegocios'];
      $('#modalAlerta').show();
    }, retorno => {
      this.atualizarTela();
      this.mensagens = retorno['error']['mensagens']['mensagemDeNegocios'];
      $('#modalAlerta').show();
    })
  }

  excluir() {
    this._cartaoService.deletar(this.cartao.id).subscribe(retorno => {
      this.atualizarTela();
      this.mensagens = retorno['mensagens']['mensagemDeNegocios'];
      $('#modalAlerta').show();
    }, retorno => {
      this.atualizarTela();
      this.mensagens = retorno['error']['mensagens']['mensagemDeNegocios'];
      $('#modalAlerta').show();
    })
  }

  fecharModal() {
    $('#modalAlerta').hide();
  }
}
