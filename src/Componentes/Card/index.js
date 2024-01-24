import Image from 'next/image';
import style from './style.module.css';


const Card = (props) => {
    return (
        <div className={style.container}>

            <Image className={style.imagem} src={props.imagem} alt={props.nome} />

            <div className={style.subcontainer}>

                <div className={style.container_descricao}>

                    <h3 className={style.nome}>{props.nome}</h3>

                    <p className={style.categoria}>{props.categoria}</p>

                    <p className={style.descricao}>{props.descricao}</p>

                </div>

                <p className={style.preco}>
                    {`R$ ${String(
                        props.preco.toFixed(2)
                    ).replace('.', ',')}`}
                </p>


            </div>

        </div>
    )
}

export default Card;