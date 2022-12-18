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