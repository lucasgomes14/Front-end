const buscarPalavrasSemelhantes = (inicio, array) => {
	return array.filter(palavra => palavra.includes(inicio));
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]));
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]));