/*
 * 
 * 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos 
 * de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e 
 * vice versa e assim sucessivamente.
 * Faça a troca sem utilizar uma variável auxiliar.
 * 
*/

function trocarVetores(vetor1, vetor2) {
	let tamanho = vetor1.length;
	let i = 0;

	while(i < tamanho) {
		vetor1[i] += vetor2[i];
		vetor2[i] = vetor1[i] - vetor2[i];
		vetor1[i] -= vetor2[i];

		i++;
	}

	console.log(vetor1, vetor2);
}

let vetor1 = [1, 2, 3];
let vetor2 = [4, 5, 6];
trocarVetores(vetor1, vetor2);
