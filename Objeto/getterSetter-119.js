const sequencia = {
	_valor: 1, // convenção
	get valor() {
		return this._valor++
	}, 
	set valor(valor) {
		if(valor > this.valor) 
			this._valor = valor;
	}
}

console.log(sequencia.valor, sequencia.valor); // get
sequencia.valor = 1000; // set
console.log(sequencia.valor, sequencia.valor); // get
sequencia.valor = 900; // set
console.log(sequencia.valor, sequencia.valor); // get