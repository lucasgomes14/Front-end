const PESO1 = 1.0;
const PESO2 = Number("2.1");

console.log(PESO1, PESO2);
console.log(Number.isInteger(PESO1));
console.log(Number.isInteger(PESO2));

const AVALIACAO1 = 9.871;
const AVALIACAO2 = 6.871;

const TOTAL = AVALIACAO1 * PESO1 + AVALIACAO2 * PESO2;
const MEDIA = TOTAL / (PESO1 + PESO2);

console.log(MEDIA);
console.log(MEDIA.toFixed(2)); //duas casas decimais

console.log(MEDIA.toString()); //converter para string
console.log(MEDIA.toString(2)); //converter para binario que vai ser Number

//number tipo do dado
//Number função