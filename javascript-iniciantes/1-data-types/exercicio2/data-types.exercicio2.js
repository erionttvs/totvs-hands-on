function init() {
    
    var id ='resposta-2';
    var element =  document.getElementById(id);

    var objeto = {message: 'modifique esse objeto'}
    element.textContent = JSON.stringify(objeto);
}