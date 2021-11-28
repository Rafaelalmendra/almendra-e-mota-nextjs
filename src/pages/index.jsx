import Head from 'next/head';

import HomePage from '../components/Home';
import Expertises from '../components/Expertises';
import { } from "../styles/home";
import About from '../components/About';
import Team from '../components/Team';

export default function Home() {
  return (
    <>
      <Head>
        <title>Almendra & Mota | Sociedade de advogados</title>
      </Head>
      <HomePage />
      <Expertises />
      <About />
      <Team />
    </>
  )
};