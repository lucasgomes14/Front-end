/*
 * 
 * 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e 
 * conte quantos números deste vetor estão no intervalo [10,20] 
 * (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
 * deles estão fora do intervalo, escrevendo estas informações
 * 
*/

function quantidadeDentroDoIntervalor(vetor) {
	let quantidades = [0, 0]; // [está no intervalo [10, 20], não está]
	
	for(let i = 0; i < vetor.length; i++) {
		if(vetor[i] >= 10 && vetor[i] <= 20)
			quantidades[0]++;
		else
			quantidades[1]++;
	}
	console.log(`${quantidades[0]} estão no intervalo, e ${quantidades[1]} não estão`);
}

quantidadeDentroDoIntervalor([ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21])