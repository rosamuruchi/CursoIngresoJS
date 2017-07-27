function Mostrar()
{
	contador=0;
	respuesta="si";
	/*for(contador=1; contador<=10 ; contador++)
	{
		console.log("Hola "+contador);
	}*/

/*otra forma:
	for(contador=1; ; contador++)
	{
		
		if(contador==10)
		{
			break;
		}
		console.log("Hola "+contador);
	}*/

	for( ;respuesta=="si"; )
	{
		console.log("Hola "+contador);
		if(contador==10)
		{
			break;
		}
		contador++
		
	}
	respuesta=prompt("continuar?");


	

}