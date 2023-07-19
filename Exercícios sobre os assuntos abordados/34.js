/*
 * 
 * 34) Construa uma função que receberá duas Strings de tamanhos variados e que 
 * retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) 
 * estejam contidos em ambas palavras.
 * 
*/

function estaContidoNasStrings(string1, string2) {
	if(string1.length <= string2.length) {
		for(let i = 0; i < string1.length; i++) {
			if(string1.charAt(i) != string2.charAt(i)) 
				return false;
		}
	} else {
		for(let j = 0; j < string2.length; j++) {
			if(string2.charAt(j) != string1.charAt(j)) 
				return false;
		}
	}
	
	return true;
}

let string1 = "abcdef";
let string2 = "abcdeh";

console.log(estaContidoNasStrings(string1, string2));