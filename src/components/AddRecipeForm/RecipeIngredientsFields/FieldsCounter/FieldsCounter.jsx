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
