var color ;
var quadrado;

function criaCor() {
    color = 'blue';
}
 
function criaQuadrado() {
    quadrado = document.getElementById("exerc-1");
}
  
function init() {
    criaCor()
    criaQuadrado()

    if(color = 'blue') {
        quadrado.textContent = color;
        //quadrado.style.background= color;
    } else {
        quadrado.textContent = 'red';
    }
}