function Mostrar()
{

  //var importef=document.getElementById('importeFinal').value;
  var importeIva;
  var importf=prompt("Ingrese importe del producto");
  	importf=parseInt(importf);
	importeIva=importf*1.21;

  document.getElementById('importeFinal').value=importeIva;
}
