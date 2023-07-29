const funcaoDaSorte = num => {
	const valorSorteado = Math.floor(Math.random() * (10) + 1);
	return num === valorSorteado ? 
	`Parabéns! O número sorteado for o ${valorSorteado}` :
	`Que pena! O número sorteado for o ${valorSorteado}`;
}

console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(3));
console.log(funcaoDaSorte(1));