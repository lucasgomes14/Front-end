// fs = file system
const fs = require("fs");

const caminho = __dirname + "/arquivo-162.json";
// __dirname é uma constante que está presente em todos os arquivos node, todos os módulos node que representa o diretório atual

// sincrono...
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

// assincrono...
fs.readFile(caminho, "utf-8", (err, conteudo) => {
	const config = JSON.parse(conteudo);
	console.log(`${config.db.host}:${config.db.port}`);
})

// se for arquivo JSON
const config = require("./arquivo-162.json");
console.log(config.db);

// leitura de diretorio

fs.readdir(__dirname, (err, arquivos) => { 
	console.log("Conteúdo da pasta...");
	console.log(arquivos);
})