/*
 * 
 * 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos 
 * de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, 
 * de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.
 * 
*/

function notas(vetor) {
	let conceito = [];

	for(let i = 0; i < vetor.length; i++) {
		if(vetor[i] < 5 && vetor[i] >= 0)
			conceito.push("D");
		else if(vetor[i] < 7)
			conceito.push("C");
		else if(vetor[i] < 9)
			conceito.push("B");
		else if(vetor[i] <= 10)
			conceito.push("A");
		else 
			conceito.push("Nota inválida");
	}
	return conceito;
}

console.log(notas([10, 13, 9, 8.2, 2.5, 7.7, 6.8]));