System.register(["../models/index.js", "../views/index.js", "../helpers/decorators/index.js", "../services/index.js"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_js_1, index_js_2, index_js_3, index_js_4, timer, NegociacaoController, DiaSemana;
    return {
        setters: [
            function (index_js_1_1) {
                index_js_1 = index_js_1_1;
            },
            function (index_js_2_1) {
                index_js_2 = index_js_2_1;
            },
            function (index_js_3_1) {
                index_js_3 = index_js_3_1;
            },
            function (index_js_4_1) {
                index_js_4 = index_js_4_1;
            }
        ],
        execute: function () {
            timer = 0;
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_js_1.Negociacoes();
                    this._negociacoesView = new index_js_2.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_js_2.MensagemView('#mensagemView');
                    this._negociacaoService = new index_js_4.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                adicionar() {
                    let data = new Date(this._inputData.val().replace("/-/g", ","));
                    if (!this._ehDiaUtil(data)) {
                        this._mensagemView.update("Somente negociações em dias úteis, por favor!");
                        return;
                    }
                    const negociacao = new index_js_1.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adicionar(negociacao);
                    this._negociacoes.paraArray().forEach(negociacao => { });
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação incluída!");
                }
                importarDados(event) {
                    let url = "http://localhost:8080/dados";
                    function isOk(res) {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    }
                    this._negociacaoService
                        .obterNegociacoes(isOk)
                        .then(negociacoes => {
                        negociacoes.forEach(negociacao => this._negociacoes.adicionar(negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    });
                }
                _ehDiaUtil(data) {
                    console.log(data.getDay());
                    return data.getDay() != DiaSemana.Domingo && data.getDay() != DiaSemana.Sabado;
                }
            };
            __decorate([
                index_js_3.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_js_3.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_js_3.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_js_3.throttle()
            ], NegociacaoController.prototype, "adicionar", null);
            __decorate([
                index_js_3.throttle()
            ], NegociacaoController.prototype, "importarDados", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaSemana) {
                DiaSemana[DiaSemana["Segunda"] = 0] = "Segunda";
                DiaSemana[DiaSemana["Terca"] = 1] = "Terca";
                DiaSemana[DiaSemana["Quarta"] = 2] = "Quarta";
                DiaSemana[DiaSemana["Quinta"] = 3] = "Quinta";
                DiaSemana[DiaSemana["Sexta"] = 4] = "Sexta";
                DiaSemana[DiaSemana["Sabado"] = 5] = "Sabado";
                DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
            })(DiaSemana || (DiaSemana = {}));
        }
    };
});
