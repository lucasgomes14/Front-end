const contadorA = require("./instanciaUnica-156");
const contadorB = require("./instanciaUnica-156");

const contadorC = require("./instanciaNova-156") ();
const contadorD = require("./instanciaNova-156") ();

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);

