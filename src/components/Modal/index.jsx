import {
  WrapperModal,
  Container,
  HeaderModal
} from './style';

export default function Modal({
  id = 'modal',
  show,
  onClose,
  children,
  title24
}) {
  const handleOutsideClick = () => {
    onClose();
  };

  if (!show) {
    return null;
  };

  return (
    <WrapperModal
      id={id}
      onClick={handleOutsideClick}
    >
      <Container
        onClick={(event) => event.stopPropagation()}
      >
        <HeaderModal title24={title24}>
          <div></div>
          <button onClick={() => onClose()}>
            <i className="bi bi-x"></i>
          </button>
        </HeaderModal>
        {children}
      </Container>
    </WrapperModal>
  )
}