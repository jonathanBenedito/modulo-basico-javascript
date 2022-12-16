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
    ```
    var nomePessoa = "Roberto"
    const emailPessoa = "roberto@gmail.com"
    let telefonePessoa = "5198742222"
    ```
    

### Escopos

- `var` → Variáveis de escopo global, podem ser acessadas fora do bloco;
- `const` → Variáveis de escopo local e não podem ser alteradas depois de declaradas;
- `let` → Variáveis de escopo local e seus valores podem ser alteradas a qualquer momento;