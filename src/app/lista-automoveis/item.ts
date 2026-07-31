export class Item {

    idProduto?: number;
    descricaoCarro?: string;
    valorCarro?: number;
    statusSelecionado: boolean = false
    
    constructor(
        idProduto:number,
        descricaoCarro: string,
        valorCarro: number
    ) {
        this.idProduto = idProduto;
        this.descricaoCarro = this.descricaoCarro;
        this.valorCarro = valorCarro;
    }
}