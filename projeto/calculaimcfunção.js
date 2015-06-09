function calculaImc(paciente){

 if(paciente.altura != 0){

   		 var imc =paciente.peso / (paciente.altura*paciente.altura);
    		return imc; 
               
            }
         else{

                console.log("Altura é igual a 0");

            }
}


	for (var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++){

		var imcDoPaciente= calculaImc(paciente);

		imcTd.textContent = imcDoPaciente;
                             

                         console.log(imcDoPaciente);

	}
