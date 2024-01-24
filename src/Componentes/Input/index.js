import style from './style.module.css';

import Image from 'next/image';

import Lupa from '../../../public/Assets/lupa.png';


export default function Input(props) {

    return (
        <div className={style.container}>

            <Image className={style.imagem} src={Lupa} alt='Lupa' />

            <input
                className={style.campo}
                type='text'
                placeholder='Pesquisa aqui um dos pratos do nosso cardápio'
                onChange={(event) => props.funcao(event.target.value)}
                value={props.value}
            />

        </div>
    )
}