const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 11 * * 6", function () {
	console.log("Executando Tarefa 1!", new Date().getSeconds());
});

setTimeout(function() {
	tarefa1.cancel();
	console.log("Cancelar tarefa 1!");
}, 20000);

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 6)];
regra.hour = 11;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function() {
	console.log("Execuntando Tarefa 2!", new Date().getSeconds());
});