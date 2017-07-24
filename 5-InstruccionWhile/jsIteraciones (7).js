function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	/*while (contador<3)
	{
		console.log("vuelta",contador+1);
	}*/

	var nota;
	var notamayor=0;
	var notamenor=11;

//muestra el numero mayor//
	/*while(contador<3)
	{
		contador=contador+1;
		nota=prompt("ingrese nota");
		if (nota>notamayor)
		{
			notamayor=nota;
		}
		if (nota<notamenor)
		{
			notamenor=nota;
		}
		console.log("vuelta",contador+1);
	}
	console.log("ver nota",notamayor);

		console.log("ver nota",notamenor);*/


	while(respuesta=='si')
	{
		nota=prompt("ingrese nota");
		nota=parseInt(nota);
		if (contador==1)
		{
			contador=contador+1
			nota=prompt("ingrese nota");
		}
		else
		{
			if (nota>notamayor)
			{
				notamayor=nota;
				acumulador=acumulador+notamayor;
				
			}
			if (nota<notamenor)
			{
				notamenor=nota;
				acumulador=acumulador+notamenor;
			}
			console.log("vuelta",contador+1)
		}
		
		respuesta=prompt("continuar?");
	}
		
		console.log("ver notamayor",notamayor);
		console.log("ver notamenor",notamenor);
		
		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN