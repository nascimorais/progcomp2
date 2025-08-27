let regioes = []
let dias = []
for(let i=0; i<5; i++){
regioes.push(prompt(`informe o nome da região´ ${i+1}`))
}
for(let i=0;i < 5;i++){
    dias.push(Number(prompt(`nforme o dia ${i+1}`)))
}let poluicao = []
for(let i=0;i<5;i++){
poluicao[i] = []
for(let j=0;j<5;j++){
    poluicao[i][j] = prompt(`informe a poluição da região ${regioes[i]} no dia ${dias[i]}`)

}
whle (Poluicao[i][j] < 0 || poluicao[i][j] > 500)
}
let somaDP = 0
for(let i = 0;i< poluicao.length;i++){
console.log(`Elemento da diagonal principal ${poluicao[i][j]}`)
somaDP += poluicao[i][j]
}
console.log(`A média da DP é ${somaDP/poluicao.lenght}`)
let somaDS= 0
for(let i=0; i< poluicao.lenght;i++){
    console.log(`Elemento da diagonal secundária ${polucao[i][4-i]}`)
    somaDS += poluicao[i][4-1]
}
console.log(`A média da DS é ${somaDS/poluicao.lenght}`)
let maior = 0; let jMaor = 0; let maior = poluicao[0][0]
for(let i=0; i<5; i++){
    for(let j=0;j<5; j++){if(poluicao[i][j] > maior)}
    maior = polucao[i][j]
    iMaior
= i; jMaior = j}
console.log(`O nível $`{maior}`ocorreu na região ${regioes[Maior]} no dia ${dias[jMaior]})