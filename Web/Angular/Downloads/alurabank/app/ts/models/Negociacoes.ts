import { Negociacao } from './Negociacao.js';
import { MeuObjeto } from './MeuObjeto.js';

export class Negociacoes implements MeuObjeto
{
    private _negociacoes: Array<Negociacao> = [];

    adicionar(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto()
    {
        console.log('------------Impressão--------------')
        console.log(JSON.stringify(this._negociacoes));
    }
    
    ehIgual(negocicoes: Negociacoes): boolean
    {
        return JSON.stringify(this._negociacoes) ==
            JSON.stringify(negocicoes);
    }
}