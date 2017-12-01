import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions";
import { Menu, Header, Segment } from "semantic-ui-react";
import {Link} from 'react-router-dom'
import HomePageBanner from './HomePageBanner';

class Navbar extends Component {

  render() {
    let activeNav = this.props.activeNav;

    return (
      <div className="navbar-space">
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeNav === "home"}
            as={Link}
            to='/'
          />
          <Menu.Item
            name="recipes"
            active={activeNav === "recipes"}
            as={Link}
            to='/recipes'
          />
          <Menu.Item
            name="fantasy"
            active={activeNav === "fantasy"}
            as={Link}
            to='/fantasy'
          />
          <Menu.Item
            name="add a recipe"
            active={activeNav === "add a recipe"}
            as={Link}
            to='/new'
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeNav === "logout"}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
