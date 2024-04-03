function calcularTotalLivrosDisponiveis(livros) {
    // Primeiro Incice === 0
    return livros.reduce((acc, livros) => acc + livros.preco, 0).toFixed(2)
}