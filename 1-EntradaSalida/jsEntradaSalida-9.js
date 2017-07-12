/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var importe = document.getElementById ('sueldo').value; 

	importe = parseInt (importe);


	// saco el 10% de mi sueldo

	var porcent = parseInt (importe * 1.1 );


// con esto hago que me muestre en el cuadro "resultado"

document.getElementById ('resultado').value = porcent ;

	
}
