import Banner from "@/Componentes/Banner";
import { TemaProvedor } from "@/Services";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {

  const claro = 'light';
  const escuro = 'dark';

  const [tema, setTema] = useState(false);

  const trocarTema = () => {
    setTema(!tema)
  }

  return (
    <TemaProvedor value={{ tema, trocarTema }}>

      <div className={`App ${tema ? escuro : claro}`}>

        <Banner
          funcao={trocarTema}
        />

        <Component {...pageProps} />;
      </div>

    </TemaProvedor>
  );
}
