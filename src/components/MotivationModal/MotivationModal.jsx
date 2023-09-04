import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

import { Backdrop } from 'components';
import {
  CloseBtn,
  ContentBox,
  ContentText,
  MotivationWindow,
} from './MotivationModal.styled';

export const MotivationModal = ({ text, image, onCLick }) => {
  return (
    <Backdrop>
      <MotivationWindow image={image}>
        <ContentBox>
          <ContentText>
            {/* Wow!Yoy have been using the aplication for 100 days */} {text}
          </ContentText>
          <CloseBtn onClick={onCLick}>
            <AiOutlineClose size={20} />
          </CloseBtn>
        </ContentBox>
      </MotivationWindow>
    </Backdrop>
  );
};

MotivationModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
};
