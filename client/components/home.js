import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Button, Segment, Container } from 'semantic-ui-react'
import ProjectsGroup from './Projects/projectsGroup'
import Navbar from './navbar'

/**
 * COMPONENT
 */
class Home extends Component {

  render() {
    return (
      <div id="segmentGroup">
      <Segment.Group>
      <div id="header">
      <Segment inverted color="blue" textAlign="center"><Navbar /></Segment>
      </div>
        <Segment>About</Segment>
        <Segment>Education</Segment>
        <ProjectsGroup />
        <Segment>Links</Segment>
        <Segment inverted color="blue" textAlign="center">Footer</Segment>
      </Segment.Group>
      </div>
    )
  }
}

export default Home
