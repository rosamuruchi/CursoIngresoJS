function Mostrar()
{

  //Realiazar el algoritmo que lea un importe de un producto por prompt y muestre el importe final por ID
//sumándole el IVA (21%)
  /*var importeIva;
  var Iva=1.21;
  var importf=prompt("Ingrese importe del producto");
  	importf=parseInt(importf);
	importeIva=importf*Iva;

  document.getElementById('importeFinal').value=importeIva;*/

 /* var numero;
  numero=parseInt(numero);
  var contador=0;
  var acumulador=0;
  var promedio;

  while(contador<10)
  {
  	contador=contador+1;
  	numero=prompt("Ingrese el numero");
  	
  	acumulador=acumulador+numero;
  	acumulador=parseInt(acumulador);

  }
  promedio=acumulador/contador;
  document.getElementById('importeFinal').value=promedio;*/


var nota;
var contador=0;
var notamayor=10;
var notamenor;

while (contador<10)
{
	contador=contador+1;
	nota=prompt("ingrese la nota");
	if(nota<notamayor)
	{
		nota=notamenor;
	}
	console.log("vuelta",contador+1);
}

 console.log("notamenor"+notamenor);

}
