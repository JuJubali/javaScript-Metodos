// Dizer onde os livros estão 
let livros = []
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json' 
getBuscarLivrosDaApi()

// Banco de Dados assíncrono
async function getBuscarLivrosDaApi (){
    // O await é uma promessa       
    const res = await fetch(endpointDaApi)
    livros = await res.json()
    // AWAIT para visualizar a promessa em livros
    livros = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto) // FALTA PARAMETRO
}

// paraCada (livro => {faça  isso}) 
// Pega CADA elemento da Array e executa um FUNÇÃO com ela
// Passar novo parâmetro "livro"


const livrosPromocao = livros.map( x => x (x * 30) / 100)

/*
    const arrayUm = [1, 2, 3, 4]
    const arrayDoMap = arrayUm.map( x => x * 2);
    console.log(arrayDoMap)
    resultado = [ 2, 4, 6, 8]

    O map: Passa por cada elemento da Array. Executa uma função em cada elemento. Devolve em um segundo Array
*/