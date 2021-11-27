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

export default function DireitoTrabalhista () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card className="CardBottom" onClick={onOpen} >
        <Image 
          src={"/images/direito-trabalhista.svg"}
          alt="Área de atuação"          
          width={425}
          height={209}
        />
        <h3>DIREITO TRABALHISTA</h3>
        <span>Saber mais</span>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="black">DIREITO CIVIL E CONSUMIDOR</ModalHeader>
          <ModalCloseButton color="black"/>
          <ModalBody
            mb="1rem"
            color="black"
            fontSize="1.125rem"
            textAlign="justify"
          >
            <p>
              Proporcionamos a melhor defesa possível para Pessoas Físicas e Jurídicas,de acordo com os seguintes serviços:
              <br />
              <br />
              
              - Para o empresário:
              <br />
              a) Defesa ou acompanhamento em ações trabalhistas judiciais ou procedimentos
              administrativos no âmbito do Ministério Público do Trabalho.
              <br />
              b) Consultoria preventiva no âmbito do direito do trabalho.
              <br />
              d) Elaboração de contratos, orientação e consultoria em questões envolvendo recursos
              humanos, admissão e demissão de pessoal, cálculos trabalhistas e procedimentos
              disciplinares.
              <br />
              c) Proteção do patrimônio dos sócios em ações trabalhistas.
              <br />
              e) Proteção da empresa na sucessão empresarial.
              <br />
              <br />
              - Para o empregado:
              <br />
              a) Ajuizamento de ações trabalhistas voltadas para a cobrança dos direitos não pagosdurante a vigência do contrato de trabalho, tais como depósitos de FGTS, saldo de salário, férias, 13º, horas extras, aviso prévio;
              <br />
              b) Ajuizamento de ação indenizatória em razão de acidente de trabalho, da ocorrência de danos morais e materiais, assédio moral, desvio de função, dentre outros.
              <br />
              c) Cálculo do valor correto da rescisão e seguro desemprego

            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}