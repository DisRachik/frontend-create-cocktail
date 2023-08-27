import PropTypes from 'prop-types';
import { Message } from './FormMessages.styled';

export const FormMessages = ({
  invalidValue,
  validValue,
  errorMessage,
  checkMessage,
}) => {
  if (invalidValue) {
    return <Message style={{ color: '#da14147f' }}>{errorMessage}</Message>;
  } else if (validValue) {
    return <Message style={{ color: '#3cbc81' }}>{checkMessage}</Message>;
  }
};

FormMessages.propTypes = {
  invalidValue: PropTypes.object,
  validValue: PropTypes.bool,
  errorMessage: PropTypes.string,
  checkMessage: PropTypes.string,
};
