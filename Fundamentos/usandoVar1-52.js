{
	{
		{
			{
				var sera = "Será?";
				console.log(sera);
			}
		}
	}
}

console.log(sera); // irá pegar pois quando o var tá no escopo de um bloco normal ficara visivel

function teste() {
	var local = 123;
	console.log(local);
}
teste();
// console.log(local); // não irá pegar, pois o var quando está no escopo de uma function não fica visível fora
