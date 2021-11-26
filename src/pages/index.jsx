import Head from 'next/head';

import {
  Container,

} from "../styles/home"

export default function Home() {
  return (
    <>
      <Head>
          <title>Almendra & Mota | Sociedade de advogados</title>
      </Head>
      <Container >
        <div className="margins">
          <h1>Precisando de um advogado?</h1>
          <p>
            Somos especialistas em direito Civil, Consumidor,
            Trabalhista, Tributário e Criminal.
          </p>
          <button>
            Fale com um especialista
            <i className="bi bi-whatsapp"></i>
          </button>
        </div>
      </Container>
    </>
  )
}
