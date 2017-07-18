function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var numMaximo=0;
	var numMinimo=100;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt("ingresar el numero");
		numero=parseInt(numero);

		if (numero<numMinimo)
		{
			numMinimo=numero;
		}
		if (numero>numMaximo)
		{
			numMaximo=numero
		}
		

		respuesta=prompt("continuar?");	
	
	}

	document.getElementById('maximo').value=numMaximo;
	document.getElementById('minimo').value=numMinimo;



}//FIN DE LA FUNCIÓN