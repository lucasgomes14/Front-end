const somarNumeros = array => {
	const resultado = array.reduce((acumulador, atual) => {
		return acumulador + atual;
	});
	return resultado;
} 

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));