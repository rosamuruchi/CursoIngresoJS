/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numdividendo = document.getElementById ('numeroDividendo').value;
	var numdivisor = document.getElementById ('numeroDivisor').value;

	numdividendo = parseInt (numdividendo);
	numdivisor = parseInt (numdivisor);

	var resultado = (numdividendo % numdivisor);

	alert (" El resto es " + resultado);


}
