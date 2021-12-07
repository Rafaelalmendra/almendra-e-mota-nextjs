import Card from './Card'

import { Container, Cards } from './style'

export default function Team() {
  return (
    <Container id="team" className="margins">
      <h2 data-aos="fade-down">Nossa equipe</h2>
      <Cards>
        <div data-aos="flip-left">
          <Card 
            name="Gabriel Almendra"
            description="Graduado em Direito pelo Centro Universitário UNIFACID; Pós-Graduado em Direito Civil e Processual Civil pelo UNINOVAFAPI; Pós-Graduado em Direito Constitucional e Administrativo pela Escola Superior da Advocacia-PI; Pós-graduando em Direito Previdenciário e Trabalhista pela Escola Superior da Advocacia-PI; Advogado inscrito na OAB/PI sob nº 18.698."
          />
        </div>

        <div data-aos="flip-right">
        <Card 
          name="Heitor Mota"
          description="Graduado em Direito pelo Centro Universitário UniFacid — Faculdade Integral Diferencial, Pós-Graduado em Direito e Panejamento Tributário pela Escola do Legislativo da ALEPI, membro da Comissão de Direito Empresarial da OAB/PI, advogado inscrito na OAB/PI sob nº 18.954."
        />
        </div>
      </Cards>
    </Container>
  )
}