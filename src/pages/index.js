
// Importação de componentes e Mecanismos de estilização
import Cardapio from "@/Componentes/Cardapio";

// Importação de bibliotecas e / ou métodos
import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Restaurant</title>
      </Head>

      <Cardapio />

    </>
  );
}
