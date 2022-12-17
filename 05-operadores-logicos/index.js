/*
    == ---- igual ---- A == B ---- verdadeiro se o valor de A for igual ao B
    === ---- idêntico ---- A === B ---- verdadeiro se o tipo e o valor de A for idêntico ao B
    !== ---- não idêntico ---- A !== B ---- verdadeiro se o tipo e o valor de A não for idêntico ao B
    != ---- diferente ---- A != B ---- verdadeiro se o valor de A for diferente de B
    < ---- menor que ---- A < B ---- verdadeiro quando A for menor que B
    <= ---- menor igual que ---- A <= B ---- verdadeiro quando A for menor ou igual a B
    > ---- maior que ---- A > B ---- verdadeiro quando A for maior que B
    >= ---- maior igual que ---- A >= ---- verdadeiro quando A for maior ou igual B
    && ---- E (AND) ---- (A > B) && (A === B) ---- verdadeiro quando 2 condições forem verdadeiras ou falsas
    || ---- OU (OR) ---- (A > B) || (A == B) ---- verdadeiro quando ao menos 1 condição for verdadeira
    ! ---- NÃO (NOT) --- (!(A === B)) ---- inverte o valor lógico de uma condição
*/

// == ---- igual ---- A == B ---- verdadeiro se o valor de A for igual ao B

let A = 3
let B = 3

console.log(A == B)

// === ---- idêntico ---- A === B ---- verdadeiro se o tipo e o valor de A for idêntico ao B

A = "3"
B = "3"

console.log(A === B)

// !== ---- não idêntico ---- A !== B ---- verdadeiro se o tipo e o valor de A não for idêntico ao B

A = 3
B = "3"

console.log(A !== B)

// != ---- diferente ---- A != B ---- verdadeiro se o valor de A for diferente de B

A = 3
B = 1

console.log(A != B)

// < ---- menor que ---- A < B ---- verdadeiro quando A for menor que B

A = 2
B = 3

console.log(A < B)

// <= ---- menor igual que ---- A <= B ---- verdadeiro quando A for menor ou igual a B

A = 2
B = 2

console.log(A <= B)

// > ---- maior que ---- A > B ---- verdadeiro quando A for maior que B

A = 3
B = 2

console.log(A > B)

// >= ---- maior igual que ---- A >= ---- verdadeiro quando A for maior ou igual B

A = 3
B = 3

console.log(A >= B)


// && ---- E (AND) ---- (A > B) && (A == B) ---- verdadeiro quando 2 condições forem verdadeiras ou falsas

A = 4
B = "4"

console.log((A >= B) && (A == B))

// || ---- OU (OR) ---- (A > B) || (A === B) ---- verdadeiro quando ao menos 1 condição for verdadeira

A = 4
B = 3

console.log((A > B) || (A == B))

// ! ---- NÃO (NOT) --- (!(A === B)) ---- inverte o valor lógico de uma condição

A = "3"
B = "3"

console.log(!(A === B))