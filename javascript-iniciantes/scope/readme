Objetivo
Entender como fuciona o escopo das variáveis em JavaScript.

Conceito
Para se desenvolver um código eficiente e evitar erros é necessário entendimento sobre o escopo.
Escopo não é um tema complexo em JavaScript já que temos somente dois tipos que são eles local e global.

Escopo local
Variáveis definidas dentro de uma função possuem escopo "local", o que significa que se tornam inacessíveis do lado de "fora".
O termo lado de "fora" significa qualquer outra função ou arquivo JavaScript carregado na página.
Podemos então entender que dentro das chaves "{ ... }" de uma função é onde nascem e morrem as variáveis locais, de forma mais simplista.
Ex:
```
function imprimir() {
    var mensagem = "Escopo local é fácil!."; // A variável mensagem possui escopo local pois é definida dentro da função "imprimir".
    console.log(mensagem);
}
```

Agora que sabemos que uma variável de escopo local abrange somente a função a qual é declarada, podemos então afirmar que o trecho de codigo abaixo não funcionaria ?
Ex:
```
var mensagem;
function carregarMensagem() {
    mensagem = "Escopo local é fácil!.";
}
function imprimir() {
    console.log(mensagem);
}
carregarMensagem();
imprimir();
...
```

O código fonte acima funciona sem quaisquer problemas, isso se deve ao fato da variável "mensagem" ter sido declarada fora do escopo das funções que a utilizam.
Então podemos entender que essa variável na verdade não é "local" mas sim "global", mais detalhes abaixo, mas para fecharmos o conceito sobre variáveis locais, elas
necessitam ser declaradas e utilizadas dentro das funções. 
Só porque algum valor é atribuido a uma variável dentro de uma função não significa que esse valor retido somente no escopo da função.
O que determina o escopo dela sempre vai ser a parte do código que ela foi declarada.

Escopo Global
As variaveis de escopo "global" diferentemente das "locais" tem toda a pagina como seu escopo, isso significa que se torna visivel não somente ao arquivo JavaScript e que foi declarada,
mas também a todo arquivo que foi carregado na página incluindo suas funções.
É necessario tomar muito cuidado ao declarar uma variável "global" já que isso pode sobrescrever outras já definidas em pontos diferentes da página, como disse todos os arquivos tem acesso a ela.
Ex:
```
arquivo_1.js
var variavelGlobal = "Escopo global pode se tornar problematico";

function operacao1() {
    variavelGlobal += " quando não utilizada de maneira";
}   

function operacao2() {
    variavelGlobal += " correta!";
}

console.log(variavelGlobal);
```

Agora imagine esta situação onde temos 2 arquivos JavaScript que utilizam este mesmo nome de variável.
Ex:
```
arquivo_1.js
var variavelGlobal = "Escopo global pode se tornar problematico";

function operacao1() {
    variavelGlobal += " quando não utilizada de maneira";
}   

function operacao2() {
    variavelGlobal += " correta!";
}
...

arquivo_2.js
var variavelGlobal = 0;

function incrementar() {
    variavelGlobal ++;
}   

incrementar();
...
```

Isso pode se tornar uma dor de cabeça tremenda, caso o arquivo_2.js carregague primeiro na página do que o arquivo_1.js, 
os valores podem se tornar incorretos se em outro ponto da pagina houver dependencia do valor incrementado da variavel do arquivo_2.js

Quadro de exemplo para os escopos:
------------------------------------------------------------------|
|		 // Escopo Global do arquivo JavaScript                   |
|		 var mensagem;                                            |
|                                                                 |
|		----------------------------------------------------------|
|		|	function carregarMensagem() {                         |
|		|		// Escopo local da function "carregarMensagem"	  |
|		|	    mensagem = "Escopo local é fácil!.";              |
|		|	}                                                     |
|		|                                                         |
|		|---------------------------------------------------------|
|		|	function imprimir() {        ]                        |
|		|		// Escopo local da function "imprimir"		      |
|		|	    console.log(mensagem);                            |
|		|	}                                                     |
|		|                                                         |
|		|---------------------------------------------------------|
|		                                                          |
|		// Escopo Global do arquivo JavaScript                    |
|		carregarMensagem();                                       |
|		imprimir();                                               |
|-----------------------------------------------------------------|

Global Automático
Quando atribuimos um valor a uma variável que não foi declarada ela automaticamente se tornará global.
É preciso tomar cuidado para que esse tipo de situação não ocorra já que como abordado em "Escopo Global" pode gerar problemas.
Abaixo temos um exemplo desta situação:
Ex:
```
arquivo1.js

function soma(valor1, valor2) {
    resultado = valor1 + valor2;
}

console.log(resultado)
// Imprime o resultado sem problemas por que a variavel se tornou global automaticamente 
...
```

Strict Mode
Para acabar com os problemas de se ter variaveis globais que nao foram declaradas podemos utilizar o strict mode. 
Que nada mais é do que colocar a diretiva "use strict"; no documento JavaScript.
Isso ajuda a manter um código limpo pelo fato de forçar a declaração de variaveis globais caso sejam utilizadas.
Abaixo temos uma tabela de compatibilidade dos Browsers em suas versões que começaram a aceitar o Stric mode:
--------------------------------------------------
Chrome	|   IE	  |	Firefox	|	Safari	|	Opera |
--------------------------------------------------
13.0 	|   10.0  |	4.0 	|	6.0     |	12.1  |
--------------------------------------------------

Scopo do Strict Mode
A diretiva "use strict"; precisa ser colocada no escopo que sera utilizada, portanto se declarada no inicio do arquivo sera toda sua extensão,
ou se dentro de uma função por exemplo, então se limitará ao escopo da função.

Ao se criar uma variavel automatico mesmo utilizando Strinct Mode irá lançar uma exeption.
Exemplo de utilização incorreta quando isso acontece:
```
arquivo1.js

"use strict";
valor = 1;

// Vai lançar erros
...

arquivo2.js

"use strict";

function executar() {
    valor = 1;
}

// Vai lançar erros
...

arquivo3.js

valor = 1;

function executar() {
    "use strict";
    valor++;
}

// Não vai laçar erros pois o "use strict" foi definido com escopo da função
...

arquivo4.js

valor = 1;

function executar() {
    valor++;
}

function imprimir() {
    "use strict";
    console.log(valor);
}

// Continua a executar sem problemas pois o escopo de uma função não impacta nas outras
...
```

Exercícios:
Resolva os exercícios para praticar o conceito.

Aprenda mais
*w3schools.com
    https://www.w3schools.com/js/default.asp
    https://www.w3schools.com/js/js_scope.asp
    https://www.w3schools.com/js/js_strict.asp

*10 Day of Javascript
    https://www.hackerrank.com/domains/tutorials/10-days-of-javascript?filters%5Bstatus%5D%5B%5D=unsolved&badge_type=10-days-of-javascript
