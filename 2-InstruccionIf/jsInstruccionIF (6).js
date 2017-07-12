function Mostrar()
{
//tomo la edad  
	
	var edad=document.getElementById ('edad').value;
	/*if (edad>17)
	{
		alert ("Es mayor de edad");
	}
	if (edad>12 && edad<18)
	{
		alert ("Es adolescente");
	}
	if (edad<13)
	{
		alert ("Es niño");
	}*/

	if (edad<13)
	{
		alert("es un niño");
	}
	else
	{
		if (edad>17)
		{
			alert("es mayor de edad");
		}
		else
		{
			alert("es un adolescente");
		}

	}	



}//FIN DE LA FUNCIÓN