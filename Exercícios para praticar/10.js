const simboloMais = quantidade => {
	let mais = "";

	for(let i = 0; i < quantidade; i++) { mais += "+" }

	return mais;
};

console.log(simboloMais(2));
console.log(simboloMais(4));