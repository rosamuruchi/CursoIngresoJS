function Mostrar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1=prompt("ingrese un numero");
	numero2=prompt("ingrese otro numero");
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	if(numero1==numero2)
	{
		resultado=numero1*numero2;
		alert(resultado);
	}
	else
	{
		if(numero1>numero2)
		{
			resultado=numero1-numero2;
			alert(resultado);
		}
		else
		{
			resultado=numero1+numero2;
			alert(resultado);
		}
	}

}
