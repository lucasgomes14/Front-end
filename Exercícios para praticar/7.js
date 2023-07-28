const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
	let aux = minimo;

	if(minimo > maximo) {
		minimo = maximo;
		maximo = aux;
	}
	return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo;
}

console.log(estaEntre(99, 100, 50));
