import { Negociacao, Negociacoes, NegociacaoParcial } from '../models/index.js';

export class NegociacaoService {

    obterNegociacoes (handler: HandleFunction): Promise<void | Negociacao[]>{
        
        let url = "http://localhost:8080/dados";

        return fetch(url)
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) =>
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)))   
            .catch(err => console.log(err.message)); 
    }
}

export interface HandleFunction
{
    (res: Response): Response;
}