import style from './style.module.css';

import Botao from '../Botao';

import ImagemBebidas from '/public/Assets/bebidas.png';
import ImagemCarnes from '/public/Assets/carne.png';
import ImagemEntrada from '/public/Assets/entrada.png';
import ImagemMassas from '/public/Assets/massa.png';
import ImagemSaladas from '/public/Assets/salada.png';
import ImagemSobremesas from '/public/Assets/sobremesa.png';

export default function Filtragem() {

    const categorias = [
        { categoria: 'entrada', imagem: ImagemEntrada },
        { categoria: 'massas', imagem: ImagemMassas },
        { categoria: 'carnes', imagem: ImagemCarnes },
        { categoria: 'bebidas', imagem: ImagemBebidas },
        { categoria: 'saladas', imagem: ImagemSaladas },
        { categoria: 'sobremesas', imagem: ImagemSobremesas }
    ]

    return (
        <section className={`${style.secao} limitar-tela`}>

            <div className={style.container_botoes}>
                {

                    categorias.map((categoria, index) => (

                        < Botao key={index} categoria={categoria.categoria} imagem={categoria.imagem} />

                    )
                    )

                }
            </div>

        </section>
    )
}