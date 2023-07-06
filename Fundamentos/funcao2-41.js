// Armazenando uma função em uma variavel
const IMPRIMIRSOMA = function (a, b) {
	console.log(a + b);
}

IMPRIMIRSOMA(2, 3);

// Armazenando uma função arrow em uma variavel
const SOMA = (a, b) => {
	return a + b;
}

console.log(SOMA(2, 3));

// retorno implicito
const SUBTRACAO = (a, b) => a - b;

console.log(SUBTRACAO(2, 3));

const IMPRIMIR2 = a => console.log(a);
IMPRIMIR2("Legal!!!!");