const alunos = [
	{ nome: "João", nota: 7.9 },
	{ nome: "Maria", nota: 9.2 }
];

// Imperativo
let total1 = 0;
for(let i = 0; i < alunos.length; i++) {
	total1 += alunos[i].nota;
}

console.log(total1 / alunos.length);

// Declarativo
const soma = (soma, atual) => soma + atual;
const notasDosAlunos = notas => notas.nota;

const resultado = alunos.map(notasDosAlunos).reduce(soma);

console.log(resultado / alunos.length);