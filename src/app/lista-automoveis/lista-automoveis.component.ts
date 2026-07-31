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
  descricao_carro:string = '';
  valor_carro: number = 0;

  listaItens: Item[] = [];

  addItem() {
    if (!this.descricao_carro.trim())return;
    
    const item = new Item(
      this.listaItens.length + 1,
      this.descricao_carro,
      this.valor_carro
    );

    this.listaItens.push(item);

    this.descricao_carro = '';
    this.valor_carro = 0;

  }

  limparTudo() {
    this.listaItens = [];
    this.descricao_carro = '';
    this.valor_carro = 0;
  }


}
