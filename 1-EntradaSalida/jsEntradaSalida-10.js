/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe1 = document.getElementById ('importe').value; 

	importe1 = parseInt (importe1);


	// saco el -25% de mi importe

	var porcent = parseInt (importe1 * 1.25 );


// con esto hago que me muestre en el cuadro "resultado"

document.getElementById ('resultado').value = porcent ;

}
