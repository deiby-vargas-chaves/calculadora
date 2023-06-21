const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.number');
const botonesOperadores = document.querySelectorAll('.operador')


const display = new Display(displayValorAnterior, displayValorActual);


botonesNumeros.forEach(botton =>{
    botton.addEventListener('click', () => display.agregarNumero(botton.innerHTML));
});

botonesOperadores.forEach(botton =>{
    botton.addEventListener('click', () => display.computar(botton.value));
});