const removerPropriedade = (objeto, atributoParaDeletar) => {
	const newObject = Object.assign({}, objeto);
	delete newObject[atributoParaDeletar];

	return newObject;
}

const obj = {
	a: 1, 
	b: 2
}
console.log(removerPropriedade({ a: 1, b: 2 }, "a"));
console.log(removerPropriedade({ id: 20, nome: "caneta", descricao: "Não preenchido" }, "descricao"));