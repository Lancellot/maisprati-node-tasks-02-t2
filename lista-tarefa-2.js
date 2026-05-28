import  exibirTabuada from "./tarefas/tarefa-1.js";

import {promptContinuar, sairPrograma, opcaoInvalida} from "./utils/utilsTexto.js";
import exibirMenu from "./components/menu.js";
import promptSync from 'prompt-sync';

const prompt = promptSync();

const acoes ={
    '1': exibirTabuada,
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