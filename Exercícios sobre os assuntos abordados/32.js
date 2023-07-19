/*
 * 
 * 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 * 
*/

function mediaDoVetor(vetor) {
	let quantidade = vetor.length;
	let count = 0;

	vetor.forEach(media => {
		count += media;
	});

	return count / quantidade;
}

console.log(mediaDoVetor([1, 2, 3, 4, 5]));