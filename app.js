let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
let maximosSorteos = 3;
console.log(numeroSecreto);

function asignarTextoElemento(elemeto, texto) {
    let elmentoHTML = document.querySelector(elemeto);
    elmentoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no ecertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','el numero secreto es menor');
        }else {
            asignarTextoElemento('p','el número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //si ya mostramos todos los numeros
    if(maximosSorteos == listaNumeroSorteados.length) {
        asignarTextoElemento('p','llegaste al maximo de numeros generados');
    }else {

    }

    if(listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sorteron todos los número posibles');
    }else {
        
    }

    //si el numero generado esta incluido en la lista
    if (listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);   
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}

function reiniciarJuego() {
    //limpear caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero 
    //generar el número aleatorio
    //inicializar el numero de intentos 
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();