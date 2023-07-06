let valor; // não inicializada
console.log(valor);

valor = null; // ausência de valor
console.log(valor);
// console.log(valor.toString()); // Erro!

const PRODUTO = {};
console.log(PRODUTO.preco);
console.log(PRODUTO);

PRODUTO.preco = 3.50;
console.log(PRODUTO);

PRODUTO.preco = undefined; // evitar atribuir undefined
console.log(!!PRODUTO.preco);
// delete PRODUTO.preco
console.log(PRODUTO);

PRODUTO.preco = null; // sem preço
console.log(!!PRODUTO.preco);
console.log(PRODUTO);