import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Button, Card, Image, Segment, ButtonContent, Icon } from 'semantic-ui-react'

/**
 * COMPONENT
 */
class HoopUp extends Component {

  render() {
    return (
      <div id="singleCard">
        <Card>
          <Card.Content>
            {/* <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' /> */}
            <Card.Header>HoopUp</Card.Header>
            <Card.Meta>Developer</Card.Meta>
            <Card.Description>
              A web application that allows users to schedule and find pick up basketball games in NYC.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <Button animated>
              <Button.Content hidden>Github</Button.Content>
              <Button.Content visible>
                <Icon name='github' />
              </Button.Content>
              </Button>
              <Button animated>
              <Button.Content hidden>Youtube</Button.Content>
              <Button.Content visible>
                <Icon name='youtube' />
              </Button.Content>
              </Button>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default HoopUp
