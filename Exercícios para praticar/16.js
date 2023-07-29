const checarAnoBissexto = ano => {
	if(ano % 400 == 0)
		return true;
	else if(ano % 100 == 0) 
		return `${false}, pois é múltiplo de 100 e não é múltiplo de 400`;
	else if(ano % 4 == 0);
		return true;
}

console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));