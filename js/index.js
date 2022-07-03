var titulo = document.querySelector('.titulo');
titulo.textContent = "Cálculo IMC"

var pacientes = document.querySelectorAll('.paciente'); //traz todos os pacientes com a classe paciente All



for(var i = 0; i < pacientes.length; i++){
    var cliente = pacientes[i];

    var tdPeso = cliente.querySelector('.peso');
    var peso = tdPeso.textContent;

    var tdAltura = cliente.querySelector('.altura')
    var altura = tdAltura.textContent;

    var tdImc = cliente.querySelector('.info--imc');

    var pesoValido = true;
    var alturaValido = true;

    if( peso <= 0 || peso >= 500 ) { //se peso for menor que zero ou maior que 500 exiba peso inválido
    pesoValido = false;
    tdPeso.textContent = "Peso Inválido";
    };

    if( altura <= 0 || altura >= 3.0 ) { //se peso for menor que zero ou maior que 500 exiba peso inválido
    alturaValido = false;
    tdAltura.textContent = "Altura Inválida";
    };

    if (alturaValido && pesoValido){
    var imc = peso / (altura * altura); 
    tdImc.textContent = imc.toFixed(2); //declara o quanto que você quer de casas decimais
    };
}






/*vamos fazer um loop para todos os  pacientes */
