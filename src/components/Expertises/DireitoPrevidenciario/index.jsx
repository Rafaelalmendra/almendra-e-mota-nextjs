import Image from 'next/image';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  useDisclosure
} from "@chakra-ui/react"

import { Card } from '../style';

export default function DireitoPrevidenciario () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card className="CardBottom" onClick={onOpen}>
        <Image 
          src={"/images/direito-previdenciario.svg"}
          alt="Almendra e Mota - direito previdenciário imagem"          
          width={425}
          height={209}
          />
        <h3>DIREITO PREVIDENCIÁRIO</h3>
        <span>Saber mais</span>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="black">DIREITO PREVIDENCIÁRIO</ModalHeader>
          <ModalCloseButton color="black"/>
          <ModalBody
            mb="1rem"
            color="black"
            fontSize="1rem"
            textAlign="justify"
            >
            <p>
              Através de um atendimento personalizado e sempre em busca da concessão do melhor benefício, nosso escritório possui forte especialização em direito previdenciário, prestando, dentre outros, os seguintes serviços: 
              <br />
              <br />
              a) Planejamento Previdenciário;
              <br />
              b) Concessão de aposentadorias; 
              <br />
              c) Aposentadorias especiais – Professor, médico, dentista, motorista, vigilante, portador de deficiência e etc. 
              <br />
              d) Aposentadorias para servidores públicos;
              <br />
              e) Aposentadoria rural; 
              <br />
              f) Revisões de benefícios para inclusão de tempo de serviço, contribuição, ação trabalhista, atividades especiais;
              <br />
              g) Revisões do valor do seu benefício;
              <br />
              h) Auxilio por incapacidade temporária e permanente; 
              <br />
              i) Auxílio-acidente;
              <br />
              j) Pensão por morte;
              <br />
              k) Cálculos previdenciários.
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}