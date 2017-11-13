import React, { Component } from "react";
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addRecipe } from '../actions';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import validate from '../validate';

const renderSubFields = (ingredient, index, fields) => (
    <li key={index}>
      <button
        type="button"
        title="Remove Ingredient"
        onClick={() => fields.remove(index)}/>
      <Field
        name={ingredient}
        type="text"
        component={renderField}
        label={`Ingredient #${index + 1}`}/>
    </li>
)
const renderMembers = ({ fields }) => (
  <ul>
    <button type="button" onClick={() => fields.push({})}>Add Ingredient</button>
    {fields.map(renderSubFields)}
  </ul>
)

const renderField = ({input, label, type, meta: {touched, error}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder="Type an ingredient"/>
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
        <FieldArray name="ingredients" component={renderMembers} />
        <Button type="submit">Submit</Button>
        <Link to='/'><Button>Cancel</Button></Link>
      </form>
    );
  }
}

export default reduxForm({
  validate,
  form: 'PostsNewRecipe'
})(
  connect(null, { addRecipe })(AddRecipe)
);
