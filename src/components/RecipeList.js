import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import RecipeListItem from "./RecipeListItem";
import { Card, Segment, Dimmer, Loader } from "semantic-ui-react";
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import HomePageBanner from './HomePageBanner'

class RecipeList extends Component {
  componentWillMount() {
    this.props.fetchRecipes();
  }

  renderList() {
    return _.map(this.props.recipes, (recipe, key) => {
      return <RecipeListItem recipe={recipe} key={key} identifier={key} />;
    });
  }

  render() {
    const { recipes } = this.props;

    if (!recipes) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <HomePageBanner />
        <Navbar activeNav="home"/>
        <div>
          <Card.Group itemsPerRow={3}>
            {this.renderList()}
          </Card.Group>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

// mapDispatchToProps

export default withRouter(connect(mapStateToProps, actions)(RecipeList));
