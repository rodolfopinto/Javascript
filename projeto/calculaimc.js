// peso / altura * altura

var tdPeso = document.getElementById("peso-1");
var tdAltura = document.getElementById("altura-1");


var peso = tdPeso.textContent;
var altura= tdAltura.textContent;

var paciente = {"peso":peso, "altura":altura };

if(altura != 0){
var imc = paciente.peso / (paciente.altura*paciente.altura);
	
	var tdimc=document.getElementById("imc-1");
	tdimc.textContent = imc;

console.log(imc);

}
else{

	console.log("Altura é igual a 0");

}

var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");


var peso = tdPeso.textContent;
var altura= tdAltura.textContent;

var paciente = {"peso":peso, "altura":altura };

if(altura != 0){
var imc = paciente.peso / (paciente.altura*paciente.altura);
	
	var tdimc=document.getElementById("imc-2");
	tdimc.textContent = imc;

console.log(imc);

}
else{

	console.log("Altura é igual a 0");

}