import DireitoCivil from './DireitoCivil';
import DireitoTrabalhista from './DireitoTrabalhista';
import DireitoTributario from './DireitoTributario';
import DireitoPrevidenciario from './DireitoPrevidenciario';
import DireitoEducacional from './DireitoEducacional';
import SearaCriminal from './SearaCriminal';
import { Container, CardContainer } from './style';

export default function Expertises() {

  return (
    <Container className="margins" id="expertises">
      <h1 data-aos="fade-down">Áreas de atuação</h1>
      <p data-aos="fade-up">Saiba mais sobre nossas áreas de atuação</p>

      <CardContainer>
        <div data-aos="flip-right" className="margin"><DireitoCivil /></div>
        <div data-aos="flip-left"><DireitoTrabalhista /></div>
        <div data-aos="flip-right" className="margin"><DireitoTributario /></div>
        <div data-aos="flip-left"><DireitoPrevidenciario /></div>
        <div data-aos="flip-right" className="margin"><DireitoEducacional /></div>
        <div data-aos="flip-left"><SearaCriminal /></div>
      </CardContainer>
    </Container>
  )
};