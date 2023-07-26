const produtos = [
	{ nome: "Notebook", preco: 2499, fragil: true },
	{ nome: "iPad Pro", preco: 4399, fragil: true },
	{ nome: "Copo de Vidro", preco: 12.49, fragil: true },
	{ nome: "Copo de Plástico", preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
	return true;
}));

console.log(produtos.filter(function(p) {
	return false;
}));

console.log(produtos.filter(function(p) {
	return p.preco > 4000;
}));

const fragil = p => p.fragil == true;
const maiorQue500 = p => p.preco >= 500;

console.log(produtos.filter(fragil).filter(maiorQue500));