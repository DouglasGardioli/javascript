function tabuada() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('itab')

    if (num.value.length == 0) {
        alert('[ERRO] Preencha o campo do número e tente novamente')
        tab.innerHTML = ' '
    }
    else {
        let n = Number(num.value)
        tab.innerHTML = (`Tabuada do ${n}: <br>`)

    for (var c = 1; c <= 10; c++){
        tab.innerHTML += (`${n} x ${c} = ${(n * c)} <br>`)
    }
    }

}