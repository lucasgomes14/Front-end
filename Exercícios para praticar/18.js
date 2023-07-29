const despesasTotais = array => {
	const getPreco = p => p.preco;
	const getSoma = (soma, atual) => soma + atual;
	const resultado = array.map(getPreco).reduce(getSoma);

	return resultado;
}

console.log(despesasTotais([{ nome: "Jornal online", categoria: "Informação", preco: 89.99}, 
{ nome: "Cinema", categoria: "Entretenimento", preco: 150.00}]));
console.log(despesasTotais([{ nome: "Galaxy S20", categoria: "Eletrônico", preco: 3599.99}, 
{ nome: "Macbook Pro", categoria: "Eletrônico", preco: 30999.90}]));