//Crie uma matriz 3×4 (3 alunos, 4 notas cada). Leia os valores via laços aninhados.
//Calcule e exiba a média de cada aluno, a média geral da turma e qual aluno teve
//o melhor desempenho.

export default function matrixNotas(prompt) {

    const alunos = 3;
    const notasPorAluno = 4;
    const matrizNotas = [];

    let somaTotal = 0;
    let melhorAluno = 0;
    let melhorMedia = 0;

    for (let i = 0; i < alunos; i++) {
        const notas = [];
        let somaAluno = 0;

        for (let j = 0; j < notasPorAluno; j++) {
            const nota = parseFloat(prompt(`Digite a nota ${j + 1} do aluno ${i + 1}: `));
            notas.push(nota);
            somaAluno += nota;
        }
        console.log("-----------------------------");

        matrizNotas.push(notas);
        somaTotal += somaAluno;

        const mediaAluno = somaAluno / notasPorAluno;
        if (mediaAluno > melhorMedia) {
            melhorMedia = mediaAluno;
            melhorAluno = i;
        }

    }

    const mediaGeral = somaTotal / (alunos * notasPorAluno);

    console.log("Médias dos alunos:");
    for (let i = 0; i < alunos; i++) {
        let soma = 0;

        for (const nota of matrizNotas[i]) {
        soma += nota;
        }

        const media = soma / notasPorAluno;
        console.log(`Aluno ${i + 1}: ${media.toFixed(2)}`);
    }

    console.log("-----------------------------");
    console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
    console.log(`Aluno com melhor desempenho: Aluno ${melhorAluno + 1} (Média: ${melhorMedia.toFixed(2)})`);
}