function calcular() {
    var salario = document.getElementById('salario')
    var reajuste = document.getElementById('reajuste')

    var sal = Number(salario.value)
    var rea = Number(reajuste.value)

    var preco_final = sal - (sal * (rea/100))
    if (preco_final == 0){
        preco_final = 0
    }
    document.write(`Preço final foi de ${preco_final}`)

}



var botao = document.getElementById('botao01');

function expressar_botao() {
    botao.innerText = 'Clique em mim!';
}

function sair_botao() {
    botao.innerText = 'Calcular';
}