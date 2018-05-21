// EJERCICIO 1
var prompt = require('prompt');

prompt.start();

	console.log('Ingresa los 3 numeros a promediar');
	prompt.get(['NUMERO1','NUMERO2', 'NUMERO3'], function(err, result){
	NUMERO1= Number(result.NUMERO1);
	NUMERO2= Number(result.NUMERO2);
	NUMERO3= Number(result.NUMERO3);
	
	PROMEDIO= (NUMERO1+NUMERO2+NUMERO3)/3;
	console.log(' PROMEDIO: ' + PROMEDIO);
});
