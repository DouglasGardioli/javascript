/* Estrutura enquanto com verificação no final
var c = 1

do {
    console.log(`${c}`)
    c++
} while (c <= 6)
*/

/* Estrutura enquanto com verificação no começo
while (c <= 6) {
    console.log(`${c}`)
    c++
}
*/

/* Ganhar 30 centavos no primeiro mês e ir dobrando a cada mês
var c = 1
var m = 2
var n = 0.30
while (c <= 24) {
    n *= 2
    console.log(`2 * ${m} = ${n}`)
    m = n
    c++
} */

/* Par ou ímpar usando while e condicional if/else
var c = 0

while (c <= 10) {
    if (c % 2 == 0) {
        console.log(`[${c}] é par`)
    }
    else {
        console.log(`[${c}] é ímpar`)
    }
    c++
}
*/

/* Verificar números primos de forma decrescente
var n = 10
var d = n
var m = 0

do {

m = 0
d = n

while (d > 0) {
    if (n % d == 0) {
        m++
    }
    d--
}


if (m <= 2) {
    console.log (`O número ${n} é primo`)
} else {
    console.log (`O número ${n} não é primo`)
}

n-- 

} while (n >= 1)
*/