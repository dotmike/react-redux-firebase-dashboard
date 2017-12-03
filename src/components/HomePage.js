import React, { Component } from 'react';
import Navbar from './Navbar';
import HomePageBanner from './HomePageBanner';
import RecipeList from './RecipeList';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar activeNav="home"/>
        <HomePageBanner />
        <RecipeList />
      </div>
    )
  }
}

export default HomePage;
