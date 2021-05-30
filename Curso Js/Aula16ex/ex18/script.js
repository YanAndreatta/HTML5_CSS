let num = window.document.getElementById('txtN')
let selecV = window.document.getElementById('selecV')
let res = document.getElementById('res') 
let numS = []

function adicionar() {
    res.innerHTML = ``
    if(num.value.length == 0 || num.value < 1 || num.value > 100){
        window.alert('Valor inválido, digite um número válido')
    } else {
        let n = Number(num.value)
        let item = document.createElement('option')
        let test = numS.indexOf(n)
            if(test == -1){
                numS.push(n)
                item.text = `O valor ${n} adicionado.`
                selecV.appendChild(item)
            } else {
                window.alert('Este valor já foi inserido')
            }
    }
}

function finalizar(){
    let soma = 0
    let maiorN = 0  // Pode ser declarado como numS[0]
    let menorN = 0  // Pode ser declarado como numS[0]
    for(let pos in numS){
        soma += numS[pos]
        if (numS[pos] > maiorN) {
            maiorN = numS[pos]
        } 
        if (pos == 0){                            // Se declarar a variável menorN como "MenorN = numS[0] fica menor"
            menorN = numS[pos]                    // esse if ficaria desnecessário 
        } else if(numS[pos] < menorN){
                menorN = numS[pos]
            }
    }
    let media = soma/ numS.length
    
    res.innerHTML += `<br>Ao todo, temos ${numS.length}  números cadastrados.<br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
    res.innerHTML += `O maior valor informado foi ${maiorN}. <br>`
    res.innerHTML += `O menor valor informado foi ${menorN}. <br>`
    res.innerHTML += `A média dos valores digitados é ${media}.<br>`
}