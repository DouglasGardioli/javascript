function tabuada() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('itab')

    if (num.value.length == 0) {
        alert('[ERRO] Preencha o campo do número e tente novamente')
    }
    else {
        let n = Number(num.value)
        tab.innerHTML = ''
    for (var c = 1; c <= 10; c++){
        let item = document.createElement('option')
        item.text = (`${n} x ${c} = ${(n * c)} `)
        item.value = `tab${c}`
        tab.appendChild(item)
        }
    }
}
