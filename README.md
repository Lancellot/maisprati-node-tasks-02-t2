<div align="center">
  <img src="https://github.com/user-attachments/assets/548d0ee1-1add-4679-9ba6-4a44f794d8d2" width="336" height="74">
</div>

# LISTA DE TAREFAS 2 — T1/2026

---

## Exercício 1 — Tabuada Interativa

Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um laço `for`.

Em seguida, pergunte se ele deseja ver outra tabuada e repita o processo enquanto a resposta for `"sim"`.

---

## Exercício 2 — Quantidade de Dígitos

Leia um número inteiro positivo e, usando um laço `while`, calcule e exiba quantos dígitos ele possui.

**Regras:**

- O número `0` possui `1` dígito.
- Não utilize conversão para string.

---

## Exercício 3 — Sequência de Fibonacci

Peça ao usuário quantos termos da sequência de Fibonacci deseja visualizar e exiba-os usando um laço `for`.

**Exemplo:**

```
1, 1, 2, 3, 5, 8, 13...
```

---

## Exercício 4 — Sistema de Senha

Defina uma senha fixa no código.

Peça ao usuário que digite a senha e, utilizando um laço `do...while`, permita no máximo **3 tentativas**.

**Exiba:**

- Mensagem de sucesso caso a senha esteja correta.
- Mensagem informando que as tentativas foram esgotadas caso erre 3 vezes.

---

## Exercício 5 — Números Primos

Leia um número `N` e exiba todos os números primos entre `2` e `N` utilizando laços aninhados (`for` dentro de `for`).

**Ao final, exiba também:**

- A lista de números primos encontrados.
- A quantidade total de números primos.

---

## Exercício 6 — Notas da Turma

Crie arrays para armazenar nomes e notas de **5 alunos**.

Leia os dados utilizando laços de repetição e, ao final, exiba:

- A média da turma.
- O nome do aluno com maior nota.
- O nome do aluno com menor nota.

**Regras:**

- Não utilize funções prontas como `Math.max()` ou `Math.min()`.

---

## Exercício 7 — Carrinho de Compras

Simule um carrinho de compras.

Leia nomes e preços de produtos em um laço de repetição até o usuário digitar `"sair"`.

**Requisitos:**

- Armazenar os produtos em arrays.
- Exibir todos os itens cadastrados.
- Calcular o subtotal.
- Aplicar `10%` de desconto caso existam mais de 3 itens.
- Mostrar o valor total da compra.

---

## Exercício 8 — Palíndromo

Leia uma palavra e armazene seus caracteres em um array.

Percorra o array de trás para frente utilizando um laço `for` para montar a palavra invertida.

**Exiba:**

- Palavra original.
- Palavra invertida.
- Informe se a palavra é ou não um palíndromo.

**Exemplo:**

```
ovo → é um palíndromo.
```

---

## Exercício 9 — Jogo de Adivinhação

Sorteie um número entre `1` e `100` utilizando `Math.random()`.

Usando um laço `do...while`, peça para o usuário tentar adivinhar o número.

**A cada tentativa:**

- Informe se o número correto é maior ou menor.
- Registre as tentativas em um array.

**Ao acertar:**

- Exiba o histórico de tentativas.
- Informe quantas tentativas foram necessárias.

---

## Exercício 10 — Matriz de Notas

Crie uma matriz `3 × 4` representando:

- **3 alunos**
- **4 notas** para cada aluno

Leia os valores utilizando laços aninhados.

**Ao final, exiba:**

- A média de cada aluno.
- A média geral da turma.
- Qual aluno teve o melhor desempenho.