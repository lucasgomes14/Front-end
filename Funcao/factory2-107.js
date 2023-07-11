function criarProduto(nome, preco) {
	const desconto = 0.10;
	return {
		nome,
		preco,
		desconto: 0.1
	}
}

console.log(criarProduto("Notebook", 2199.49));
console.log(criarProduto("Ipad", 1199.99));