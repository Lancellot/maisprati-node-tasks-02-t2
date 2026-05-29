//Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média
//da turma, o nome do aluno com maior nota e o nome do aluno com menor nota.
//Não use funções prontas como Math.max().
import promptSync from 'prompt-sync';

const prompt = promptSync();

export default function turmaNotas() {

    const alunos = [];

    for (let i = 0; i < 5; i++) {
        const nome = prompt(`Digite o nome do aluno ${i + 1}: `);
        const nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}: `));
        console.log("-----------------------------");
        alunos.push({ nome, nota });
        
    }

    let somaNotas = 0;
    let maiorNota = 0;
    let menorNota = 10; 
    let nomeMaiorNota = "";
    let nomeMenorNota = "";

    for (let i = 0; i < alunos.length; i++) {
        somaNotas += alunos[i].nota;

        if (alunos[i].nota > maiorNota) {
            maiorNota = alunos[i].nota;
            nomeMaiorNota = alunos[i].nome;
        }

        if (alunos[i].nota < menorNota) {
            menorNota = alunos[i].nota;
            nomeMenorNota = alunos[i].nome;
        }
    }

    const mediaTurma = somaNotas / alunos.length;

    console.log(`\nMédia da turma: ${mediaTurma.toFixed(2)}`);
    console.log(`Aluno com maior nota: ${nomeMaiorNota} com a nota ${maiorNota}`);
    console.log(`Aluno com menor nota: ${nomeMenorNota} com a nota ${menorNota}\n`);
}