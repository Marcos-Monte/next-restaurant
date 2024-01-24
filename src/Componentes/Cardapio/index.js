import { useState } from 'react';

import style from './style.module.css';

import Botao from '../Botao';
import Card from '../Card';

import ImagemBebidas from '/public/Assets/bebidas.png';
import ImagemCarnes from '/public/Assets/carne.png';
import ImagemEntrada from '/public/Assets/entrada.png';
import ImagemMassas from '/public/Assets/massa.png';
import ImagemSaladas from '/public/Assets/salada.png';
import ImagemSobremesas from '/public/Assets/sobremesa.png';

import { produtos } from '@/Data/data-produtos';

export default function Cardapio() {

    const categorias = [
        { categoria: 'Entradas', imagem: ImagemEntrada },
        { categoria: 'Massas', imagem: ImagemMassas },
        { categoria: 'Carnes', imagem: ImagemCarnes },
        { categoria: 'Bebidas', imagem: ImagemBebidas },
        { categoria: 'Saladas', imagem: ImagemSaladas },
        { categoria: 'Sobremesas', imagem: ImagemSobremesas }
    ]

    const [listaProdutos, setListaProdutos] = useState(produtos);

    const handleFiltrarProdutos = (categoria) => {

        setListaProdutos(
            produtos.filter(
                (produto) => produto.categoria === categoria
            )

        )
    }

    return (
        <section className={`${style.secao} limitar-tela`}>

            <div className={style.container_botoes}>
                {

                    categorias.map((categoria, index) => (

                        < Botao key={index}
                            funcao={handleFiltrarProdutos}
                            categoria={categoria.categoria} imagem={categoria.imagem} />

                    )
                    )

                }
            </div>

            <div className={style.cardapio}>

                <h2 className={style.titulo}>cardápio</h2>

                <div className={style.conteudo}>


                    {
                        listaProdutos.map(
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
                        )
                    }

                </div>
            </div>

        </section>
    )
}