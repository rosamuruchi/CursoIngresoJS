function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while (!(numero>0 && numero<=9))
	{
		alert ("sigue intentando");
		var numero = prompt("ingrese un número entre 0 y 10.");

	}

	alert ("Genial");

}//FIN DE LA FUNCIÓN