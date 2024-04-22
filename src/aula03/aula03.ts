/*
Aula 03:

Compilação do arquivo TypeScript para o JavaScript usando uma determinada versão do ECMAScript.
Ex: tsc aula03\aula03.ts --target "ES2021"

O "ESNEXT" já utiliza a última versão do ECMAScript.
Ex: tsc aula03\aula03.ts --target "ESNEXT"

Arquivo de help do tsc.
Ex: tsc -h

Gerar arquivo de configuração do TypeScript.
Ex: tsc --init

Configurar os parametros: "target", "removeComments", "outDir", "rootDirs" e outros.

Usando o arquivo de configuração do TypeScript, para compilar os arquivos TypeScript para o JavaScript de uma vez.
Ex: tsc
*/

class User {
    id = null
    name = null
    email = null
    constructor(id:any, name:any, email:any) {
        this.id = id
        this.name = name
        this.email = email
    }
}

let newUser = new User(1, 'Leandro', 'leandrocardosodev@gmail.com')

console.log(newUser.id, newUser.name, newUser.email)
