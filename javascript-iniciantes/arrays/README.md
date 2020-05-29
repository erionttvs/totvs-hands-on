## Objetivo
Entender o funcionamento dos arrays em Javascript

## Conceito
Arrays são utilizados para armazenar informações em simples estruturas de dados, mas também fornecem uma serie de beneficios como funções prontas que podem ser uma ferramenta poderosa quando usados corretamente em JavaScript.

## Declaração
Arrays podem ser declarados com ou sem a keyword 'new Array', mas ambas maneiras tem o mesmo resultado.
O que muda é vantagem de ser mais rápido na hora de programar.
Ex:
```
var books = new Array('book1', 'book2', 'book3');
var books = ['book1', 'book2', 'book3'];
```
Para acessar seus elementos é necessario informar o indice da posição, lembrando que começa sempre na posição 0;
Ex:
```
var books =  ['book1', 'book2', 'book3']
var myBook = books[1]; // o 'book2' será atribuido a variavel myBook
```
## Atribuindo valores a posição
Para acessar qualquer posição existente no array é necessário utilizar o indice correspondente, assim é possível recuperar ou alterar seu conteudo como desejado.
Ex:
```
var array = ['maça', 'banana', 'morango'];
console.log(array[0]); // vai imprimir maçã
console.log(array[2]); // vai imprimir morango

array[0] = 'maracuja';
console.log(array[0]) // vai imprimir maracuja
```
## Arrays e tipos de dados
Os arrays em JavaScript permitem armazenar tipo de dados diferentes dentro da mesma instancia, portanto é necessário tomar cuidado para evitar possiveis erros.
Ex:
```
var genericArray = [1, 2.0, '3', 'JavaScript', {value:7}];
var soma = genericArray[0] + genericArray[1]
var subtracao = genericArray[1] - genericArray[2]
var divisao = genericArray[3] / genericArray[1]
console.log(soma); // imprimi 3
console.log(subtracao); // imprimi -1
console.log(divisao); // imprimi NaN (Not a number)
console.log(genericArray[4].value) // imprime 7
```
## Arrays Functions
Existem inumeras funções já disponiveis que o JavaScript no disponibiliza para utilizar com os arrays. Para utiliza-las é necessário apenas chamar uma vez que o array já foi declarado, seguem algumas abaixo:

### toString()
Imprimi todos os elementos do array em uma string unica separados por virgula.
Ex:
```
var linguagens = ['Java', 'JavaScript', 'NodeJS', 'Angular9'];
console.log(linguagens.toString()) // Imprime  'Java,JavaScript,NodeJS,Angular9'
```

### pop()
Remove ultimo elemento do array
Ex:
```
var linguagens = ['Java', 'JavaScript', 'NodeJS', 'Angular9'];
linguagens.pop();
console.log(linguagens) // Imprime ['Java', 'JavaScript', 'NodeJS']
```

### unshift()
Adiciona quantos items quiser ao inicio de um array
Ex:
```
var linguagens = ['Java', 'JavaScript', 'NodeJS', 'Angular9'];
linguagens.unshift('.net', 'Python');
console.log(linguagens) // Imprime ['.net','Python', 'Java', 'JavaScript', 'NodeJS', 'Angular9', '.net']
```

### push()
Adiciona um novo elemento ao final do array
Ex:
```
var linguagens = ['Java', 'JavaScript', 'NodeJS', 'Angular9'];
linguagens.push('.net');
console.log(linguagens) // Imprime ['Java', 'JavaScript', 'NodeJS', 'Angular9', '.net']
```

### shift()
Remove o primeiro item do array
Ex:
```
var linguagens = ['Java', 'JavaScript', 'NodeJS', 'Angular9'];
linguagens.shift();
console.log(linguagens) // Imprime ['JavaScript', 'NodeJS', 'Angular9']
```

### splice()
A função splice pode tanto adicionar como remover itens de um array.

a sintaxe da função é a seguinte:
splice(indice, quantidade, item1, ....., itemX)

indice: O indice utilizado para se adicionar os items.
quantidade: A quantidade de itens a serem removidos a partir da posicao escolhida pelo 'index'.
item1, ....., itemX: São os itens a serem adicionados separados por virgula. 
Exemplos:

#### Remover um item da posicao 3 do array
```
var linguagens = ['Java', 'JavaScript', 'NodeJS', 'Angular9'];
linguagens.splice(2, 1);
console.log(linguagens); // vai imprimir ['Java', 'JavaScript', 'Angular9']
```
#### Adicionar um item na posicao 3 do array
```
var linguagens = ['Java', 'JavaScript', 'NodeJS', 'Angular9'];
linguagens.splice(2, 0, 'Git');
console.log(linguagens); // vai imprimir ['Java', 'JavaScript', 'Git', 'NodeJS', 'Angular9']
```

#### Remover um item da posicao 3 do array e adicionar outro no lugar
```
var linguagens = ['Java', 'JavaScript', 'NodeJS', 'Angular9'];
linguagens.splice(2, 1, 'Git');
console.log(linguagens); // vai imprimir ['Java', 'JavaScript', 'Git', 'Angular9']
```
#### Remover itens da posicao 1 ao 2
```
var linguagens = ['Java', 'JavaScript', 'NodeJS', 'Angular9'];
linguagens.splice(0, 2);
console.log(linguagens); // vai imprimir ['NodeJS', 'Angular9']
```

## Aprenda mais
*w3schools.com
    https://www.w3schools.com/js/default.asp
    https://www.w3schools.com/js/js_arrays.asp
    https://www.w3schools.com/jsref/jsref_obj_array.asp

*10 Day of Javascript
    https://www.hackerrank.com/domains/tutorials/10-days-of-javascript?filters%5Bstatus%5D%5B%5D=unsolved&badge_type=10-days-of-javascript