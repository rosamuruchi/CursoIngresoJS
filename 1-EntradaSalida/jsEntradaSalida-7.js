/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numUno = document.getElementById ('numeroUno').value;
	var numDos = document.getElementById ('numeroDos').value;

	numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	var resultado = (numUno + numDos);

	alert ("La suma es" + resultado);
}

function restar()
{
	var numUno = document.getElementById ('numeroUno').value;
	var numDos = document.getElementById ('numeroDos').value;

	numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	var resultado = (numUno - numDos);

	alert ("La resta es" + resultado);
}

function multiplicar()
{ 
	var numUno = document.getElementById ('numeroUno').value;
	var numDos = document.getElementById ('numeroDos').value;

	numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	var resultado = (numUno * numDos);

	alert ("El producto es"+ resultado);
}

function dividir()
{
	var numUno = document.getElementById ('numeroUno').value;
	var numDos = document.getElementById ('numeroDos').value;

	numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	var resultado = (numUno / numDos);

	alert ("La division es"+ resultado);
}

