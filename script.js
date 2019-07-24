/* 


---- exercici 1:
console.log("Hola Mundo"); 


---- exercici 2:
alert("¡Me llamo Gabriel!");


---- exercici 3: 
var a = "Gabriel";
var b = "Silva";

console.log(a + " " + b);


---- exercici 4:
var a = 22;
var b = 15;
var c = a + b;

console.log("La suma entre " + a + " i " + b + " es " + c);


---- exercici 5:
var nota_examen = 4.6;

if (nota_examen >= 5) { 
	alert("Has aprobado el examen con un " + nota_examen)
} else {
	alert("Ohh has suspendido el examen con un " + nota_examen)
}


---- exercici 6: 
let frase = "Tinc un cotxe de color blau";

frase1 = frase.replace('blau','verd');

frase2 = frase.replace(/o/gi,'u');

console.log(frase1);
console.log(frase2);


---- exercici 7:
var array_objectes = ['taula', 'cadira', 'ordinador', 'libreta'];

for (var i = 0; i<array_objectes.length;i++){
	console.log("L'objecte " + array_objectes[i] + " està a la posició " + i + ".")
}


---- exercici 8:
	function calculadora(operador, valor1, valor2) {
		if(operador == 'suma'){
			alert("El resultado de la suma es " +(valor1+valor2))
		}else if(operador == 'resta'){
			alert("El resultado de la resta es " +(valor1-valor2))
		}else if(operador == 'multiplica') {
			alert("El resultado de la multiplicación es " +(valor1*valor2))
		}

	}

var resultat = calculadora('multiplica',2,10); */
