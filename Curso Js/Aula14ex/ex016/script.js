function contar() {
    let inic = window.document.getElementById('txtInic')
    let fim = window.document.getElementById('txtFim')
    let passo = window.document.getElementById('txtPasso')
    let res = window.document.querySelector('div#res')
    
    if (inic.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inic.value)    
        let f = Number(fim.value)      
        let p = Number(passo.value) 
        /* Neste caso poderia ser usado dentro do FOR o "Number(var.value)"
            Ao invés de tratar cada várias e joga em outra!
        */
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
