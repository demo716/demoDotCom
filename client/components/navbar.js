import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Menu, Sticky } from 'semantic-ui-react';
// import {logout} from '../store';

export default class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeItem: ''
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: '' })

  render() {
    const { activeItem } = this.state

    return (
      <div id="homeMenu">
        <Sticky>
        <Menu inverted color="blue" secondary pointing>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          />
        </Menu>
        </Sticky>
      </div>
    )
  }
}
