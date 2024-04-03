/*
    let precoDecrescente = livros.preco( function (a, b){
        return a - b
    })
*/
// let precoDecrescente = preco.sort((a, b) => a -b)
let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click', ordenarPorPreco)     

function ordenarPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}