/*
 * 
 * 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos 
 * e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado 
 * da multiplicação de cada elemento pelo número passado como parâmetro. 
 * A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.
 * 
*/

function multiplicar(vetor, numero) {
	let vetorFinal = [];

	for(let i = 0; i < vetor.length; i++) {
		vetorFinal.push(vetor[i] * numero);
	}

	return vetorFinal;
}

function multiplicarSeMaiorQue5(vetor, numero) {
	let vetorFinal = [];
	if(numero > 5) {
		for(let i = 0; i < vetor.length; i++) {
			vetorFinal.push(vetor[i] * numero);
		}
		return vetorFinal;
	} else 
		return "Número menor que 5";
}

let array = [1, 2, 3, 4, 5];

console.log(multiplicar(array, 3));
console.log(multiplicarSeMaiorQue5(array, 11));
console.log(multiplicarSeMaiorQue5(array, 1));