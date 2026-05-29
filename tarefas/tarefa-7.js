//Simule um carrinho de compras: leia nomes e preços de produtos em um laço até
//o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o
//subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a
//pagar.

export default function carrinhoCompras(prompt) {

    const produtos = [];
    const precos = [];

    let continuar = true;

    do {
        const nomeProduto = prompt("Digite o nome do produto (ou 'sair' para finalizar): ");
        if (nomeProduto === "sair") {
            continuar = false;
        } else {
            const precoProduto = parseFloat(prompt("Digite o preço do produto: "));
            produtos.push(nomeProduto);
            precos.push(precoProduto);
            console.log("-----------------------------");   
        }
    

    } while (continuar);

    console.log("\n===== CARRINHO DE COMPRAS =====");
    let subtotal = 0;
    for (let i = 0; i < produtos.length; i++) {
        console.log(`${produtos[i]} - R$ ${precos[i].toFixed(2)}`);
        subtotal += precos[i];
    }

    console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);

    if (produtos.length > 3) {
        const desconto = subtotal * 0.10;
        const total = subtotal - desconto;
        console.log(`Desconto de 10% aplicado: R$ ${desconto.toFixed(2)}`);
        console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
    } else {
        console.log(`Total a pagar: R$ ${subtotal.toFixed(2)}`);
    }
}