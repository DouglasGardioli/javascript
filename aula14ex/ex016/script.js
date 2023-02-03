function contar() {
    var i = document.getElementById('inicio')
    var f = document.getElementById('fim')
    var p = document.getElementById('passo')
    var r = document.getElementById('resultado')

    if (i.value == '' || f.value == '') {
       
        r.innerHTML = ('Impossível contar... Revise os números e tente novamente!')

    } else {
        if (p.value == '' || p.value == 0) {
            p.value = 1
            alert('Passo não inserido! Consideraremos Passo 1.')
        }

        r.innerHTML = ('Contando: ')

        if (i.value < f.value) {
            c = Number(i.value)
            while (c <= f.value) {
                r.innerHTML += (c)
                c += p.value
            }
        } else {
            c = Number(f.value)
            while (c >= i.value) {
                r.innerHTML += (c)
                c -= p.value
            }
        }
    }
}