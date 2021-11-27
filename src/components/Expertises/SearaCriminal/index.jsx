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

import { Card } from './style';

export default function SearaCriminal () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card className="CardBottom" onClick={onOpen}>
        <Image 
          src={"/images/seara-criminal.svg"}
          alt="Almendra e Mota - direito tributário imagem"          
          width={425}
          height={209}
        />
        <h3>SEARA CRIMINAL</h3>
        <p>(DIREITO PENAL E DIREITO PROCESSUAL PENAL)</p>
        <span>Saber mais</span>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="black">
            SEARA CRIMINAL 
            <br />
            <span style={{fontSize: "14px"}}>(DIREITO PENAL E DIREITO PROCESSUAL PENAL)</span>
          </ModalHeader>
          <ModalCloseButton color="black"/>
          <ModalBody
            mb="1rem"
            color="black"
            fontSize="1rem"
            textAlign="justify"
          >
            <p>
            Prezamos pelo trabalho advocatício de excelência na defesa dos direitos de nossos patrocinados/clientes, de modo que todas suas garantias constitucionais e infraconstitucionais sejam respeitadas e obedecidas, tanto na fase investigativa durante o inquérito policial ou termo circunstanciado de ocorrência, quanto na fase judicial durante o deslinde processual, disponibilizando a prestação dos seguintes serviços: 
            <br />
            <br />
            a) Assessoria e consultoria jurídica;
            <br />
            b) Acompanhamento em Delegacias de Polícia, Fóruns, Tribunais de Justiça ou em qualquer outro órgão público;
            <br />
            c) Acompanhamento de inquéritos policiais ou termos circunstanciados de ocorrência, executando (simultaneamente às investigações do Delegado de Polícia) a investigação DEFENSIVA em favor do cliente, com respaldo legal no Provimento 188/2018 da Ordem dos Advogados do Brasil;
            <br />
            d) Confecção de requerimentos administrativos;
            <br />
            e) Acompanhamento processual do início ao fim;
            <br />
            f) Acompanhamento de sentenciados durante a execução da pena nos termos da Lei de Execução Penal;
            <br />
            g) Apresentação de pedido de revogação ou relaxamento da prisão preventiva, resposta à acusação, alegações finais, requerimento de diligências;
            <br />
            h) Interposição de recursos (apelação, recurso em sentido estrito, embargos de declaração, embargos infringentes, carta testemunhável, recurso ordinário, recurso especial, recurso extraordinário, agravo regimental agravo em execução); 
            <br />
            i) Impetração de Habeas Corpus repressivo, preventivo, profilático, substitutivo e com superação da súmula 691 do Supremo Tribunal Federal;
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}