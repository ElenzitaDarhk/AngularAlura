import { Negociacao } from './Negociacao';

export class Negociacoes {
    private _negociacoes: Array<Negociacao> = [];

    adicionar(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}