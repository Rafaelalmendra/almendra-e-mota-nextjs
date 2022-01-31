import Link from 'next/link';

import Modal from '../Modal';
import { ModalContainer } from './style';

export default function ModalFies({ show, setModalFies }) {

  return (
    <Modal 
      show={show}
      onClose={() => setModalFies(false)}
    >
      <ModalContainer>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img src="/images/gabriel-fies.png" alt="Modal Fies" />
        <h2>Transferência do FIES <br /> para o curso de medicina</h2>
        <Link href='/fies'>
          <a>
            <button>Saiba mais</button>
          </a>
        </Link>
      </ModalContainer>
    </Modal>
  );
};