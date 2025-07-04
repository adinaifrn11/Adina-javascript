// 1. Mensagem de boas-vindas
console.log("Bem-vindo à nossa loja online! Estamos felizes em ter você aqui.");

// 2. Três tipos de variáveis
let precoProduto = 149.90;
let nomeProduto = "Fone Bluetooth";
let produtoDisponivel = true;

// 3. Três cálculos matemáticos
let precoOriginal = 200.00;
let desconto = precoOriginal * 0.10;
let precoComDesconto = precoOriginal - desconto;

let parcelas = 4;
let valorParcela = precoOriginal / parcelas;

let frete = 20.00;
let precoFinal = precoComDesconto + frete;

console.log("Preço com desconto: R$" + precoComDesconto.toFixed(2));
console.log("Valor de cada parcela: R$" + valorParcela.toFixed(2));
console.log("Preço final com frete: R$" + precoFinal.toFixed(2));

// 4. Mensagem personalizada com nome
let nomeCliente = "Fernanda";
console.log(`Bem-vinda à nossa loja online, ${nomeCliente}! Aproveite suas compras.`);

// 5. Carrinho de compras
let carrinho = ["Notebook", "Mouse", "Teclado", "Monitor"];
let itemRemovido = carrinho.splice(2, 1); // Remove o "Teclado"
console.log(`Você removeu o item '${itemRemovido}' do seu carrinho.`);

// 6. Condição de compra com carteira virtual
precoProduto = 350.00;
let carteiraVirtual = 300.00;

if (carteiraVirtual >= precoProduto) {
  console.log("Compra efetuada com sucesso!");
} else {
  console.log("Saldo insuficiente na carteira virtual.");
}

// 7. Controle de estoque com repetição
let estoqueMaximo = 5;
let quantidadeEstoque = 0;

while (quantidadeEstoque < estoqueMaximo) {
  quantidadeEstoque++;
  console.log(`Produto adicionado ao estoque. Total: ${quantidadeEstoque}`);
}

// 8. Duas funções reutilizáveis
function mostrarMensagemBoasVindas(nome) {
  console.log(`Olá, ${nome}! Bem-vindo à nossa loja online.`);
}

function calcularDesconto(preco, percentual) {
  return preco - (preco * (percentual / 100));
}

// Usando as funções
mostrarMensagemBoasVindas("adina");
let precoFinalComDesconto = calcularDesconto(150.00, 10);
console.log("Preço com desconto: R$" + precoFinalComDesconto.toFixed(2));

// 9. Dois objetos com características
let produto = {
  nome: "Smartphone",
  preco: 1999.99
};

let cliente = {
  nome: "lara",
  email: "laraae@email.com"
};

console.log(produto);
console.log(cliente);

// 10. Pagamento parcelado e com desconto
function pagamentoParcelado(preco, parcelas) {
  let valorParcela = preco / parcelas;
  console.log(`Compra parcelada em ${parcelas}x de R$${valorParcela.toFixed(2)}`);
  return valorParcela;
}

function pagamentoComDesconto(preco, percentualDesconto) {
  let precoFinal = preco - (preco * (percentualDesconto / 100));
  console.log(`Preço com ${percentualDesconto}% de desconto: R$${precoFinal.toFixed(2)}`);
  return precoFinal;
}

// Testando as funções de pagamento
pagamentoParcelado(600, 3);
pagamentoComDesconto(600, 15);