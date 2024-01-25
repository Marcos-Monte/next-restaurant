import { useState } from 'react';

import style from './style.module.css';

import Botao from '../Botao';
import Input from '../Input';

import { filtrarProdutos, limitarCaracteres, mostrarCardLista, retornarCategorias } from '@/Services';

export default function Cardapio() {

    const categorias = retornarCategorias();

    const listaEntrada = filtrarProdutos('Entradas');

    const [listaProdutos, setListaProdutos] = useState(listaEntrada);
    const [textoBusca, settextoBusca] = useState('');


    const handleFiltrarProdutos = (categoria) => {
        setListaProdutos(filtrarProdutos(categoria))
        settextoBusca('')
    }

    const handleBuscarProdutos = (textoUsuario) => {
        settextoBusca(textoUsuario)

        setListaProdutos(limitarCaracteres(textoUsuario, listaEntrada))

    }

    return (

        <section className={`${style.secao} limitar-tela`}>

            <div className={style.container_botoes}>
                {

                    categorias.map((categoria, index) => (

                        < Botao key={index}
                            funcao={handleFiltrarProdutos}
                            categoria={categoria.categoria}
                            imagem={categoria.imagem}
                        />

                    )
                    )

                }

                <Input
                    funcao={handleBuscarProdutos}
                    value={textoBusca}
                />

            </div>

            <div className={style.cardapio}>

                <h2 className={style.titulo}>cardápio</h2>

                <div className={style.conteudo}>


                    {

                        mostrarCardLista(listaProdutos)

                    }

                </div>
            </div>

        </section>
    )
}