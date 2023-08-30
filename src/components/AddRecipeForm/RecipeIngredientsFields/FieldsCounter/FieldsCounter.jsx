// Libs
import PropTypes from 'prop-types';
// Styled components
import { Counter, CounterButton } from './FieldsCounter.styled';
// Icons
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export const FieldsCounter = ({
  fields,
  handleAddField,
  handleRemoveField,
}) => {
  return (
    <Counter>
      <CounterButton
        type="button"
        onClick={() => handleRemoveField(fields.length - 1)}
      >
        <AiOutlineMinus size={16} />
      </CounterButton>

      <span>{fields.length}</span>

      <CounterButton type="button" onClick={handleAddField}>
        <AiOutlinePlus size={16} />
      </CounterButton>
    </Counter>
  );
};

FieldsCounter.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      measure: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleAddField: PropTypes.func.isRequired,
  handleRemoveField: PropTypes.func.isRequired,
};
