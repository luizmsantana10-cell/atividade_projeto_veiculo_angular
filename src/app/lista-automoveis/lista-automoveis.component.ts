import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './item';

@Component({
  selector: 'app-lista-automoveis',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista-automoveis.component.html',
  styleUrl: './lista-automoveis.component.css'
})
export class ListaAutomoveisComponent {
  descricaoCarro: string = '';
  valorCarro: number = 0;

  // Listas de controle
  listaItens: Item[] = [];
  listaConsertados: Item[] = []; 

  addItem() {
    if (!this.descricaoCarro.trim()) return;

    // Gera o id considerando o total de itens já criados
    const proximoId = this.listaItens.length + this.listaConsertados.length + 1;

    const item = new Item(
      proximoId,
      this.descricaoCarro,
      this.valorCarro
    );

    this.listaItens.push(item);

    this.descricaoCarro = '';
    this.valorCarro = 0;
  }

  // Move o carro para a lista de consertados
  moverParaConsertados(item: Item) {
    this.listaItens = this.listaItens.filter(i => i.idProduto !== item.idProduto);
    item.statusSelecionado = false; // reseta a seleção
    this.listaConsertados.push(item);
  }

  // Permite devolver o carro para a lista principal caso precise
  voltarParaLista(item: Item) {
    this.listaConsertados = this.listaConsertados.filter(i => i.idProduto !== item.idProduto);
    this.listaItens.push(item);
  }

  limparTudo() {
    this.listaItens = [];
    this.listaConsertados = [];
    this.descricaoCarro = '';
    this.valorCarro = 0;
  }
}