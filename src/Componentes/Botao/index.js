import Image from 'next/image';
import style from './style.module.css';

export default function Botao(props) {

    return (

        <button className={`${style.botao}`} onClick={() => props.funcao(props.categoria)}>

            <Image className={style.imagem} src={props.imagem} />
            {props.categoria}

        </button>

    )
}