//Leia um número inteiro positivo e, usando um laço while, calcule e exiba quantos
//dígitos ele possui. Trate o caso do número zero (que possui 1 dígito).
import promptSync from 'prompt-sync';

const prompt = promptSync();

export default function contarDigitos() {

    let numero = parseInt(prompt("Digite um número inteiro positivo: "));

    let contador = 0;

    if (numero === 0) {
        console.log("O número 0 possui 1 dígito.");
        return;
    }

    while (numero > 0) {
        numero = Math.floor(numero / 10);
        contador++;
    }

    console.log(`O número ${numero} possui ${contador} dígitos.\n`);
}