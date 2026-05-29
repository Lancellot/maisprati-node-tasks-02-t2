//Defina uma senha fixa no código. Peça ao usuário que a digite e, usando um laço
//do...while, permita no máximo 3 tentativas. Exiba se ele acertou ou se esgotou as
//tentativas.

export default function verificarSenha(prompt) {

    const senhaFixa = "t1";

    let tentativas = 0;
    let acertou = false;

    do {
        const senhaDigitada = prompt("Digite a senha: ");

        tentativas++;

        if (senhaDigitada === senhaFixa) {
            acertou = true;
            break;
        } else {
            console.log("Senha incorreta. Tente novamente.");
        }

    } while (tentativas < 3);

    if (acertou) {
        console.log("Senha correta.\n");
    } else {
        console.log("Acesso negado - Você esgotou as tentativas.\n");
    }
}
