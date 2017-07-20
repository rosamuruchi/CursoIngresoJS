/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
	

function Sumar () 
{
	var Precio1;
	var Precio2;
	var Precio3;

	Precio1=document.getElementById('PrecioUno').value;
	Precio2=document.getElementById('PrecioDos').value;
	Precio3=document.getElementById('PrecioTres').value;

	Precio1=parseInt(Precio1);
	Precio2=parseInt(Precio2);
	Precio3=parseInt(Precio3);

	resultado=Precio1+Precio2+Precio3;
	alert(resultado);
}
function Promedio () 
{
	var Precio1;
	var Precio2;
	var Precio3;

	Precio1=document.getElementById('PrecioUno').value;
	Precio2=document.getElementById('PrecioDos').value;
	Precio3=document.getElementById('PrecioTres').value;

	Precio1=parseInt(Precio1);
	Precio2=parseInt(Precio2);
	Precio3=parseInt(Precio3);

	resultado=Precio1+Precio2+Precio3
	promedio=resultado/3
	alert(promedio);
}
function PrecioFinal () 
{
	var Precio1;
	var Precio2;
	var Precio3;

	Precio1=document.getElementById('PrecioUno').value;
	Precio2=document.getElementById('PrecioDos').value;
	Precio3=document.getElementById('PrecioTres').value;

	Precio1=parseInt(Precio1);
	Precio2=parseInt(Precio2);
	Precio3=parseInt(Precio3);

	resultado=Precio1+Precio2+Precio3
	iva=0.21*resultado
	PrecioFinalmasIva=resultado+iva
	alert(PrecioFinalmasIva);
	
}