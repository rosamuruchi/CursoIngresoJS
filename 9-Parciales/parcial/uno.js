
function Mostrar()
{
	/*var base=document.getElementById('laBase').value;
	var perimetro;
	perimetro= base*4;
	alert("el perimetro es de "+perimetro);*/

	/*var resultado;
	var numero1;
	var numero2;
	numero1=prompt("Ingrese un numero");
	numero2=prompt("Ingrese un numero");
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	resultado=numero1+numero2;
	document.getElementById('laBase').value=resultado;*/


//pedir por PROMPT nombre y nacionalidad y mostrar el mensaje en el cuadro de texto "pepe es argentino"//
	/*var nombre=prompt("ingrese el nombre");
	var nacionalidad=prompt("ingrese la nacionalidad");

	document.getElementById('laBase').value=nombre+" es "+nacionalidad;*/

//se piden dos numeros mostrar en el cuadro de texto el menor de ellos.



	
	/*var nombre1=prompt("ingrese el primer nombre");
	var numero1=prompt("Ingrese un numero");
	var nombre2=prompt("ingrese el segundo nombre");
	var numero2=prompt("Ingrese un numero");
	
	if(numero1>numero2)
	{
		console.log("el nombre del mayor es "+nombre1);
	}
	else
	{
		console.log("el nombre del mayor es "+nombre2);
	}*/
	var numero1;
	var numero2;
	var numero3;

	numero1=prompt("Ingrese un numero");
	numero2=prompt("Ingrese un numero");
	numero3=prompt("Ingrese un numero");
	

	if(numero1<numero2 && numero2<numero3)
	{
		alert("el numero del medio es"+ numero2);
	}
	else
	{
		if(numero1>numero2 && numero1<numero3)
		{
			alert("el numero del medio es"+ numero1);
		}
		else
		{
			if(numero1>numero2 && numero1>numero3)
			{
				alert("el numero del medio es"+ numero3);
			}
			else
			{
				if (numero1>numero2 && numero1>numero1)
				{
					alert("el numero del medio es"+ numero2);
				}
				else
				{
					alert("el numero del medio es"+ numero1);
				}
			}
		}

	}




	


}
