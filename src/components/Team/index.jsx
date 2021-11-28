import Card from './Card'

import { Container, Cards } from './style'

export default function Team() {
  return (
    <Container id="team" className="margins">
      <h2>Nossa equipe</h2>
      <Cards>
        <Card 
          name="Gabriel Almendra"
          description="Graduado em Direito pelo Centro Universitário UniFacid - Faculdade Integral Diferencial, Pós-Graduado em Direito Civil e Processual Civil pela instituição de ensino UNINOVAFAPI, Pós-Graduado em Direito Constitucional pela ESAPI, advogado inscrito na OAB/PI sob nº 18.698."
        />
        <Card 
          name="Heitor Mota"
          description="Graduado em Direito pelo Centro Universitário UniFacid — Faculdade Integral Diferencial, Pós-Graduado em Direito e Panejamento Tributário pela Escola do Legislativo da ALEPI, membro da Comissão de Direito Empresarial da OAB/PI, advogado inscrito na OAB/PI sob nº 18.954."
        />
      </Cards>
    </Container>
  )
}