/*
 * 
 * 37) Escreva duas funções, uma para progressão aritmética e uma para progressão 
 * geométrica que recebam como parâmetros um número n (número de termo), 
 * a1 (o primeiro termo) e r (a razão) e escreva os n termos, bem como a soma dos elementos.
 * 
*/

function progressaoAritmetica(numero, a1, r) {
	let count = 0;

	for(let i = 0; i < numero; i++) {
		console.log(a1);
		count += a1;
		a1 += r;
	}
	console.log(`Soma: ${count}`);
}

function progressaoGeometrica(numero, a1, r) {
	let count = 0;

	for(let i = 0; i < numero; i++) {
		console.log(a1);
		count += a1;
		a1 *= r;
	}
	console.log(`Soma: ${count}`);
}


progressaoAritmetica(10, 12, 15);
console.log('----------------');
progressaoGeometrica(10, 5, 3);