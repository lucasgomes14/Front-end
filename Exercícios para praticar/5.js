const maiorOuIgual = (num1, num2) => {
	if(typeof num1 != typeof num2)
		return false;
	
	return num1 >= num2;
}

console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(0, "0"));
console.log(maiorOuIgual(5, 1));