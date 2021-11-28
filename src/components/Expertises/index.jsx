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
      <h1>Áreas de atuação</h1>
      <p>Saiba mais sobre nossas áreas de atuação</p>

      <CardContainer>
        <DireitoCivil />
        <DireitoTrabalhista />
        <DireitoTributario />
        <DireitoPrevidenciario />
        <DireitoEducacional />
        <SearaCriminal />
      </CardContainer>
    </Container>
  )
};