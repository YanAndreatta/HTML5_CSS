let num = [ 5, 8, 2, 9, 3]
//num[5] = 6
//num.push(7)

//num.push(1) A ordem do .push e o .sort faz diferença
//num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
//console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(10) // Caso o valor não seja encontrado dentro do Array indexOf retorna (-1)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

let v = [3, 2, 5, 6]
let menorN = 0
for(let pos in v){
    if (pos == 0){
        menorN = v[pos]
    } else if (v[pos] < menorN) {
        menorN = v[pos]
    }
}
console.log(menorN)