var livro = [{
        pagina: 1,
        leituraFeita: false,
        leitor: null
    },{
        pagina: 2,
        leituraFeita: false,
        leitor: null
    },{
        pagina: 3,
        leituraFeita: false,
        leitor: null
    },{
        pagina: 4,
        leituraFeita: false,
        leitor: null
    },{
        pagina: 5,
        leituraFeita: false,
        leitor: null
    }];

var leitor = 'Judi Meison';
var arrays_exercicio1 = {
    showAlert: true,
    readerAssigned: true
};

function verificaLeitura() {
    var executaAlert = true;
    for(var i = 0; i < livro.length; i++) {
        if(livro[i].leituraFeita && livro[i].leitor == leitor)
            executaAlert = false 
    }
    return executaAlert;
}

function processaLeitura() {
    for(var i = 0; i < livro.length; i++) {
        console.log(livro[i]);
        livro[i] = livro[i];
    }
}

function init() {
    processaLeitura();
    arrays_exercicio1.showAlert = verificaLeitura();
}