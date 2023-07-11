class Pessoa {
	constructor(nome) {
		this.nome = nome
	}

	falar() {
		console.log(`Meu nome é ${this.nome}`);
	}
}

const p1 = new Pessoa("João");
p1.falar();

function Pessoa(nome) {
	this.nome = nome;
	
	this.falar = (nome) => console.log(`Meu nome é ${this.nome}`);
}

const p2 = new Pessoa("Ana");
p2.falar();