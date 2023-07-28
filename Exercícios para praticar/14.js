const objetoParaArray = obj => {
	

	return Object.entries(obj);
}

console.log(objetoParaArray({ nome: "Maria", proficao: "Desenvolvedora de software" }));
console.log(objetoParaArray({ codigo: 11111, preco: 12000 }));