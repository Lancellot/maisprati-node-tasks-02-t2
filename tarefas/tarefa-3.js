//Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os
//usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13...

export default function exibirFibonacci(prompt) {

    const termos = parseInt(prompt("Quantos termos da sequência de Fibonacci deseja ver? "));

    let a = 1;
    let b = 1;

    console.log("Sequência de Fibonacci:");

    for (let i = 1; i <= termos; i++) {
        console.log(a);
        const temp = a;
        a = b;
        b = temp + b;
    }
    
}