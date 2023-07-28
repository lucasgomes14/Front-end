const multiplicar = (num1, num2) => {
	let resultado = 0;
	if(num1 >= 0 && num2 >= 0) {	
		for(let i = 0; i < num2; i++) {
			resultado += num1;
		}
	}
	return resultado;
}

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));