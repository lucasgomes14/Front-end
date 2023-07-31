const inverter = objeto => {
	const arrayDoObjeto = Object.entries(objeto).map(e => e.reverse());
	return Object.fromEntries(arrayDoObjeto);
}

console.log(inverter({ a: 1, b: 2, c: 3 }));