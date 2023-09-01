// import { useAuth } from 'redux/auth/useAuth';
import { Content, ModalWrrap } from './Modal.styled';

export const Modal = ({ modal, setModal, children }) => {
  return (
    <ModalWrrap
      modal={modal}
      onClick={() => {
        setModal(!modal);
      }}
    >
      <Content>{children}</Content>
    </ModalWrrap>
  );
};
