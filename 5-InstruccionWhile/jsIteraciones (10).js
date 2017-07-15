function Mostrar()

{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";

/*
ejemplo de obtencion,validacion y extraccion de informacion de esta encuesta se debe informar
1-cuantos mujeres y cuantos hombres fueron entrevistados
2-la persona de mayor edad
3-el promedio de edad
4-quien ganara las elecciones
5-informar cuantas mujeres mayores de edad hay
6-informar cuantos hombres menoreso 30 años hay
7-informar la altura del hombre que menos edad tiene
8-informar cuantos hombres votaron a otro
9-de las mujeres informar cuantas votaron a la oposicion
10-cuantas personas de 50 años votaron
11-cuantas personas mujeres de 50 años votaron
12-cuantas mujeres de 50 años de mas de 1 metro votaron al gobierno

*/
	var sexo;
	var contadorMasc=0;
	var contadorFem=0;
	var edad;
	var edadMayor=0;
	var edadMenor=100;



	while(respuesta!="no")
	{
		sexo=prompt ("sexo");
		while(sexo!="f" && sexo!="m")
		{
			sexo= prompt("sexo");
		}
		if (sexo=="m")
		{
			contadorMasc= contadorMasc+1
		}
		else
		{
			contadorFem=contadorFem+1
		}

		edad=prompt("edad");
		while (edad<0 || edad>100)
		{
			edad=prompt("edad")
		}
		if (contador==0)
		{
			edadMayor=edad;
		}
		else
		{
			if (edad>edadMayor)
			{
				edadMayor=edad
			}
		}



	}



}//FIN DE LA FUNCIÓN