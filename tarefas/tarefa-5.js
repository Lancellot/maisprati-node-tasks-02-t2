//Leia um número N e exiba todos os números primos entre 2 e N usando laços
//aninhados (for dentro de for). Exiba também a quantidade total de primos
//encontrados.

export default function exibirPrimos(prompt) {

    const numero = parseInt(prompt("Digite um número N: "));

    if (numero < 2) {
        console.log("Por favor, digite um número inteiro maior ou igual a 2.");
        return;
    }

    let quantidadePrimos = 0;

    console.log(`Números primos entre 2 e ${numero}:`);

    for (let i = 2; i <= numero; i++) {
        let primo = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                primo = false;
                break;
            }
        }

        if (primo) {
            console.log(i);
            quantidadePrimos++;
        }
    }

    console.log(`Quantidade total de números primos encontrados: ${quantidadePrimos}\n`);
}