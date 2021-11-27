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

export default function DireitoTributario () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card onClick={onOpen}>
        <Image 
          src={"/images/direito-tributario.svg"}
          alt="Almendra e Mota - direito tributário imagem"          
          width={425}
          height={209}
          />
        <h3>DIREITO TRIBUTÁRIO</h3>
        <span>Saber mais</span>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="black">DIREITO TRIBUTÁRIO</ModalHeader>
          <ModalCloseButton color="black"/>
          <ModalBody
            mb="1rem"
            color="black"
            fontSize="1rem"
            textAlign="justify"
            >
            <p>
              Trabalhamos com recuperação de créditos tributários, planejamento tributário, consultoria na área fiscal e assessoria jurídico-tributária em processos executivos fiscais, em âmbito judicial e administrativo perante Receita Federal e CARF, disponibilizando ainda as seguintes teses tributárias para empresas:
              <br />
              <br />
              a) Cobrança indevida do DIFAL (alíquota por empresas do Simples Nacional)
              <br />
              b) Recuperação de PIS/COFINS monofásicos e ST para empresas do Simples Nacional
              <br />
              c) Desoneração da Folha de Pagamento do Sistema S.
              <br />
              d) Recuperação de crédito: Exclusão do ICMS, ISS, ICMS-ST, e PIS e COFINS da base do PIS e da COFINS.
              <br />
              e) Restituição de contribuição previdenciária sobre verbas indenizatórias.
              <br />
              f) ICMS e energia elétrica: restituição do ICMS incidentes sobre as TUSD (distribuição) e TUST (transmissão).
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}