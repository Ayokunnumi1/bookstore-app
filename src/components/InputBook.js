import PropTypes from 'prop-types';

const FormInput = ({ handleUserInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;
    handleUserInput(title, author);
  };

  return (
    <form onSubmit={handleSubmit} className="form-input">
      <input type="text" name="title" placeholder="Book title" />

      <input type="text" name="author" placeholder="author" />

      <button type="submit">Add Book</button>

    </form>
  );
};

FormInput.propTypes = {
  handleUserInput: PropTypes.func.isRequired,
};

export default FormInput;
