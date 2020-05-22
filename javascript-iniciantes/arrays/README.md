## Objetivo
Enteder o funcionamento dos arrays em Javascript

## Conceito

## Declaração
Arrays podem ser declarados com ou sem a keyword "new Array", mas ambas maneiras tem o mesmo resultado.
O que muda é vantagem de ser mais rápido na hora de programar.
Ex:
```
var books = new Array("book1", "book2", "book3");
var books = ["book1", "book2", "book3"];
```
Para acessar seus elementos é necessario informar o indice da posição, lembrando que começa sempre na posição 0;
Ex:
```
var books =  ["book1", "book2", "book3"]
var myBook = books[1]; // o "book2" será atribuido a variavel myBook
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
## Exercícios:
Resolva os exercícios para praticar o conceito.

## Aprenda mais
*w3schools.com
    https://www.w3schools.com/js/default.asp
    https://www.w3schools.com/js/js_arrays.asp

*10 Day of Javascript
    https://www.hackerrank.com/domains/tutorials/10-days-of-javascript?filters%5Bstatus%5D%5B%5D=unsolved&badge_type=10-days-of-javascript