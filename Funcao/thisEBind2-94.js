function Pessoa() {
	this.idade = 0;

	const self = this; // jeito de contornar a variância do this
	setInterval(function() {
		self.idade++
		console.log(self.idade);
	}/*.bind(this)*/, 1000)
}

new Pessoa;