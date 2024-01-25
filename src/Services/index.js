// Importação de coleções de dados
import { categorias, produtos } from '@/Data/data-produtos';

// Funções que retornam coleções de dados
export const retornarColecao = () => {
    return produtos;
}

export const retornarCategorias = () => {
    return categorias;
}

// Funções de Filtragem de coleção de dados
export const filtrarProdutos = (categoria) => {
    return produtos.filter(
        (produto) => produto.categoria === categoria
    )
}

export const listaEntrada = (produtos) => {
    return filtrarProdutos(produtos)
}


//Função para buscar texto dentro de alguma propriedade do objeto de uma coleção
export const buscarProdutos = (texto) => {
    return produtos.filter(
        (produto) =>
            produto.nome.toLowerCase().includes(texto.toLowerCase()) ||
            produto.categoria.toLowerCase().includes(texto.toLowerCase())
    )
}

//Função que verifica um tamanho minimo de uma String antes de procurar se ela existe dentro do banco de Dados
export const limitarCaracteres = (texto, lista) => {
    return texto.length > 2 ? buscarProdutos(texto) : lista
}

// Importando componente 'Card' para usar na proxima função
import Card from '@/Componentes/Card';

//Função que verifica se uma lista é maior que zero. Se for imprimir os elementos da lista, senão dar mensagem indicada
export const mostrarCardLista = (lista) => {
    return lista.length > 0 ?

        lista.map(
            (produto) => (
                <Card
                    key={produto.id}
                    nome={produto.nome}
                    imagem={produto.imagem}
                    categoria={produto.categoria}
                    descricao={produto.descricao}
                    preco={produto.preco}
                />
            )
        ) :

        (<p>Nenhum produto encontrado</p>)
}
