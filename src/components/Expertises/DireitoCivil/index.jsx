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

export default function DireitoCivil () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card onClick={onOpen}>
        <Image 
          src={"/images/direito-consumidor.svg"}
          alt="Almendra e Mota - direito civil e do consumidor imagem"          
          width={425}
          height={209}
          />
        <h3>DIREITO CIVIL E CONSUMIDOR</h3>
        <span>Saber mais</span>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" className="modal">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="black">DIREITO CIVIL E CONSUMIDOR</ModalHeader>
          <ModalCloseButton color="black"/>
          <ModalBody
            mb="1rem"
            color="black"
            fontSize="1rem"
            textAlign="justify"
            >
            <p>O escritório Almendra & Mota fornece aos seus clientes atuação especializada na área consumerista, com vistas a garantir a defesa de seus direitos enquanto consumidores, possuindo também ampla experiência em causas envolvendo contratos bancários, notadamente os de empréstimo consignado e cartão de crédito consignado firmados mediante fraude.</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}