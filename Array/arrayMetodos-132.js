const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop();	// removo último item
console.log(pilotos);

pilotos.push("Verstappen");	// adiciona na última posição
console.log(pilotos);

pilotos.shift()	// remove da primeira posição
console.log(pilotos);

pilotos.unshift("Hamilton")	// adiciona a primeira posição
console.log(pilotos);

// splice pode adicionar e remover elementos
// .splice(inicio, quantidade que quer remover, adicionar itens "", ...)

// adicionar
pilotos.splice(2, 0, "Bottas", "Massa"); // adicionar na posição 2
console.log(pilotos);

// remover
pilotos.splice(3, 1) // remover 1 item na posição 3
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array aparter da posição 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // novo array apartir da posição 1 até a 4 sem incluir o 4
console.log(algunsPilotos2);