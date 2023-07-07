const FUNCS = [];

for(var i = 0; i < 10; i++) {
	FUNCS.push(function() {
		console.log(i);
	})
}

FUNCS[2]();
FUNCS[8]();