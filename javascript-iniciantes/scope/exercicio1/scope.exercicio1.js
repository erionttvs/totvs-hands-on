
color = 'blue';
var quadrado;

function criaCor() {
    var color = 'blue';
}

function criaQuadrado() {
    var quadrado = document.getElementById("exerc-1");
}

function init() {

    if(color) {
        quadrado.textContent = color;
    } else {
        quadrado.textContent = 'red';
    }
}