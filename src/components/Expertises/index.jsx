import DireitoCivil from './DireitoCivil';
import DireitoTrabalhista from './DireitoTrabalhista';
import { Container, CardContainer, Card } from './style';

export default function Expertises() {
  

  return (
    <Container className="margins">
      <h1>Áreas de atuação</h1>
      <p>Saiba mais sobre nossas áreas de atuação</p>

      <CardContainer>
        <DireitoCivil />
        <DireitoTrabalhista />
      </CardContainer>
    </Container>
  )
};