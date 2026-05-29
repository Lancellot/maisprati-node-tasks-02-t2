//Leia uma palavra, armazene seus caracteres em um array e, percorrendo-o de
//trás para frente com um laço for, monte a palavra invertida. Exiba a palavra
//original, a invertida e informe se ela é um palíndromo.
import promptSync from 'prompt-sync';

const prompt = promptSync();

export default function ehPalindromo() {

    const palavra = prompt("Digite uma palavra: ");
    const caracteres = palavra.split("");
    let palavraInvertida = "";
    
    for (let i = caracteres.length - 1; i >= 0; i--) {
        palavraInvertida += caracteres[i];
    }

    console.log(`Palavra original: ${palavra}`);
    console.log(`Palavra invertida: ${palavraInvertida}`);
    console.log("-----------------------------");

    if (palavra === palavraInvertida) {
        console.log("A palavra é um palíndromo.");
    } else {
        console.log("A palavra não é um palíndromo.");
    }
}