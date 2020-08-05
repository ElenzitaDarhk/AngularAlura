import { NegociacaoController } from './controllers/NegociacaoController.js'

const negociacaoController = new NegociacaoController();

$(".form").submit(negociacaoController.adicionar.bind(negociacaoController));
$("#btn-importar").click(negociacaoController.importarDados.bind(negociacaoController));