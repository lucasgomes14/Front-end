const NOME = "Lucas"
const TEMPLATE = `  
	Olá
	${NOME}!`;//usa a crase "`" para fazer como se fosse um .format no python

console.log(TEMPLATE);

//pode também usar expressões
console.log(`1 + 1 = ${1 + 1}`);

//função
const UP = texto => texto.toUpperCase(); //toUpperCase() deixar todas as strings maiusculas

console.log(`Ei... ${UP("cuidado")}!`);