const filtrarNumeros = array => {
	
	return array.filter(f => typeof f == "number");
}

console.log(filtrarNumeros(["javascript", 1, "3", "Web", 20]));
console.log(filtrarNumeros(["a", "c"]));