const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const getMulher = mulher => mulher.genero === "M";
const getChinesa = china => china.pais === "China";
const getMenorSalario = (menor, atual) => menor.salario < atual.salario ? menor : atual;


axios.get(url).then(response => {
	const funcionarios = response.data;
	const mulherChinesaMenorSalario = funcionarios.filter(getMulher).filter(getChinesa).reduce(getMenorSalario);
	console.log(mulherChinesaMenorSalario);
});