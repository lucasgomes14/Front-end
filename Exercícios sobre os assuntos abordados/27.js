/*
 * 
 * 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento 
 * anuais de duas crianças e calcule se existe uma criança menor, 
 * caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. 
 * Utilize centímetros para as unidades de medida.
 * 
*/

function alturaDasCrianças(altura1, taxa1, altura2, taxa2) {
	if(altura1 == altura2) {
		if(taxa1 > taxa2)
			console.log("A criança 1 ultrapassará a criança 2 em 1 ano.");
		else if(taxa1 < taxa2)
			console.log("A criança 2 ultrapassará a criança 1 em 1 ano.");
		else
			console.log("As crianças tem igual altura e crescimento.");

	} else if(altura1 > altura2) {
		if(taxa1 >= taxa2)
			console.log("A criança menor não ultrapassará a maior.");
		else
			console.log(`A criança menor ultrapassará a maior em ${quantosAnosIraFicarMaior(altura1, taxa1, altura2, taxa2)} anos`);
		
	} else {
		if(taxa1 > taxa2)
			console.log(`A criança menor ultrapassará a maior em ${quantosAnosIraFicarMaior(altura2, taxa2, altura1, taxa1)} anos`);
		else 
			console.log("A criança menor não ultrapassará a maior.");
	}
	
}

function quantosAnosIraFicarMaior(altura1, taxa1, altura2, taxa2) {
	let anos = 0;

	while(altura2 < altura1) {
		altura2 += taxa2;
		altura1 += taxa1;
		anos++;
	}

	return anos;
}

alturaDasCrianças(160, 2, 170, 2);
alturaDasCrianças(160, 2, 170, 1);
alturaDasCrianças(160, 2, 170, 3);