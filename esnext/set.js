// não aceita repetição / não é indexada

const times = new Set();
times.add("Palmeiras");
times.add("Vasco").add("São Paulo").add("Santos");
times.add("flamengo");
times.add("Palmeiras");

console.log(times);
console.log(times.size);
console.log(times.has("palmeiras"));
console.log(times.has("Palmeiras"));
times.delete("flamengo");
console.log(times.has("flamengo"));

const nomes = ["Raquel", "Lucas", "Julia", "Lucas"];
const nomesSet = new Set(nomes);
console.log(nomesSet);