# Índice das Aulas Javascript Básico
📄 Link de acesso aos <a href="https://www.notion.so/Javascript-B-sico-72e0f87d21f44079b5af798419f857a2">resumos</a>. 

🖼 Link de acesso a <a href="https://jonathanbenedito.github.io/modulo-basico-javascript/">página</a>.

<!-- TABLE OF CONTENTS -->
## Conteúdo
<ul>
    <li>
        <a href="#aula-01---primeiro-código">Aula 01 - Primeiro Código (Código: window)</a>
    </li>
    <li>
        <a href="#aula-02---console-e-comentário">Aula 02 - Console e Comentário (Código: console.log)</a>
    </li>
    <li>
        <a href="#aula-03---declarando-variáveis">Aula 03 - Declarando Variáveis</a>
    </li>
    <li>
        <a href="#aula-04---tipos-primitivos-de-variáveis">Aula 04 - Tipos Primitivos de Variáveis</a>
    </li>
    <li>
        <a href="#aula-05---operadores-lógicos">Aula 05 - Operadores Lógicos</a>
    </li>
    <li>
        <a href="#aula-06---operadores-matemáticos">Aula 06 - Operadores Matemáticos</a>
    </li>
    <li>
        <a href="#aula-07---laços-de-repetição">Aula 07 - Laços de Repetição</a>
    </li>
    <li>
        <a href="#aula-08---condicionais">Aula 08 - Condicionais</a>
    </li>
</ul>

## Aula 01 - Primeiro Código

1. alert()
    ```
    window.alert("Olá mundo!")
    ```

2. confirm()
    ```
    window.confirm("Certeza que quer excluir esse usuário?")
    ```
3. prompt()
    ```
    window.prompt("Digite sua idade")
    ```

## Aula 02 - Console e Comentário

1. console.log()
    ```
    console.log("Oi!")
    ```

2. comentário em linha
    ```
    // COMENTÁRIO DE LINHA console.log("Olá mundo!")
    ```
3. comentário em bloco
    ```
    /*
        COMENTÁRIO DE BLOCO
        console.log("Oi!")
    */
    ```

## Aula 03 - Declarando Variáveis

### Anatomia
    var nomePessoa = "Roberto"
    const emailPessoa = "roberto@gmail.com"
    let telefonePessoa = "5198742222"
    

### Escopos

- `var` → Variáveis de escopo global, podem ser acessadas fora do bloco;
- `const` → Variáveis de escopo local e não podem ser alteradas depois de declaradas;
- `let` → Variáveis de escopo local e seus valores podem ser alteradas a qualquer momento;

## Aula 04 - Tipos Primitivos de Variáveis

    let nome = 'Roberto' // string
    let numero = 1 // Number
    let usuarioVerificado = false // boolean
    let pessoa = null // null
    let telefone = undefinied // undefined

- `string`→ Variáveis de texto, ficam sempre entre aspas;
- `Number`→ Variáveis de número, podem ser decimais ou inteiros;
- `boolean` → Variáveis de lógica, podem ser `true` ou `false`;
- `null` → Variáveis nulos, valores vazios;
- `undefined` → Variáveis de nenhum tipo definido;

## Aula 05 - Operadores Lógicos

    ==
    ===
    !== 
    != 
    < 
    <= 
    > 
    >= 
    && 
    ||
    !
- `==` (igual)
    
    ```jsx
    let A = 3
    let B = 3
    
    console.log(A == B)
    ```
    
- `===` (idêntico)
    
    ```jsx
    A = "3"
    B = "3"
    
    console.log(A === B)
    ```
    
- `!==` (não idêntico)
    
    ```jsx
    A = 3
    B = "3"
    
    console.log(A !== B)
    ```
    
- `!=` (diferente)
    
    ```jsx
    A = 3
    B = 1
    
    console.log(A != B)
    ```
    
- `<` (menor que)
    
    ```jsx
    A = 2
    B = 3
    
    console.log(A < B)
    ```
    
- `<=` (menor igual que)
    
    ```jsx
    A = 2
    B = 2
    
    console.log(A <= B)
    ```
    
- `>` (maior que)
    
    ```jsx
    A = 3
    B = 2
    
    console.log(A > B)
    ```
    
- `>=` (maior igual que)
    
    ```jsx
    A = 3
    B = 3
    
    console.log(A >= B)
    ```
    
- `&&` (AND)
    
    ```jsx
    A = 4
    B = "4"
    
    console.log((A >= B) && (A == B))
    ```
    
- `||` (OU)
    
    ```jsx
    A = 4
    B = 3
    
    console.log((A > B) || (A == B))
    ```
    
- `!` (NOT)
    ```jsx
    A = "3"
    B = "3"

    console.log(!(A === B))
    ```

## Aula 06 - Operadores Matemáticos
```jsx
// Operações matemáticas

let a = 3
let b = 2

// Adição
console.log(a + b)

// Subtração
console.log(a - b)

// Multiplicação
console.log(a * b)

// Divisão
console.log(a / b)

// Módulo (Resto da divisão)
console.log(a % b)

// Concatenar valor: Usando + com diferentes variáveis irão juntar seus valores no 
// formato string

let primeiroValor = 4
let segundoValor = "2"

console.log(primeiroValor + segundoValor)
```

## Aula 07 - Laços de Repetição
```jsx
// for(inicializador; condição; incremento)

for(let i = 0; i < 5; i++) {
    console.log(i)
}

// while(condição)

let a = 10
let b = 15

while(a < b) {
    console.log('incrementando a variavel a ' + a)
    a++
}

// do {} while(condição)

var i = 1

do{
    console.log('entrou ' + i)
    i++
}while(i <= 5)
```

## Aula 08 - Condicionais

```jsx
// Condição if

let nomeFilme = 'Batman vs Superman'

if (nomeFilme === 'Vingadores') {
    console.log('É o filme dos Vingadores')
} else if (nomeFilme === 'Batman vs Superman') {
    console.log('É o filme do Batman vs Superman')
} else {
    console.log('É outro filme')
}

// Operador ternário

nomeFilme === 'Vingadores' ? console.log('É o filme dos Vingadores') : console.log('É outro filme')

// Switch

switch (nomeFilme) {
    case 'Vingadores':
        console.log('É o filme dos Vingadores')
        break
    case 'Batman vs Superman':
        console.log('É o filme do Batman vs Superman')
        break
    case 'Senhor dos Anéis':
        console.log('É o filme do Senhor dos Anéis')
        break
    default:
        console.log('É outro filme')
        break
}
```
