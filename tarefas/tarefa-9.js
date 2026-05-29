//Sorteie um número entre 1 e 100 com Math.random(). Usando um laço do...while,
//peça ao usuário para adivinhar; a cada tentativa, diga se o número é maior ou
//menor. Registre as tentativas em um array e, ao acertar, exiba o histórico e
//quantas tentativas foram necessárias.
import promptSync from 'prompt-sync';

const prompt = promptSync();

export default function sorteioNumero() {

    const numeroSorteado = Math.floor(Math.random() * 100) + 1;
    const tentativas = [];
    let acertou = false;
    let i = 1;

    do {
        const palpite = parseInt(prompt("Digite um número entre 1 e 100: "));
        tentativas.push(palpite);

        if (palpite === numeroSorteado) {
            acertou = true;
        } else if (palpite < numeroSorteado) {
            console.log("O número é maior.");
        } else {
            console.log("O número é menor.");
        }
    } while (!acertou);

    console.log("-----------------------------");
    console.log(`Parabéns! Você acertou o número ${numeroSorteado} em ${tentativas.length} tentativas.`);
    console.log("Histórico de tentativas:");
    
    for (const numero of tentativas) {
    console.log(`${i}. ${numero}`);
    i++;
    }

}