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
class Intro extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div id="header">
      <Container text>
        <Header as='h1'>Hi, I'm Marino Demo.</Header>
      </Container>
      </div>
    )
  }
}

export default Intro
