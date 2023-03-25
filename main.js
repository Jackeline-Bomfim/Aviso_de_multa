
function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`


    if (vel > 60) {
        res1.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade.`
    }
    res2.innerHTML = `<p>Dirija sempre com cinto de segurança!</p>`
    clean.innerHTML = `<button type="reset" value="limpar" onclick="limpar();recarregarPagina()">Limpar</button>`
}

function limpar() {
    window.document.getElementById('res').remove()
    window.document.getElementById('res1').remove()
    window.document.getElementById('res2').remove()
    window.document.getElementById('clean').remove()
}


function recarregarPagina() {
    window.location.reload();
}