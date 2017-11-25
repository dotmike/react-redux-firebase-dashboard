import React, { Component } from 'react';
import { Menu, Header, Segment } from "semantic-ui-react";
import {Link} from 'react-router-dom'
import HomePageBanner from './HomePageBanner';

class Navbar extends Component {

  componentWillMount() {
    this.props.setNavbarActiveItem()
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="navbar-space">
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            as={Link}
            to='/'
          />
          <Menu.Item
            name="recipes"
            active={activeItem === "recipes"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="fantasy"
            active={activeItem === "fantasy"}
            onClick={this.handleItemClick}
            as={Link}
            to='/fantasy'
          />
          <Menu.Item
            name="add a recipe"
            active={activeItem === "add a recipe"}
            onClick={this.handleItemClick}
            as={Link}
            to='/new'
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeItem: state.activeItem
  };
}

export default connect(mapStateToProps, actions)(Navbar);
