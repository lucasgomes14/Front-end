let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);

--num1; // mais rapido do que dps 
console.log(num1);

console.log(++num1 === num2--);
console.log(num1 === num2);

let base = 2 ** 2;
base **= 2;
console.log(base);