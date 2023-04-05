//Declaro las variables globales
let piedra = document.getElementById('btnPiedra');
let papel = document.getElementById('btnPapel');
let tijera = document.getElementById('btnTijera');

let movimientos = ['piedra','papel','tijera'];

//Agrego manejador de enventos
piedra.addEventListener('click', movimientoPiedra);
papel.addEventListener('click', movimientoPapel);
tijera.addEventListener('click', movimientoTijera);

//Declaro las funciones

function generarNumero(){
    let movimientoPc = Math.floor(Math.random() * (4 - 1) + 1);
    console.log('el movimiento de la pc es: ' + movimientoPc);
    return movimientoPc;
}

let movPc = generarNumero();

function movimientoPiedra(){
    if(movimientos[movPc] === 'piedra'){
        alert(`piedra VS ${movimientos[movPc]} | Resultado: EMPATE`);
    }else if(movimientos[movPc] === 'papel'){
        alert(`piedra VS ${movimientos[movPc]} | Resultado: PERDISTE`);
    }else{
        alert(`piedra VS ${movimientos[movPc]} | Resultado: GANASTE`);
    }
}

function movimientoPapel(){
    if(movimientos[movPc] === 'papel'){
        alert(`papel VS ${movimientos[movPc]} | Resultado: EMPATE`);
    }else if(movimientos[movPc] === 'tijera'){
        alert(`papel VS ${movimientos[movPc]} | Resultado: PERDISTE`);
    }else{
        alert(`papel VS ${movimientos[movPc]} | Resultado: GANASTE`);
    }
}

function movimientoTijera(){
    if(movimientos[movPc] === 'tijera'){
        alert(`tijera VS ${movimientos[movPc]} | Resultado: EMPATE`);
    }else if(movimientos[movPc] === 'piedra'){
        alert(`tijera VS ${movimientos[movPc]} | Resultado: PERDISTE`);
    }else{
        alert(`tijera VS ${movimientos[movPc]} | Resultado: GANASTE`);
    }
}


