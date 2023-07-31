const media = media => (media.reduce((soma, atual) => soma + atual))/media.length;

function receberMelhorEstudante(objeto) {

	const newArray = Object.entries(objeto).map(m => {
		return { nome: m[0], media: media(m[1]) }
	});

	const estudantesOrdenados = newArray.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media);

	
	console.log(estudantesOrdenados[0]);
}

receberMelhorEstudante({ 
	Joao: [8, 7.6, 8.9, 6],
	Mariana: [9, 6.6, 7.9, 8],
	Carla: [7, 7, 8, 9] });