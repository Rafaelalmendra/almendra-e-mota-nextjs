import Head from 'next/head';

import HomePage from '../components/Home';
import Expertises from '../components/Expertises';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';
import { } from "../styles/home";

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
      <Contact />
    </>
  )
};