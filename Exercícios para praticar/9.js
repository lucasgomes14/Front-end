const repetir = (repete, quantidade) => {
	let array = [];

	for(let i = 0; i < quantidade; i++) {
		array.push(repete);
	}

	return array;
}

console.log(repetir("código", 2));
console.log(repetir(7, 3));