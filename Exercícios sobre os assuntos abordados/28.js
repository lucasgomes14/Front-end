/*
 * 
 * 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares
 * 
*/

function quantidadeDeParEImpar(vetor) {
	let imparPar = [0, 0]; // [impar, par]
	
	vetor.forEach(i => {
		if(i % 2 == 0)
			imparPar[1]++;
		else
			imparPar[0]++;
	});

	return `${imparPar[0]} impares, ${imparPar[1]} pares`;
}

console.log(quantidadeDeParEImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));