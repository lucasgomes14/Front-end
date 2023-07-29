const removerVogais = string => {
	return string.replace(/[aeiou]/ig, "");
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))