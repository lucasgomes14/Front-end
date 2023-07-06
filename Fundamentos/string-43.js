const ESCOLA = "Cod3r";

console.log(ESCOLA.charAt(4)); //qual caracter 
console.log(ESCOLA.charAt(5));

console.log(ESCOLA.charCodeAt(3)); //codigo unicode
console.log(ESCOLA.indexOf("r")); //qual a posição do char "r"

console.log(ESCOLA.substring(1)); //a partir da posição 1 
console.log(ESCOLA.substring(0, 3)); //a partir da posição 0 até a posição 3 excluindo a posição 3

console.log("Escola ".concat(ESCOLA).concat("!")); //concatenação
console.log("Escola " + ESCOLA + "!"); //concatenação

console.log(ESCOLA.replace(3, "e")); //substituir posição 3 pela a string "e"

console.log("Ana, Maria, Lucas".split(",")); //fatiar em array quando houver ","