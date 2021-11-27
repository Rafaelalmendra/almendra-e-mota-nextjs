import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { NavLinks } from './navLinks'
import {
  Hamburguer,
  Close,
  HeaderContainer,
  NavBar,
  MenuMain,
  UlContainer,
  NavgationMobile
} from './style'

export default function Navbar() {
  const [ open, setOpen ] = useState(false);
  const [ navbar, setnavbar ] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setnavbar(true)
    } else {
      setnavbar(false)
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', changeBackground)
  }

  const hamburguerIcon =
    <Hamburguer>
      <i 
        className="bi bi-list"
        onClick={() => setOpen(!open)}
      ></i>
    </Hamburguer>

  const closeIcon = 
    <Close>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
        }}
      >
        <i 
          className="bi bi-x"
          alt="Icone de fechar menu" 
          onClick={() => setOpen(!open)}
          ></i>
      </motion.div>
    </Close>

  const closeMenu = () => setOpen(false);

  return (
    <HeaderContainer className={navbar ? "header active" : "header"}>
      <NavBar className="margins">
        <div className="logo">
          <Image 
            src={"/images/logo.svg"}
            alt="Logo Almendra e Mota"
            width={192}
            height={55}
          />
        </div>

        <MenuMain>
          <UlContainer className="desktop">
            <li><a href="#home">Home</a></li>
            <li><a href="#expertises">Áreas de atuação</a></li>
            <li><a href="#about">Sobre nós</a></li>
            <li><a href="#society">A sociedade</a></li>
            <li><a href="#contact">Contato</a></li>  
          </UlContainer>

          {/* menu mobile */}
          <NavgationMobile>
            {open ? closeIcon : hamburguerIcon}
            {open && <NavLinks isMenu={true} closeMenu={closeMenu} />}
          </NavgationMobile>
        </MenuMain>
      </NavBar>
    </HeaderContainer>
  )
}