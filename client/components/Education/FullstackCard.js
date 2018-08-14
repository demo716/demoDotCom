import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Button, Card, Image, Segment, ButtonContent, Icon } from 'semantic-ui-react'

/**
 * COMPONENT
 */
class Fullstack extends Component {

  render() {
    return (
      <div id="singleCard">
        <Card>
          <Card.Content>
            <Image floated='right' size='small' src='/images/fullstack_logo.png' />
            <Card.Header>Fullstack Academy of Code</Card.Header>
            <Card.Meta>Immersive Software Engineering Program - 2018</Card.Meta>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default Fullstack
