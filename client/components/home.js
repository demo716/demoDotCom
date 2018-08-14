import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Button, Segment, Container, Visibility } from 'semantic-ui-react'
import ProjectsGroup from './Projects/projectsGroup'
import Navbar from './navbar'
import EducationGroup from './Education/educationGroup';

/**
 * COMPONENT
 */
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      transparent: false
    }
  }

  render() {
    const { transparent } = this.state;
    return (
      <div id="segmentGroup">
      <Segment.Group>
      <Visibility
        onBottomPassed={() => this.setState({transparent: true})}
        onBottomPassedReverse={() => this.setState({transparent: false})}
        >
      <div id="header">
      <Segment inverted color="blue" textAlign="center"><Navbar transparent={transparent} /></Segment>
      </div>
      </Visibility>
        <Segment>About</Segment>
        <EducationGroup />
        <ProjectsGroup />
        <Segment>Links</Segment>
        <Segment inverted color="blue" textAlign="center">Footer</Segment>
      </Segment.Group>
      </div>
    )
  }
}

export default Home
