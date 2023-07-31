const filtrarPorQuantidadeDeDigitos = (array, quantidadeDeDigitos) => {
	const newArray = array.map(m => m.toString()).filter(f => f.length == quantidadeDeDigitos).map(m => parseInt(m));

	return newArray;
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));