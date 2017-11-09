import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipe } from '../actions';
import { withRouter } from 'react-router-dom';

class ShowRecipe extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchRecipe(id);
  }

  render() {
    const { recipe } = this.props;

    if (!recipe) {
      return <div>...Loading</div>;
    }
    return(
      <div>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipe: state.recipes
  };
}

export default withRouter(connect(mapStateToProps, { fetchRecipe })(ShowRecipe));
