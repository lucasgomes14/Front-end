// IIFE => Immediately Invoked Function Expression
// fugir do escopo global

(function() { // padrão IIFE
	console.log("Será executado na hora!");
	console.log("Foge do escopo mais abrangente!");
}) ()