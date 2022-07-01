/*var titulo = document.querySelector('.titulo');
console.log(titulo.textContent);
titulo.textContent = "Cálculo IMC"*/

var paciente = document.querySelector('#paciente--um');

var tdPeso = paciente.querySelector('.peso--um');
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector('.altura--um')
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector('.info--imc');

var imc = peso / (altura * altura); 

tdImc.textContent = imc 

