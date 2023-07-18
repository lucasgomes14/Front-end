/*
 * 
 * 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior 
 * e menor valor dentro do vetor
 * 
*/

function maiorEMenor(vetor) {
	vetor.sort((a, b) => a < b ? 1 : -1);
	return `${vetor[0]} é o maior e ${vetor[vetor.length - 1]} é o menor`;
}

console.log(maiorEMenor([10, 5, 7, 3, 1, 3, 11, 20, 6, 9]));