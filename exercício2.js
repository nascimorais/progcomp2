let funcionarios = []

for (let i = 0; i < 6; i++){
    let nome = prompt(`Informe o nome do funcionário ${i+1}:`)
    let cargo = prompt(`Informe o cargo do funconário ${i+1}:`).toLocaleLowerCase()
    let salario = Number(prompt(`Informe o salário do funconario ${i+1}:`))
    let tempoServico = Number(prompt(`Informe o tempo de serviço do funcionário ${i+1}:`))

    let livro = {
        nome: nome,
        cargo: cargo,
        salario: salario,
        tempo: tempo
    }
    funcionarios.push(livro);
}
for(let i =0; i<6 ; i++){
    if(funcionarios[i].salario > 5000 && funcionarios[i].tempo > 5){
        console.log(funcionarios[i])
    } 
    if(funcionarios[i].salario > maiorSalario.salario){
        maior = funcionarios[i]
    }
}
console.log(`Funcionario com maior salário ${maior.nome}`)
console.log(`Média salarial $(soma/funcionarios.length}`)
console.log(`Qtde de gerentes ${qtde}`)