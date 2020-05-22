function test() {
    
    if(arrays_exercicio1.showAlert) {
        alert('O exercicio 1 não esta completo!, favor terminar de ler o livro!');
    } else {
        var mensagem = 'Parabéns leitor' + leitor + ' o livro foi concluido com sucesso!';
        document.getElementById('answer-arrays-1').textContent = mensagem;
    }
}

