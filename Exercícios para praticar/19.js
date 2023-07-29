const calcularMedia = array => {
	const resultado = array.reduce((soma, atual) => {
		return soma + atual;
	}) / array.length;

	return resultado;
}

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));