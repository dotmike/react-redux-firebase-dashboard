import React, { Component } from "react";
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addRecipe } from '../actions';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import validate from '../validate';
import Navbar from './Navbar';

const renderMultipleIngredients = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Ingredient
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((ingredient, index) => (
      <li key={index}>
        <Button
          title="Remove Ingredient"
          onClick={() => fields.remove(index)}>
          Remove Ingredient
        </Button>
        <Field
          name={`${index + 1}`}
          type="text"
          component={renderIngredientField}
          label={`Ingredient #${index + 1}`}
        />
      </li>
    ))}
  </ul>
)

const renderIngredientField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type="text" placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

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
      console.log(recipe);
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <div>
        <Navbar activeNav='add a recipe' />
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
          <FieldArray name="ingredients" component={renderMultipleIngredients}/>
          <Button type="submit">Submit</Button>
          <Link to='/'><Button>Cancel</Button></Link>
        </form>
    </div>
    );
  }
}

export default reduxForm({
  validate,
  form: 'PostsNewRecipe'
})(
  connect(null, { addRecipe })(AddRecipe)
);
