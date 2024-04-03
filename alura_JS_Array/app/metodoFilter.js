const botoes = document.querySelector('.btn')
let valorLivro = document.querySelector('.value')

botoes.forEach(btn => addEventListener('click', filtrarLivros))

function filtrarLivros(){
    // No HTML essa CATEGORIA estava como VALUE
    // O VALUE identidica qual foi CLICADO

    // O THIS indica que é no BOTÃO CLICADO
    const elementoBtn = document.querySelector(this.id)
    const categoria  = elementoBtn.value

    let livrosFiltrado = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivros(livrosFiltrado)

    if(categoria == 'disponivel'){
        const valorTotal = calcularTotalLivrosDisponiveis(livrosFiltrado)
        exibirValorTotalNaTela(valorTotal)
    }
}   

function filtrarPorDisponibilidade() {
    return livro.filter(livro => livro.quantidade > 0)
}


function filtrarPorCategoria(categoria) {
    return livro.filter(livro => livro.categoria == categoria)
} 

function exibirValorTotalNaTela(valorTotal) {
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
}

