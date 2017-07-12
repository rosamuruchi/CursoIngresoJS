function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var edad=document.getElementById ('edad').value;
	var numero =Math.floor(Math.random() * 10) + 1;
	

	if (edad>8)
	{
		alert("EXCELENTE");
	}
	else
	{
		if (edad>4)
		{
			alert("APROBO");
		}
		else
		{
			alert("VAMOS LA PROXIMA SE PUEDE");
		}
	}




}//FIN DE LA FUNCIÓN