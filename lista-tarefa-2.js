import  exibirTabuada from "./tarefas/tarefa-1.js";
import contarDigitos from "./tarefas/tarefa-2.js";
import exibirFibonacci from "./tarefas/tarefa-3.js";
import verificarSenha from "./tarefas/tarefa-4.js";
import exibirPrimos from "./tarefas/tarefa-5.js";
import turmaNotas from "./tarefas/tarefa-6.js";
import carrinhoCompras from "./tarefas/tarefa-7.js";
import ehPalindromo from "./tarefas/tarefa-8.js";
import sorteioNumero from "./tarefas/tarefa-9.js";

import {promptContinuar, sairPrograma, opcaoInvalida} from "./utils/utilsTexto.js";
import exibirMenu from "./components/menu.js";
import promptSync from 'prompt-sync';

const prompt = promptSync();

const acoes ={
    '1': exibirTabuada,
    '2': contarDigitos,
    '3': exibirFibonacci,
    '4': verificarSenha,
    '5': exibirPrimos,
    '6': turmaNotas,
    '7': carrinhoCompras,
    '8': ehPalindromo,
    '9': sorteioNumero
}

let verificador = true;

do {

    exibirMenu();

    const opcao = prompt("Escolha uma opção: ");

    if(opcao === "0") {
        sairPrograma();
        verificador = false;
    }else if (acoes[opcao]) {
        acoes[opcao]();
        promptContinuar();
    } else {
        opcaoInvalida();
        promptContinuar();
    }

} while (verificador);