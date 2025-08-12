let livro = {
    titulo: "Dom Casmurro",
    Autor: "Machado de Assís",
    ano: 1899,
    editora: "Livraria Garnier",
    paginas: 256
}

let software = {
    nome: "Steam",
    empresa: "Valve Corporation",
    lancamento: 2003
}
console.log(livro)
console.log(livro.Autor)


let pessoas = [
    {
        nome: "Kaiser",
        idade: 28,
        peso: 82,
        altura: 1.83
    },
    {
        nome: "Arthur Cervero",
        idade: 30,
        peso: 88,
        altura: 1.85
    },
    {
        nome: "Thiago Fritz",
        idade: 34,
        peso: 77,
        altura: 1.80
    },
    {
        nome: "Elizabeth Webber",
        idade: 28,
        peso: 60,
        altura: 1.70
    }
]
console.log(`Nome da pessoa na posição 3: ${pessoas[2].nome}`)


let fichas = [];

for (let i = 0; i < 3; i++) {
    let nome = prompt(`informe nome ${i + 1}:`);
    let idade = prompt(`informe idade ${i + 1}:`);
    let peso = Number(prompt(`informe peso ${i + 1}:`));
    let altura = Number(prompt(`informe altura ${i + 1}:`));

    let pessoa = {
        pessoa: pessoa,
        idade: idade,
        peso: peso,
        altura: altura
    };
    fichas.push(pessoa);
}