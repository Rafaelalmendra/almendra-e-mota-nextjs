import { motion } from 'framer-motion'

//imports-components-and-styles
import { NavLinksContainer, UlLinks } from './style.js'

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
            <a href="#home">Home</a>
          </li>
          <li onClick={() => props.isMenu && props.closeMenu()}>
            <a href="#expertises">Áreas de atuação</a>
          </li>
          <li></li>
          <li onClick={() => props.isMenu && props.closeMenu()}>
            <a href="#about">A sociedade</a>
          </li>
          <li onClick={() => props.isMenu && props.closeMenu()}>
            <a href="#team">Nossa equipe</a>
          </li>
          <li onClick={() => props.isMenu && props.closeMenu()}>
            <a href="#contact">Contato</a>
          </li> 
        </UlLinks>
      </motion.div>
    </NavLinksContainer>
  )
}