const elementoInserirLivros = document.getElementById('livro')
const elementoValorTotal    = document.getElementById('valor_total_livros_disponiveis')

// listaDeLivros -> Novo Parametro criado (aqui)
// Faz a função e cria novo parâmetro
function exibirLivrosNaTela(listaDeLivros){
    elementoValorTotal = ' ' // Valor do Elemento é "limpado"
    elementoInserirLivros.innerHTML = ' '
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel'
        elementoInserirLivros.innerHTML += `
            <div class="livro">
            <img class="${disponibilidade}l" src="${livro.imagem}"
            alt="${livro.alt}" />
                <h2 class="livro__titulo">
                    ${livro.h2}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <-- toFixed para consertar numero de casas --!> 
                <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}/span>
                </div>
            </div>
        `
    })
}

// O valor que resulta no IF pode ser uma VARIÁVEL
/*
    function VerificarDisponibilidade() {
        if (livro.quantidade > 0) {
            return 'livro_imagens'
        } else {
            return 'livro_imagens indisponivel'
        }   
    }
*/