const segundoMaior = array => {
	const numeroMaior = Math.max(...array);
	const resultado = array.reduce((segundoMaior, atual) => {
		if(segundoMaior != numeroMaior && atual != numeroMaior)
			return segundoMaior > atual ? segundoMaior : atual;
		else if(segundoMaior == numeroMaior) return atual;
		else if(atual == numeroMaior) return segundoMaior;
	})
	return resultado;
	
}

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));