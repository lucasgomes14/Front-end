/*
 *
 *10) Crie uma função que verifica se um número inteiro passado como parâmetro é divisível
 * por 3 e retorne true ou false.
 * 
*/ 

function divisivelPorTres(numeroInteiro) {
	return numeroInteiro % 3 == 0;
}

console.log(divisivelPorTres(3));
console.log(divisivelPorTres(2));
console.log(divisivelPorTres(150));
