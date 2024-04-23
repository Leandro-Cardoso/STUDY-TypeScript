/*
Aula 06:

Outras formas de declaração de tipo de array.
Ex 1: let numeros:Array<number> = [1, 2, 3]
Ex 2: let valores:Array<string|number> = ['A', 1, 'B', 7, 'C', 10]
Ex 3: let outros:(string|boolean)[] = ['isDead', false, 'isTalking', true]

Inserir valor no inicio do array.
Ex: numeros.unshift(0)

Remove valor no inicio do array.
Ex: numeros.shift()

Array constante.
Ex: let numerosCost:ReadonlyArray<number> = [10, 20, 30]
*/

let numeros:Array<number> = [1, 2, 3]
let valores:Array<string|number> = ['A', 1, 'B', 7, 'C', 10]
let outros:(string|boolean)[] = ['isDead', false, 'isTalking', true]

console.log('\n', numeros)
console.log(valores)
console.log(outros, '\n')

// Inserir valor no inicio do array:
numeros.unshift(0)
console.log(numeros, '\n')

// Remove valor no inicio do array:
numeros.shift()
console.log(numeros, '\n')

// Array constante:
let numerosCost:ReadonlyArray<number> = [10, 20, 30]
console.log(numerosCost, '\n')
