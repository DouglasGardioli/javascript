function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var msg2 = document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}h.`

    if (hora >= 6 && hora < 12) {
        img.src = 'dia.png'
        document.body.style.backgroundColor = '#d4bd89'
        msg2.innerHTML += `Bom dia!`
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#d48771'
        msg2.innerHTML += `Boa Tarde!`
    } else {
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#1a2f4d'
        msg2.innerHTML += `Boa noite!`
    }
}