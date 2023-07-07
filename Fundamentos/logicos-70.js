function compras(trabalho1, trabalho2) {
	const comprarSorvete = trabalho1 || trabalho2;
	const comprarTv50 = trabalho1 && trabalho2;
	// const comprarTv32 = !!(trabalho1 ^ trabalho2); //^xor
	const comprarTV32 = trabalho1 != trabalho2;
	const manterSaudavel = !comprarSorvete;
	
	return {comprarSorvete, comprarTv50, comprarTV32, manterSaudavel}; //chave/valor com os mesmo nomes
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));