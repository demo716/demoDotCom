import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Button, Segment, Container } from 'semantic-ui-react'

/**
 * COMPONENT
 */
class Home extends Component {

  render() {
    return (
      <div id="segmentGroup">
      <Segment.Group>
        <Segment inverted basic color="blue" textAlign="center">Hello</Segment>
        <Segment>About</Segment>
        <Segment>Education</Segment>
        <Segment>Projects</Segment>
        <Segment>Links</Segment>
        <Segment inverted color="blue" textAlign="center">Footer</Segment>
      </Segment.Group>
      </div>
    )
  }
}

export default Home
