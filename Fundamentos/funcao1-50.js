//Função sem retorno
function imprimirSoma(a, b) {
	console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 4, 6, 7, 8);
imprimirSoma();

// Função com retorno
function soma (a, b = 1) { // valor padrão b = 1, caso não passe nenhum valor na chamada da função
	return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());