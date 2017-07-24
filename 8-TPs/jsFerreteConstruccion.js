/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/



function Rectangulo () 
{
	var largo=document.getElementById('Largo').value;
	var ancho=document.getElementById('Ancho').value;
	cantidad=largo*ancho;
	alert(cantidad);
}
function Circulo () 
{
	var radio=document.getElementById('Radio').value;
	radio2=Math.pow(radio,2)
	cantidad=(radio2)*3.14
	alert(cantidad);
}
function Materiales () 
{
	var largo=document.getElementById('Largo').value;
	var ancho=document.getElementById('Ancho').value;

	cementoxmt2=2;
	cantidadCemento=(largo*cementoxmt2)*ancho;

	calxmt2=3;
	cantidadCal=(largo*calxmt2)*ancho;
	
	alert("Se necesitan " + cantidadCal +" bolsas de cal");
}