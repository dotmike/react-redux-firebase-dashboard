const validate = values => {
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title!';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.author) {
    errors.author = 'Enter an author!';
  }
  if (!values.description) {
    errors.description = 'Enter some content please';
  }

  return errors;
};

export default validate;
