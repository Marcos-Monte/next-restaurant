import Image from 'next/image';
import style from '../../styles/botao.module.css';

export default function Botao(props) {

    return (

        <button
            className={`${style.botao} ${style[props.botaoClicado]}`}
            onClick={() => props.funcao(props.categoria)}
        >

            <Image className={style.imagem} src={props.imagem} />
            {props.categoria}

        </button>

    )
}