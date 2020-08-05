System.register(["./View.js", "./MensagemView.js", "./NegociacoesView.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (View_js_1_1) {
                exportStar_1(View_js_1_1);
            },
            function (MensagemView_js_1_1) {
                exportStar_1(MensagemView_js_1_1);
            },
            function (NegociacoesView_js_1_1) {
                exportStar_1(NegociacoesView_js_1_1);
            }
        ],
        execute: function () {
        }
    };
});
