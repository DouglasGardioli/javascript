function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('passo')
    let res = document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.lenght == 0) {
       
        window.alert('[Erro] Faltam dados. Revise os números e tente novamente!')

    } else {
        r.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)    

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }

    }
}