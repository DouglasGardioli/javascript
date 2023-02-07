
var valores = []

function addvalores() {

    let num = document.getElementById('inum')
    let res = document.getElementById('resultado')
    let list = document.getElementById('valores-list')
    let mat = 0
    let n = Number(num.value)

    if (valores.includes(n) || n < 1 || n > 100) {
        alert('Valor inválido ou já atribuido!')
    } else {
        valores[mat] = n
        mat++
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        list.appendChild(item)
    }
}

function finalizar() {
    let res = document.getElementById('resultado')
    res.innerHTML = ''
    res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados`
}