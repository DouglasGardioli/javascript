
var valores = []

function addvalores() {

    let num = document.getElementById('inum')
    let res = document.getElementById('resultado')
    let list = document.getElementById('valores-list')
    let n = Number(num.value)

    if (valores.includes(n) || n < 1 || n > 100) {
        alert('Valor inválido ou já atribuido!')
    } else {
        valores[valores.length] = n
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        list.appendChild(item)
    }
    res.innerHTML = ''
}

function finalizar() {

    if (valores.length < 1) {
        alert('Digite os valores antes de finalizar!')
    } else {
        let item = document.createElement('p')

        let res = document.getElementById('resultado')
        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados <br>`

        var maior = 0

        for (let c = 0; c < valores.length; c++) {
            if (valores[c] > maior) {
                maior = valores[c]
            }
        }
        res.innerHTML += `O maior valor digitado foi ${maior} <br>`

        var menor = maior
        for (let c = 0; c < valores.length; c++) {
            if (valores[c] < menor) { 
                menor = valores[c]
            }
        }
        res.innerHTML += `O menor valor digitado foi ${menor}<br>`

        var soma = 0

        for (let c = 0; c < valores.length; c++) {
            soma += valores[c]  
        }
        res.innerHTML += `A soma dos valores é ${soma} <br>` 

        var media = soma / valores.length

        res.innerHTML += `A média entre os valores é ${media} <br>`
    }
}