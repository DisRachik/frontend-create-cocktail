import PropTypes from 'prop-types';

export const FieldsCounter = ({
  fields,
  handleAddField,
  handleRemoveField,
}) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => handleRemoveField(fields.length - 1)}
      >
        -
      </button>

      <span>{fields.length}</span>

      <button type="button" onClick={handleAddField}>
        +
      </button>
    </div>
  );
};

FieldsCounter.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.object,
      measure: PropTypes.object,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleAddField: PropTypes.func.isRequired,
  handleRemoveField: PropTypes.func.isRequired,
};
