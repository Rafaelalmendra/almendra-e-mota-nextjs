import Image from 'next/image';

import { 
  FooterContainer,
  Navigation,
  Contact,
  Developer
} from './style';

export default function Footer() {
  return (
    <FooterContainer className="margins">
      <Navigation>
        <p>Navegação</p>
        <ul>
          <li>Home</li>
          <li>Áreas de atuação</li>
        </ul>
        <ul>
          <li>Sobre nós</li>
          <li>A sociedade</li>
          <li>Contato</li>
        </ul>
      </Navigation>

      <Contact>
        <p>Contato</p>

        <span>almendraemova.adv@gmail.com</span>
        <br />
        <span>(86) 9 9907-2871 | (86) 9 9964-3532</span>
      </Contact>

      <Developer>
        <p>Desenvolvido por</p>
        <div className="image">
          <Image 
            src={'/images/rafael-logo.svg'}
            alt="developer"
            width={46}
            height={54}
          />
        </div>
      </Developer>
    </FooterContainer>
  )
};