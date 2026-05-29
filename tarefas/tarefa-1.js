//Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um
//laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto
//a resposta for "sim".

export default function exibirTabuada(prompt) {

    let verificador = true;

    do{
        const numero = parseInt(prompt("Digite um número para ver sua tabuada: "));

        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }

        const resposta = prompt("Deseja ver outra tabuada? (sim/não): ");
        verificador = resposta.toLowerCase() === "sim";

    } while (verificador);

}