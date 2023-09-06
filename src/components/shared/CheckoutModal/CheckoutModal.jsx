import PropTypes from 'prop-types';
import { CancelBtn, Button } from 'components';
import { Container, ContentText, Wrapper } from './CheckoutModal.styled';

export const CheckoutModal = ({
  cancelClick,
  contentText,
  agreementBtnText,
  agreeClick,
  disagreeClick,
}) => {
  return (
    <Container>
      <CancelBtn cancelClick={cancelClick} autoFocus={true} />

      <ContentText>{contentText}</ContentText>

      <Wrapper>
        <Button minWidth="196px" onClick={agreeClick}>
          {agreementBtnText}
        </Button>
        <Button
          minHeight="54px"
          minWidth="196px"
          transparent
          onClick={disagreeClick}
        >
          Cancel
        </Button>
      </Wrapper>
    </Container>
  );
};

CheckoutModal.propTypes = {
  cancelClick: PropTypes.func.isRequired,
  contentText: PropTypes.string,
  agreementBtnText: PropTypes.string,
  agreeClick: PropTypes.func.isRequired,
  disagreeClick: PropTypes.func.isRequired,
};
