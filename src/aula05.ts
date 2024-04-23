/*
Aula 05:

Declarando variáveis "union types", que pode aceitar mais de um tipo.
Ex: let position:string|number = 'ABC'

Variáveis do tipo "any", pode receber qualquer valor.
Ex: 
*/

let langs = ['Python', 'JavaScript', 'C++']
let webs:string[] = []

langs.push('TypeScript')
webs.push('HTML', 'CSS')

console.log('\n', langs, '\n', webs, '\n')

// Union type:
let position:string|number = 'ABC'
console.log(position)
position = 123
console.log(position, '\n')

// Any type:
let anything:any = 321
anything = true
console.log(anything, '\n')
