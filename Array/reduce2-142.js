const alunos = [
	{ nome: "João", nota: 7.3, bolsista: false },
	{ nome: "Maria", nota: 9.2, bolsista: true },
	{ nome: "Pedro", nota: 9.8, bolsista: false },
	{ nome: "Ana", nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
const todosSãoBolsistas = alunos.map(b => b.bolsista).reduce(todosBolsistas);

console.log(todosSãoBolsistas);

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
const algumEBolsista = alunos.map(b => b.bolsista).reduce(algumBolsista);

console.log(algumEBolsista);