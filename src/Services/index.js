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



