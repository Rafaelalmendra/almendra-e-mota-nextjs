import Link from 'next/link';
import { motion } from 'framer-motion';

//imports-components-and-styles
import { NavLinksContainer, UlLinks } from './style.js';

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <motion.div
        initial={{ y: -1000, opacity: 0.4 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          stiffness: 200 ,
        }}
      >
        <UlLinks>
          <li onClick={() => props.isMenu && props.closeMenu()}>
            <Link href="/#home">
              <a>Home</a>
            </Link>
          </li>
          <li onClick={() => props.isMenu && props.closeMenu()}>
            <Link href="/#expertises">
              <a>Áreas de atuação</a>
            </Link>
          </li>
          <li></li>
          <li onClick={() => props.isMenu && props.closeMenu()}>
            <Link href="/#about">
              <a>A sociedade</a>
            </Link>
          </li>
          <li onClick={() => props.isMenu && props.closeMenu()}>
            <Link href="/#team">
              <a>Nossa equipe</a>
            </Link>
          </li>
          <li onClick={() => props.isMenu && props.closeMenu()}>
            <Link href="/#contact">
              <a>Contato</a>
            </Link>
          </li>
          <li 
            style={{ marginTop: '1.5rem' }}
            onClick={() => props.isMenu && props.closeMenu()}
          >
            {/*eslint-disable-next-line @next/next/link-passhref*/}
            <Link href="/fies">
              <span className="fies">Fies</span>
            </Link>
          </li> 
        </UlLinks>
      </motion.div>
    </NavLinksContainer>
  );
};