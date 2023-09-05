import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

import { Backdrop } from 'components';
import {
  CloseBtn,
  ContentBox,
  ContentText,
  MotivationWindow,
} from './MotivationModal.styled';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const MotivationModal = ({ text, favorite, counter, signin }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseOverlay = event => {
    if (event.target === event.currentTarget) {
      setIsOpen(prevState => !prevState);
    }
  };

  useEffect(() => {
    const handleCloseEsc = evt => {
      if (evt.code === 'Escape') {
        setIsOpen(false);
        return;
      }
    };
    document.addEventListener('keydown', handleCloseEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
    };
  }, []);

  const isModalOpen = () => {
    if (isOpen) {
      return (document.body.style.overflow = 'hidden');
    }
    return (document.body.style.overflow = 'auto');
  };

  isModalOpen();

  return (
    <>
      {isOpen &&
        createPortal(
          <Backdrop onClick={handleCloseOverlay}>
            {/* <MotivationWindow image={image}> */}
            <MotivationWindow
              favorite={favorite}
              counter={counter}
              signin={signin}
            >
              <ContentBox>
                <ContentText>
                  {/* Wow!Yoy have been using the aplication for 100 days */}{' '}
                  {text}
                </ContentText>
                <CloseBtn
                  onClick={() => {
                    setIsOpen(prevState => !prevState);
                  }}
                >
                  <AiOutlineClose size={20} />
                </CloseBtn>
              </ContentBox>
            </MotivationWindow>
          </Backdrop>,
          modalRoot
        )}
    </>
  );
};

MotivationModal.propTypes = {
  text: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
  signin: PropTypes.bool,
  counter: PropTypes.number,
};
