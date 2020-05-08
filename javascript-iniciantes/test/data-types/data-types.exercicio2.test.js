function test() {
    var id ='resposta-2';
    var element =  document.getElementById(id);
    var testContent = element.textContent;
    var resposta = JSON.stringify({id: 1,nome: 'João',telefone: '+55(18)99555-5555'});

    if(testContent.includes(resposta)) {
        element.style.color='blue';
    }
}

