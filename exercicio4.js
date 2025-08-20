let matriz = []
for(let i = 0; i< 4; i++ ){
    for(let j = 0; j < 7; j++ ){
    matriz[i][j] = parsecInt(Math.random() * 100)
    }
}
 
 let media
 let somaSemana 

console.log(matriz)
let soma = 0
for(let i = 0; i < 4; i++){
    soma = 0 // novo vendedor
    for(let j = 0; j < 7; j++){
        soma = soma + matriz[i][j]
    }
    console.log(`Vendedor ${i} vendeu ${soma}`)
    // console.log (`Vendedor ${}vendeu ${soma[i]}`)
}
//soma das vendas (colunas)
for(let i = 0; i < 4; i++){
    for(let j = 0; j < 7; j++){
    soma = soma + matriz[j]
    }
 console.log(`Total de vendas no dia ${j} é ${soma}`)
}
let somaPordia
somaPordia = 0
for(j = 0; j < 7; j++){
    somaPordia = 0
for(let i = 0; i < 4; i++){
    somaPordia = somaPordia + mat[i][j]
}
console.log(`Total de vendas no dia ${j} é ${somaPorda}`)
}
let maior = mat[0][0]
let iMaior = 0
let jMaior = 0
for( let i=0; i<4;i++){
    for(let j=0;j<7;j++){
        if(mat[i][j] > maior){
            maior = mat[i][j]
        }
        //MEDIA DAS VENDAS
        let somaMedia = 0
        for(let i = 0; i<4; i++){
            for(let j)
        }
    }
}