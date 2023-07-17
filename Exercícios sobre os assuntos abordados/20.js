/*
 *
 * 20) Crie um programa para informar quais e quantas notas são necessárias para entregar 
 * o mínimo de cédulas para um determinado valor informado pelo usuário considerando 
 * notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
 * Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, 
 * o programa deve informar apenas a seguinte informação 
 * (note que não foram exibidas informações sobre as demais cédulas): 1
 * nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 * 
*/

function quantidadeDeNotas(valor) {
	let cem = 0, ciquenta = 0, dez = 0, cinco = 0, um = 0;
	let mensagemDeRetorno = "";

	while(valor != 0) {
		if(valor >= 100) {
			cem++;
			valor -= 100;
		} else if(valor >= 50) {
			ciquenta++;
			valor -= 50;
		} else if(valor >= 10) {
			dez++;
			valor -= 10;
		} else if(valor >= 5) {
			cinco++;
			valor -= 5;
		} else if(valor >= 1) {
			um++;
			valor -= 1;
		}
	}
	
	if(cem > 0)
		mensagemDeRetorno += `${cem} nota(s) de R$ 100. `;
	if(ciquenta > 0)
		mensagemDeRetorno += `${ciquenta} nota(s) de R$ 50. `;
	if(dez > 0)
		mensagemDeRetorno += `${dez} nota(s) de R$ 10. `;
	if(cinco > 0)
		mensagemDeRetorno += `${cinco} nota(s) de R$ 5. `;
	if(um > 0)
		mensagemDeRetorno += `${um} nota(s) de R$ 1. `;

	return mensagemDeRetorno;
}

console.log(quantidadeDeNotas(153));