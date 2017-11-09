import React, { Component } from "react";
import { Card, Image, Link } from "semantic-ui-react";

class RecipeListItem extends Component {
  render() {
    const linkToURL = `/recipes/${this.props.identifier}`;

    return (
      <Card>
        <Image
          src='./src/assets/coffee.jpg'
          as='a'
          href={linkToURL}
          />
        <Card.Content>
          <Card.Header>{this.props.recipe.title}</Card.Header>
          <Card.Meta>By Eric</Card.Meta>
          <Card.Description>This is Eric's attempt at coffee</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default RecipeListItem;
