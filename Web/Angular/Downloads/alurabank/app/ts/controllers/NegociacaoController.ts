import { Negociacao, Negociacoes, NegociacaoParcial } from '../models/index.js';
import { NegociacoesView, MensagemView } from '../views/index.js';
import { domInject, throttle } from '../helpers/decorators/index.js';
import { NegociacaoService } from '../services/index.js';

let timer = 0;

export class NegociacaoController {

    //#region Propriedades
    @domInject('#data')
    private _inputData : JQuery;

    @domInject('#quantidade')
    private _inputQuantidade : JQuery;

    @domInject('#valor')
    private _inputValor : JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _negociacaoService = new NegociacaoService();
    //#endregion

    //#region Construtor
    constructor() {

        this._negociacoesView.update(this._negociacoes);
    }
    //#endregion

    @throttle()
    adicionar() {        

        let data = new Date(this._inputData.val().replace("/-/g", ","));

        if(!this._ehDiaUtil(data))
        {
            this._mensagemView.update("Somente negociações em dias úteis, por favor!");
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()), 
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adicionar(negociacao);
        this._negociacoes.paraArray().forEach( negociacao=>{});

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação incluída!");
    }

    @throttle()
    importarDados(event:Event)
    {
        let url = "http://localhost:8080/dados";

        function isOk(res: Response)
        {
            if(res.ok)
            {
                return res;
            }
            else
            {
                throw new Error(res.statusText);
            }
        }

        this._negociacaoService
            .obterNegociacoes(isOk)
            .then(negociacoes => {
                (negociacoes as Negociacao[]).forEach(negociacao => this._negociacoes.adicionar(negociacao));
                this._negociacoesView.update(this._negociacoes);
            });         
    }

    private _ehDiaUtil(data: Date): boolean
    {
        console.log(data.getDay());
        return data.getDay() != DiaSemana.Domingo && data.getDay() != DiaSemana.Sabado
    }
}

enum DiaSemana
{    
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
}