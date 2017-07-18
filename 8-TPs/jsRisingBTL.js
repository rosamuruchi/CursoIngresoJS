/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var Edad;
	var Sexo;
	var EstadoCivil;
	var Sueldo;
	var Legajo;
	var Nacionalidad;

	edad=prompt("Ingrese su edad entre 18 y 90 años inclusive");
	while (!(edad>17 && edad<=90))
	{
		alert ("Ingrese denuevo");
		edad = prompt("ingrese su edad entre 18 y 90 años inclusive");
	}
	document.getElementById('Edad').value=edad



	sexo=prompt("ingrese M para masculino y F para femenino");
	while (sexo!="M" && sexo!="F")
	{
		alert("Ingrese denuevo");
		sexo=prompt("Ingrese M para masculino y F para femenino");
	}
	document.getElementById('Sexo').value=sexo;


	estcivil=prompt("Ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	while (estcivil!=1 && estcivil!=2 && estcivil!=3 && estcivil!=4)
	{
		alert("Ingrese denuevo");
		estcivil=prompt("ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	}
	document.getElementById('EstadoCivil').value=estcivil;


	SueldoBruto=prompt ("Suedo no menor a 8000");
	while (SueldoBruto<8000)
	{
		alert("ingrese denuevo");
		SueldoBruto=prompt("Ingrese su Sueldo no menor a 8000");
	}
	document.getElementById('Sueldo').value=SueldoBruto;

	numLegajo=prompt("Ingrese su Legajo");
	while (numLegajo<999)
	{
		alert ("Ingrese denuevo");
		numLegajo=prompt ("Ingrese su Legajo");
	}
	document.getElementById('Legajo').value=numLegajo;


	nacionalidad=prompt("Ingrese su nacionalidad “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
	{
		alert("Ingrese denuevo");
		nacionalidad=prompt ("Ingrese su nacionalidad “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");

	}


	document.getElementById('Nacionalidad').value=nacionalidad;
	
}
