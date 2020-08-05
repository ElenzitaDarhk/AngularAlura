System.register(["./View.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_js_1, MensagemView;
    return {
        setters: [
            function (View_js_1_1) {
                View_js_1 = View_js_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends View_js_1.View {
                template(mensagem) {
                    return `<p  class='alert alert-info'>${mensagem}</p>`;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
