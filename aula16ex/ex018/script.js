
var valores = []

function addvalores() { // Adicionando valores

    let num = document.getElementById('inum')
    let res = document.getElementById('resultado')
    let list = document.getElementById('valores-list')
    let n = Number(num.value)

    if (valores.includes(n) || n < 1 || n > 100) { //Testando o número digitado
        alert('Valor inválido ou já atribuido!')
    } else { //Senão estiver incorreto, o valor é adicionado
        valores[valores.length] = n
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    }
    num.value = '' // Apagando valor da caixa e mantendo o foco
    num.focus()
}

function finalizar() { // finalizar a adição de valores e fazer todos os cálculos

    if (valores.length < 1) { // Erro ao tentar finalizar sem valor
        alert('Digite os valores antes de finalizar!')
    } else { // Tudo certo, hora de fazer os cálculos
        let res = document.getElementById('resultado')
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados</p>` //Total de numeros cadastrados

        var maior = valores[0] //Maior valor

        for (let c = 0; c < valores.length; c++) {
            if (valores[c] > maior) {
                maior = valores[c]
            }
        }
        res.innerHTML += `<p>O maior valor digitado foi ${maior}</p>`

        var menor = valores[0] // Menor valor

        for (let c = 0; c < valores.length; c++) {
            if (valores[c] < menor) { 
                menor = valores[c]
            }
        }
        res.innerHTML += `<p>O menor valor digitado foi ${menor}</p>`

        var soma = 0 // Soma dos valores

        for (let c = 0; c < valores.length; c++) {
            soma += valores[c]  
        }
        res.innerHTML += `<p>A soma dos valores é ${soma} </p>` 

        var media = soma / valores.length // Média dos valores

        res.innerHTML += `<p>A média entre os valores é ${media.toFixed(1)}</p>`
    }
}