import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Menu, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import HomePageBanner from './HomePageBanner';
import LoginLogout from './LoginLogout';

class Navbar extends Component {
  render() {
    let activeNav = this.props.activeNav;

    return (
      <div className="navbar-space">
        <Menu secondary size="huge" icon="labeled">
          <Menu.Item name="home" active={activeNav === 'home'} as={Link} to="/">
            <Icon name="coffee" size="massive" />
            Home
          </Menu.Item>
          <Menu.Item
            name="recipes"
            active={activeNav === 'recipes'}
            as={Link}
            to="/recipes"
          >
            <Icon name="food" size="massive" />
            Recipes
          </Menu.Item>
          <Menu.Item
            name="fantasy"
            active={activeNav === 'fantasy'}
            as={Link}
            to="/fantasy"
          >
            <Icon name="newspaper" size="massive" />
            Fantasy News
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="add a recipe"
              active={activeNav === 'add a recipe'}
              as={Link}
              to="/new"
            >
              <Icon name="add" size="massive" />
              Add A Recipe
            </Menu.Item>
            <LoginLogout active="loginLogout" />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
