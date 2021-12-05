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
          <li><a href="#home">Home</a></li>
          <li><a href="#expertises">Áreas de atuação</a></li>
        </ul>
        <ul>
          <li><a href="#about">Sobre nós</a></li>
          <li><a href="#team">A sociedade</a></li>
          <li><a href="#contact">Contato</a></li>
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
        <a 
          href="https://rafaelalmendra.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image">
            <Image 
              src={'/images/rafael-logo.svg'}
              alt="developer"
              width={40}
              height={40}
            />
          </div>
        </a>
      </Developer>
    </FooterContainer>
  )
};