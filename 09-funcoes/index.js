/*
    # Função simples #

    function nomeDaFuncao(){
        <bloco de execução>
    }

    nomeDaFuncao()

    Os nomes das funções deverão ser em cammelCase, considerando
    os princípios do código limpo.
*/

/*
    # Função com parâmetros #

    function nomeDaFuncao(parametro1, parametro2){
        <bloco de execução>
    }

    nomeDaFuncao(parametro1, parametro2)
*/

/*
    # Função de parâmetros com valor padrão #
    
    function nomeDaFuncao(parametro1 = valor){
        <bloco de execução>
    }

    nomeDaFuncao()
*/

// Função simples

function incentivarQuester(){
    alert("Muito bem! Você chegou ao JS, continue assim!")
}

incentivarQuester()

// Função com parâmetros

function soma(numero1, numero2) {
    return numero1 + numero2
}

alert(soma(1, 3))

// Função de parâmetros com valor padrão

function nome(nomeDoUsuario = 'Anônimo') {
    return nomeDoUsuario
}

alert(nome("Roberto"))
alert(nome())


