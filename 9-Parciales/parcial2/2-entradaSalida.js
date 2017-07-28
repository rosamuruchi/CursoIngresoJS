//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

	var importe=prompt("ingrese su importe");
	var Iva=1.21;
	var importefinal=importe*Iva;

	document.getElementById('importe').value=importefinal;
	
}

