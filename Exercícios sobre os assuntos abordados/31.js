/*
 * 
 * 31) Escrever um algoritmo que percorre um vetor de inteiros, 
 * conta quantos números negativos há nesse vetor e imprime a quantidade no console.
 * 
*/

function numerosNegativos(vetor) {
	let count = 0;

	vetor.forEach(quantidade => {
		if(quantidade < 0)
			count++;
	});

	return count;
}

console.log(numerosNegativos([10, 5, -7, 3, -1, 3, -11, -20, 6, 9]));