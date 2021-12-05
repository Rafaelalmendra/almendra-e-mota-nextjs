import { useState } from 'react';
import Image from 'next/image';

import { Button } from './style';

export default function ScrollToTop() {
  const [ visible, setVisible ] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollButtonTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  if (typeof window !== "undefined") {
    // Client-side-only code
    window.addEventListener('scroll', toggleVisible)
  };

  return(
    <Button
      onClick={scrollButtonTop}
      style={{display: visible ? 'inline' : 'none'}}
    >
      <Image
        src={"/images/button-top.svg"}
        alt="Botão de voltar ao topo"
        width={62}
        height={62}
      />
    </Button>
  )
};