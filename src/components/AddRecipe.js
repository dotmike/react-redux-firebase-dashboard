import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addRecipe } from '../actions';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class AddRecipe extends Component {
  renderInputField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type ="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderTextareaField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <textarea
          className="form-control"
          type ="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(recipe) {
    this.props.addRecipe(recipe, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderInputField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderInputField}
        />
        <Field
          label="Description"
          name="description"
          component={this.renderTextareaField}
        />
      <Button type="submit">Submit</Button>
      <Link to='/'><Button>Cancel</Button></Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content please';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewRecipe'
})(
  connect(null, { addRecipe })(AddRecipe)
);
