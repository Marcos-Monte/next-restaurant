// Importação de componentes e Mecanismos de estilização
import Banner from "@/Componentes/Banner";
import { TemaProvedor } from "@/Services";
import "@/styles/globals.css";

// Importação de bibliotecas e / ou métodos
import Image from "next/image";
import { useState } from 'react';

// Importação de arquivos
import Lua from '../../public/Assets/moon.png';
import Sol from '../../public/Assets/sun.png';

export default function App({ Component, pageProps }) {

  const claro = 'light';
  const escuro = 'dark';

  const [tema, setTema] = useState(false);

  const trocarTema = () => {
    setTema(!tema)
  }

  const trocarImagemtema = (tema) => {
    return tema ? Sol : Lua;
  }

  return (
    <TemaProvedor value={{ tema, trocarTema }}>

      <div className={`App ${tema ? escuro : claro}`}>

        <Banner
          funcao={trocarTema}
          imagemBotao={<Image src={trocarImagemtema(tema)} />}
        />

        <Component {...pageProps} />;

      </div>

    </TemaProvedor>


  );
}
