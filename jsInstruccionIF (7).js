function Mostrar()
{
//tomo la edad  
	var edad=document.getElementById ('edad').value;
	var estadocivil=document.getElementById ('estadoCivil').value;

	if (edad<18 && estadoCivil!="Soltero")
	{
		alert ("es muy pequeño para NO ser soltero");
	}




	


}//FIN DE LA FUNCIÓN