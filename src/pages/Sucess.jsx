import Head from 'next/head';
import Link from 'next/link';

import { Container, ContainerMargins } from '../styles/sucess';

export default function Sucess() {
  return (
    <>
      <Head>
          <title>Formulario enviado com sucesso | Almendra & Mota</title>
        </Head>
      <Container>
        <ContainerMargins className="margins">
          <h1>Mensagem enviada com sucesso. <i className="bi bi-check-lg"></i></h1>
          <Link href="/">
            <a>
              <button>Retornar ao site <i className="bi bi-arrow-bar-left"></i></button>
            </a>
          </Link>
        </ContainerMargins>
      </Container>
    </>
  )
};