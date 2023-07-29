const menorNumero = array => {
	const menor = array.reduce((oMenorNumero, atual) => {
		return oMenorNumero < atual ? oMenorNumero : atual;
	});
	return menor;
}

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));