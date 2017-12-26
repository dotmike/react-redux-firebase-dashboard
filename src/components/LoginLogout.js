import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class LoginLogout extends Component {
  render() {
    let activeNav = this.props.active;
    return (
      <Menu.Item name="logout" active={activeNav === 'logout'} as={Link} to="/">
        <Icon name="log out" size="massive" />
        Logout
      </Menu.Item>
    );
  }
}

export default LoginLogout;
