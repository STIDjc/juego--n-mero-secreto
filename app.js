let numeroSecreto = 0;
let intentos = 0;
let maximosIntentos = 2;
let listaNumeroSorteados = [];
let numeroMaximo = 7;
console.log(numeroSecreto);

document.getElementById("recet").addEventListener("click", function() {
    listaNumeroSorteados = []
    document.getElementById('btn').disabled = false;
    // document.getElementById("reiniciar").disabled = false;
    document.getElementById('recet').disabled = true;
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    

});

function asignarTextoElemento(elemeto, texto) {
    let elmentoHTML = document.querySelector(elemeto);
    elmentoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById("btn").disabled = true;
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
        desabilitarBTN();
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
    if(listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Llegaste el número de sorteos maximos ¡PRESIONA EL BOTÓN REESTABLCER');
        document.querySelector('#reiniciar').setAttribute('disabled',true);
        document.getElementById('btn').disabled = true;
        // document.getElementById('btn').disabled = true;
        document.getElementById('recet').disabled = false;
    }else {
        //si el numero generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function desabilitarBTN() {
    if(intentos > maximosIntentos) {
        document.getElementById('btn').disabled = true;
        document.getElementById("reiniciar").disabled = false;
        asignarTextoElemento('p','llegaste al maximo de intentos');
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);   
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
    desabilitarBTN();
}

document.getElementById("reiniciar").addEventListener("click",function() {
    //limpear caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero 
    //generar el número aleatorio
    //inicializar el numero de intentos 
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    document.getElementById('btn').disabled = false;
    if(listaNumeroSorteados.length === numeroMaximo) {
    document.getElementById('btn').disabled = true;
    generarNumeroSecreto();

    }

});

condicionesIniciales();