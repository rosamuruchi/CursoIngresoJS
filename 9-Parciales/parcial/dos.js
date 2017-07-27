function Mostrar()
{

  //var importef=document.getElementById('importeFinal').value;
  var importeIva;
  var importf=prompt("Ingrese importe del producto");

	importeIva=importef*1.21;


  document.getElementById('importeFinal').value=importeIva;
}
