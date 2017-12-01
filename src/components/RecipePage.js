import React, { Component } from 'react';
import Navbar from './Navbar';

class RecipePage extends Component {
  render() {
    return(
      <div>
        <Navbar activeNav='recipes' />
        Page with all the recipes on it
      </div>
    );
  }
}

export default RecipePage;
