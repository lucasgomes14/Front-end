let isAtivo = false;

console.log(isAtivo);

isAtivo = true;

console.log(isAtivo);

isAtivo = 1;

console.log(!!isAtivo);

console.log("Os verdadeiros...");
console.log(!!3); //inteiros =! 0
console.log(!!-1);
console.log(!!" "); //strings não vazia
console.log(!!"texto");
console.log(!![]); //arrays
console.log(!!{}); //objetos
console.log(!!Infinity); //infinito
console.log(!!(isAtivo = true));

console.log("Os falsos");
console.log(!!0); // 0
console.log(!!""); //string vazia
console.log(!!null); //nulos
console.log(!!NaN); //Not a number
console.log(!!undefined); //indefinido
console.log(!!(isAtivo = false));

console.log("Pra finalizar...");
console.log(!!("" || null || 0 || " "));

let nome = "Lucas";
console.log(nome || "Desconhecido");