import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Button, Segment, Container, Visibility } from 'semantic-ui-react'
import ProjectsGroup from './Projects/projectsGroup'
import Navbar from './navbar'
import EducationGroup from './Education/educationGroup'
import Intro from './intro'
import About from './about'
import Skills from './skills'

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
        <Navbar />
        {/* <Segment inverted color="blue" textAlign="center"> */}
        <Intro />
        {/* </Segment> */}
        <About />
        <Skills />
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
