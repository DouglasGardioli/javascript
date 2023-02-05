function contar() {
    let ini = document.getElementById('icont')
    let fim = document.getElementById('fcont')
    let pas = document.getElementById('pcont')
    res = document.getElementById('resultado')

    // dados não preenchidos
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('Erro! Há dados não preenchidos. Tente Novamente')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        res.innerHTML = 'Contando: '
        // passo inválido
        if (p <= 0) {
            alert(`Passo [${p}] é inválido. Consideramos então Passo [1]`)
            p = 1
        }

        if (i < f) { // contagem progressiva
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
                res.innerHTML += String.fromCodePoint(0x1F449)
            }
        } else { // contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} `
                res.innerHTML += String.fromCodePoint(0x1F449)
            }
        }
        res.innerHTML += String.fromCodePoint(0x1F3C1)
    }
}