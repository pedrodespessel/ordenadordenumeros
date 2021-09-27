var an = []
function adic () {
    var n = document.getElementById('numero').value
    var n2 = Number(n)
        if (n != 0 && n2<100) {
            an.push(n2)
            var res = document.getElementsByTagName('p')[1]
            res.innerHTML += `Valor ${n2} adicionado com sucesso!<p>`
        }
         else { window.alert('Digite um número entre 1 e 100')}
    }
function final() {
    var res2 = document.getElementById('txt2')
    res2.innerHTML = `foram inseridos, ${an.length} valores<br>Os valores, foram: ${an}<br>de forma ordenada: ${an.sort()}`}
