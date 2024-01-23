import style from './style.module.css';

const Banner = () => {
    return (
        <section className={`${style.container} limitar-tela`}>

            <div className={style.banner}>

                <h1 className={style.titulo}>restaurant</h1>
                <p className={style.conteudo}>
                    De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados
                </p>

            </div>



        </section>
    )
}

export default Banner;