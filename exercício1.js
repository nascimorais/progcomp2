    let livros = []

    for (let i = 0; i < 5; i++){
        let titulo = prompt(`Informe o titulo do livro ${i+1}:`)
        let autor = prompt(`Informe o autor do livro ${i+1}:`)
        let ano = prompt(`Informe o ano de publicação do livro ${i+1}:`)
        let paginas = Number(prompt(`Informe o número de páginas do livro ${i+1}:`))

        let livro = {
            titulo: titulo,
            autor: autor,
            ano: ano,
            paginas: paginas
        }
        livros.push(livro);
    }

    let maiorDe300Pags = []
    let maiorQuantidadePags = livros[0].paginas
    let maiorQuantidadePagsTitulo = livros[0].titulo
    let somaPags = 0

    for (let i = 0; i < livros.length; i++) {
        if (livros[i].paginas > 300){
            maiorDe300Pags.push(livros[i].titulo)
        }

        if (livros[i].paginas > maiorQuantidadePags){
            maiorQuantidadePagsTitulo = livros[i].titulo
        }

        somaPags += livros[i].paginas
    }

    let media = somaPags/livros.length

    console.log("O titulo dos livros com mais de 300 páginas são: ", maiorDe300Pags)
    console.log("O título com maior quantidade de páginas é: ", maiorQuantidadePagsTitulo)
    console.log("A média de páginas de dos livros cadastrados é: ", media)


