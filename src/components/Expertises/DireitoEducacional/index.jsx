import Image from 'next/image';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react"

import { Card } from '../style';

export default function DireitoEducacional () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card onClick={onOpen}>
        <Image 
          src={"/images/direito-educacional.svg"}
          alt="Almendra e Mota - direito civil e do consumidor imagem"          
          width={425}
          height={209}
          />
        <h3>DIREITO EDUCACIONAL</h3>
        <span>Saber mais</span>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="black">DIREITO EDUCACIONAL</ModalHeader>
          <ModalCloseButton color="black"/>
          <ModalBody
            mb="1rem"
            color="black"
            fontSize="1rem"
            textAlign="justify"
            >
            <p>Com foco principal no Fundo de Financiamento Estudantil, nossa equipe atua fortemente com o Direito Educacional, ramo do direito que envolve os sistemas jurídicos que disciplinam as relações entre os Alunos, Faculdades/Universidades e o Governo Federal. Serviços oferecidos:</p>
            <br />
            a) Ação revisional buscando reajustes nas mensalidades em virtude da pandemia que instituiu aulas remotas; 
            <br />
            b) Ação de obtenção de segundo FIES; 
            <br />
            c) Ação de transferência e continuidade do FIES, sobretudo para o curso de medicina;
            <br />
            d) Ação em busca da expedição de diploma atrasado; 
            <br />
            e) Ação visando a autorização, reconhecimento e renovação de reconhecimento de cursos superiores;
            <br />
            d) Ação visando evitar a retenção de documentos ou o impedimento da realização de avaliações em decorrência de inadimplência;
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}