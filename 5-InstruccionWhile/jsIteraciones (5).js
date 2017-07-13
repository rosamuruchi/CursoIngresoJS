function Mostrar()
{

var sexo = prompt("ingrese f ó m .");



while (sexo!="f" && sexo!="m")
{
	alert ("sigue intentando");
	sexo = prompt("ingrese f ó m .");
}

alert ("Genial");

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN