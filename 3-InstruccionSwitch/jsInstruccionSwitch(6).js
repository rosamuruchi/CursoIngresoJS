function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

	if (laHora<12 && laHora>6)
	{
		alert("Es de manana");
	}
	else
	{
		if (laHora<20 && laHora>11)
		{
			alert("es de Tarde");
		}
		else
		{
			if (laHora>=25)
			{
				alert("la Hora no Existe");
			}
			else
			{
				alert("es de Noche");
			}
		}
	}

}//FIN DE LA FUNCIÓN