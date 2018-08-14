import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Button, Card, Image, Segment, ButtonContent, Icon } from 'semantic-ui-react'

/**
 * COMPONENT
 */
class Nyu extends Component {

  render() {
    return (
      <div id="singleCard">
        <Card>
          <Card.Content>
            <Image floated='right' size='small' src='/images/nyu_logo.jpg' />
            <Card.Header>New York University - Tandon School of Engineering</Card.Header>
            <Card.Meta>MS Civil Engineering - 2013</Card.Meta>
            <Card.Meta>BS Civil Engineering - 2010</Card.Meta>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default Nyu
