import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addRecipe } from '../actions';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import validate from '../validate';
import Navbar from './Navbar';

class AddRecipe extends Component {
  renderInputField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  renderTextareaField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <textarea className="form-control" type="text" {...field.textarea} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  renderAuthorField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
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

    return (
      <div>
        <Navbar activeNav="add a recipe" />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="title" component={this.renderInputField} />
          <Field
            label="Author"
            name="author"
            component={this.renderAuthorField}
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
          <Button type="submit">Add Recipe</Button>
          <Link to="/">
            <Button>Cancel</Button>
          </Link>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  validate,
  form: 'PostsNewRecipe'
})(connect(null, { addRecipe })(AddRecipe));
