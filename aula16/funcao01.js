//Função para testar par ou ímpar
function parimp(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

/* Passando o retorno para a variável e mostrando 
let res = parimp(5)
console.log(res)
*/

//Mostrando o retorno
console.log(parimp(265))