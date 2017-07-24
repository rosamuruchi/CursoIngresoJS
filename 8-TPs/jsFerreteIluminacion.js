/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var preciodescuento;
 	var lampara=35;
 	var lamparadesc;
 	var precioFinal;

 	Cantidad=document.getElementById('Cantidad').value;
 	Marca=document.getElementById('Marca').value;
 	preciodescuento=document.getElementById('precioDescuento').value;

 	precioFinal=Cantidad*lampara;

/*para sacar el descuento por ej:
40% = 100-40= 60% = 0.6*/
	if (Cantidad>5)
 	{
 		lamparadesc=precioFinal*0.5;
 		document.getElementById('precioDescuento').value=lamparadesc;
 	}
 	else
 	{
 		if(Cantidad==5)
 		{
 			if(Marca=="ArgentinaLuz")
 			{
 				lamparadesc=precioFinal*0.6;
 				document.getElementById('precioDescuento').value=lamparadesc;
 			}
 			else 
 			{
 				lamparadesc=precioFinal*0.7;
 				document.getElementById('precioDescuento').value=lamparadesc;
 			}
 		}
 		if(Cantidad==4)
 		{
 			if (Marca=="ArgentinaLuz" || Marca== "FelipeLamparas") 
 			{
 				lamparadesc=precioFinal*0.75
 				document.getElementById('precioDescuento').value=lamparadesc;
 			}
 			else
 			{
 				lamparadesc=precioFinal*0.8
 				document.getElementById('precioDescuento').value=lamparadesc;
 			}
 		}
 		if(Cantidad==3)
 		{
 			if(Marca=="ArgentinaLuz")
 			{
 				lamparadesc=precioFinal*0.85
 				document.getElementById('precioDescuento').value=lamparadesc;
 			}
 			else
 			{
 				if(Marca=="FelipeLamparas")
 				{
 					lamparadesc=precioFinal*0.9
 					document.getElementById('precioDescuento').value=lamparadesc;
 				}
 				else
 				{
 					lamparadesc=precioFinal*0.95
 					document.getElementById('precioDescuento').value=lamparadesc;
 				}
 			}
 		}
 	}

}	
