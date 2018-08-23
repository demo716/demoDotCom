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
      activeItem: '',
      scrolling: false
    }
    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.transparent !== prevState.transparent){
      return {transparent: nextProps.transparent};
    }
    else return null;
  }

  handleScroll(event) {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({scrolling: false});
    }
    else if (window.scrollY !== 0 && this.state.scrolling !== true) {
        this.setState({scrolling: true});
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: '' })

  render() {
    let { activeItem, transparent, scrolling } = this.state
    // console.log(this.props)
    return (
    <div>
    { scrolling ?
        (<div id="homeMenuFaded">
          <Menu>
            <Menu.Item name='home' color="blue" active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item
              color="blue"
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='projects' color="blue"
              active={activeItem === 'projects'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>)
    :
      (<div id="homeMenu">
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
      </div>)
    }
    </div>
    )
  }
}
