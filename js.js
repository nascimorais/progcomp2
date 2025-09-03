let frase = "estou estudando JS"

frase
//`estou estudando JS`
frase[4]
//`u`
frase.length
//`18`
frase.toUpperCase()
//`ESTOU ESTUDANDO JS`
frase.toLowerCase{}
//`estou estudando js`
frase.toUpperCase().includes(`js`)
//`false`
frase.toUpperCase().includes(`JS`)
//`true`
frase.slice(-5)
//`do JS`

let frase = "    hoje, pra variar foi um dia corrido       "  
frase.trim()
//"hoje, pra variar foi um dia corrido"  
let resumo = "Hoje foi um dia com muitas atividades tensas"
resumo.length
//44
resumo.split(" ").lenght
//8
let aprovados =
"João,José,pedro"
let VetApro = aprovados.split(",")
VetApro 
//['João','José','pedro']
let vet = beecrowd.split("\n")



let palavra = prompt("Informe uma palavra")
// tira os espaços antes e depois
let limpa = palavra.trim()
// cria um vetor da palavra limpa
let vetor = limpa.split("")
// inverte palavra do tipo vetor
let invertida = vetor.reverse()
// converte vetor em string
let invertidaString = invertida.join("")

if (invertidaString === limpa){ // compara duas strings
    alert('São palíndromas')
}
else alert('Não são palíndromas')
/*

let palavra = prompt("Informe uma palavra")
let invertida = palavra.trim().split("").reverse().join()

if (palavra.trim() === invertida){ // compara duas strings
    alert('São palíndromas')
}
else alert('Não são palíndromas') */
:)