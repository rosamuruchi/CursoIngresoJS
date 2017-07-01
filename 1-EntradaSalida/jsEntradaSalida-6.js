/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numUno = document.getElementById ('numeroUno').value;
	var numDos = document.getElementById ('numeroDos').value;

	numUno = parseInt (numUno)
	numDos = parseInt (numDos)

	var resultado = numUno + numDos

	alert (resultado);

}

