import Head from 'next/head';
import { Container, TextContainer } from '../../styles/fies';

export default function Fies() {
  return (
    <Container>
       <Head>
        <title>Almendra & Mota | FIES</title>
      </Head>
      <TextContainer>
      <h1>TRANSFERÊNCIA DO FIES PARA O CURSO DE MEDICINA</h1>
      <p>
        O curso de Medicina possui uma alta concorrência para aquisição do FIES em razão da pouca quantidade de vagas ofertadas.
        <br />
        <br />
        Diante disso, muitos alunos utilizam o método de transferência do financiamento advindo de um curso cuja concorrência seja menor.
        <br />
        <br />
        Visando dificultar tal prática, a portaria MEC nº 535, de 12 de junho de 2020, a qual foi editada na intenção de ser aplicada inclusive retroativamente, dispõe que a transferência do FIES somente será permitida no caso em que a média aritmética das notas obtidas pelo estudante no ENEM, utilizada para sua admissão ao FIES, for igual ou superior à média aritmética do último estudante pré-selecionado no curso de destino.
        <br />
        <br />
        Entretanto, na via judicial, é possível afastar a dita portaria com fundamento, dentre outros, nos fins a que se destina o FIES, qual seja, acesso do estudante carente ao ensino superior. 
        <br />
        <br />
        Diversas decisões da Justiça Federal já determinaram que a Faculdade de destino e a CEF procedessem a transferência do FIES dos alunos para o curso de medicina.
      </p>
      <a 
        href="https://api.whatsapp.com/send?phone=558699072871"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Envie uma mensagem <i className="bi bi-whatsapp"></i></button>
      </a>
      </TextContainer>
    </Container>
  );
};