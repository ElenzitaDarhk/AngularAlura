import { MeuObjeto } from './MeuObjeto.js';

export class Negociacao implements MeuObjeto
{

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number)
    {}   
    
    get volume()
    {
        return this.quantidade * this.valor;
    }

    paraTexto()
    {
        console.log('------------Impressão--------------')
        console.log(
            `Data: ${this.data},
            Quantidade:  ${this.quantidade},
            Valor:  ${this.valor},
            Volume:  ${this.volume}`
        );
    }

    ehIgual(negocicao: Negociacao): boolean
    {
        return this.data.getUTCDate() == negocicao.data.getUTCDate() &&
            this.quantidade == negocicao.quantidade &&
            this.valor == negocicao.valor;
    }
}