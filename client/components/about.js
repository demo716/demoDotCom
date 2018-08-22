import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Button, Segment, Container, Visibility, Header } from 'semantic-ui-react'
import ProjectsGroup from './Projects/projectsGroup'
import Navbar from './navbar'
import EducationGroup from './Education/educationGroup';

/**
 * COMPONENT
 */
class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div id="about">
      <Container text>
        <Header as='h1'>About</Header>
        <p>
          Prior to
        </p>
      </Container>
      </div>
    )
  }
}

export default About
