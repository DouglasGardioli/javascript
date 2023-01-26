function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    

    if (fano.value.length < 3 || fano.value > ano || fano.value < 1900) {
        alert('Incorreto! Verifique os dados e tente novamente.')
    } else { 
        var idade = ano - Number(fano.value)
        var sex = document.getElementsByName('radsexo')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/hjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src','imagens/menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/mjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)
    }
}