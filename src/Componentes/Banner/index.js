import style from '../../styles/banner.module.css';

const Banner = (props) => {

    return (
        <section className={`${style.container} limitar-tela`}>

            <div className={style.banner}>

                <h1 className={style.titulo}>restaurant</h1>
                <p className={style.conteudo}>
                    De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados
                </p>

                <button className={style.botao_estilo} onClick={props.funcao}>
                    {props.imagemBotao}
                </button>

            </div>

        </section>
    )
}

export default Banner;