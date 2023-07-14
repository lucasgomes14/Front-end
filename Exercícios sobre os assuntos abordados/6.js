/*
 *
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, 
 * taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação 
 * financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob 
 * o regime de juros compostos.
 * 
*/

function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
	return capitalInicial * taxaDeJuros * tempoDeAplicacao;
}

function jurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
	return capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao;
}

console.log(jurosSimples(5, 2, 3));
console.log(jurosComposto(5, 2, 3));