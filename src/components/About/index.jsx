import Image from 'next/image'

import { Container } from './style'
 
export default function About() {
  return (
    <Container>
      <div className="margins" id="about">
        <h1>A sociedade</h1>
        <p>
          A Sociedade de Advogados Almendra & Mota surgiu do interesse comum de dois grandes amigos advogados, através da reciprocidade das ideias e experiências profissionais partilhadas durante o decorrer da graduação em Direito. Os conhecimentos adquiridos por meio da dedicação contínua, baseada em experiências de aprendizagem profissional, em várias instituições públicas e privadas, dentre órgãos e escritórios de advocacia de renome, resultaram num perfil profissional equilibrado e apto às necessidades do mercado. Isto posto, a prestação de serviços jurídicos voltados sobretudo para empresas, de forma personalizada, criativa e especializada, suficiente para resolução de assuntos jurídicos multidisciplinares nas áreas do direito civil, administrativo, trabalhista, previdenciário e tributário, é a finalidade principal do escritório.
        </p>
        <div className="line">
          <Image 
            src={"/images/line.svg"}
            alt="Linha Sociedade de advogados Almendra e Mota"
            width={269}
            height={19}
          />
        </div>
      </div>
    </Container>
  )
}