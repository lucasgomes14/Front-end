const contarCaractere = (char, frase) => {
	let count = 0;

	for(let i in frase) {
		if(frase[i] === char) count++;
	}
	return count;
}


console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));