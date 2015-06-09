// peso / altura * altura

/*var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");


var peso2 = tdPeso.textContent;
var altura2= tdAltura.textContent;

var paciente2 = {"peso":peso2, "altura":altura2 };

var tdPeso = document.getElementById("peso-1");
var tdAltura = document.getElementById("altura-1");


var peso1 = tdPeso.textContent;
var altura1= tdAltura.textContent;

var paciente1= {"peso":peso1, "altura":altura1 };

var pacientes = [paciente1 ,paciente2];*/


var trsPacientes = document.getElementsByClassName("paciente");



var posicaoAtual = 0;

while (posicaoAtual <= trsPacientes.length - 1){

	var pacienteTr = trsPacientes[posicaoAtual];

    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
    
    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];


    var paciente = {nome: tdNome.textContent, peso: tdPeso.textContent , altura: tdAltura.textContent};

if(paciente.altura != 0){

    var imc = paciente.peso / (paciente.altura*paciente.altura);
	
	trsPacientes
    tdImc.textContent = imc;
	
   tdImc.textContent = imc;

console.log(imc);

}
else{

	console.log("Altura é igual a 0");

}

posicaoAtual++;
}


