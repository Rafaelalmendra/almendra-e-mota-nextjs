import Head from 'next/head';
import { useState } from 'react';

import HomePage from '../components/Home';
import Expertises from '../components/Expertises';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';
import ModalFies from '../components/ModalFies';

export default function Home() {
  const [ modalFies, setModalFies ] = useState(true);

  return (
    <>
      <Head>
        <title>Almendra & Mota | Sociedade de advogados</title>
      </Head>
      {modalFies ?
        <ModalFies
          show={modalFies}
          setModalFies={setModalFies}
        /> 
      : null }
      <HomePage />
      <Expertises />
      <About />
      <Team />
      <Contact />
    </>
  )
};