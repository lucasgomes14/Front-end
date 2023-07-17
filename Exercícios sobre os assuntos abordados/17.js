/*
 *
 * 17) Um funcionário irá receber um aumento de acordo com o seu plano de
 * trabalho, de acordo com a tabela abaixo:
 * Plano Aumento
 * A 10%
 * B 15%
 * C 20%
 * Faça uma função que leia o plano de trabalho e o salário atual de um funcionário 
 * e calcula e imprime o seu novo salário. 
 * Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 * 
*/ 

function aumentoDeSalario(plano, salarioAtual) {
	switch(plano) {
		case "A":
			return `Seu salário vai de ${salarioAtual} para ${salarioAtual * 1.1}`;
		case "B":
			return `Seu salário vai de ${salarioAtual} para ${salarioAtual * 1.15}`;
		case "C":
			return `Seu salário vai de ${salarioAtual} para ${salarioAtual * 1.2}`;
		default:
			return "Plano inválido.";
	}
}

console.log(aumentoDeSalario("A", 1000));
console.log(aumentoDeSalario("B", 1000));
console.log(aumentoDeSalario("C", 1000));
console.log(aumentoDeSalario("D", 1000));
