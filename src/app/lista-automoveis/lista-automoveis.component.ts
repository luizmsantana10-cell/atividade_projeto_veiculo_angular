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

  listaItens: Item[] = [];
  listaConsertados: Item[] = [];

  addItem() {
    if (!this.descricaoCarro.trim()) return;

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

  // Mover para a lista de consertados ao marcar o checkbox
  moverParaConsertados(item: Item) {
    item.statusSelecionado = true;
    this.listaItens = this.listaItens.filter(i => i.idProduto !== item.idProduto);
    this.listaConsertados.push(item);
  }

  // Voltar para a lista principal ao desmarcar o checkbox
  voltarParaLista(item: Item) {
    item.statusSelecionado = false;
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