/*
 * 
 * 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. 
 * Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, 
 * o segundo com strings e o terceiro com valores decimais.
 * Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para 
 * unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado 
 * deverão aparecer no console.
 * 
*/

function uniaoDeDoisConcat(args) {
	let concatenado = [];
	for(let i = 0; i < arguments.length; i++) {
		concatenado = concatenado.concat(arguments[i]);
	}
	return concatenado;
}

function uniaoDeTodos(vetorInteiro, vetorString, vetorDouble) {
	let vetorConcat = [];
	let vetorMais = [];

	vetorConcat = uniaoDeDoisConcat(vetorInteiro, vetorString);
	vetorConcat = vetorConcat.concat(uniaoDeDoisConcat(vetorDouble));

	vetorMais = uniaoDeDoisMais(vetorInteiro, vetorString);
	vetorMais += uniaoDeDoisMais(vetorDouble);


	return `Com concat = ${vetorConcat}\nCom "+" = ${vetorMais}`;
}

function uniaoDeDoisMais(args) {
	let concatenado = [];
	
	for(let i = 0; i < arguments.length; i++) {
		concatenado += arguments[i] + " ";
	}

	return concatenado;
}

let vetorInteiro = [1, 2, 3, 4];
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino'];
let vetorDouble = [1.1, 2.2, 3.3, 4.4];

console.log(uniaoDeTodos(vetorInteiro, vetorString, vetorDouble));