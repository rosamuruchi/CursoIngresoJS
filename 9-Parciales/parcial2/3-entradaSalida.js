//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo=document.getElementById('largo').value;
	var ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);
	largo=parseInt(largo);
	var perimetro=2*(ancho+largo);
	var alambradoNecesario;
	alambradoNecesario=6*perimetro;

	alert("se necesita "+ alambradoNecesario+ "metros de alambrado");

}

