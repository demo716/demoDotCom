import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Button, Card, Image, Segment, ButtonContent, Icon } from 'semantic-ui-react'

/**
 * COMPONENT
 */
class CertifiedOpinions extends Component {

  render() {
    return (
      <div id="singleCard">
        <Card>
          <Card.Content>
            {/* <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' /> */}
            <Card.Header>Certified Opinions</Card.Header>
            <Card.Meta>Developer</Card.Meta>
            <Card.Description>
              An e-commerce web application where users can create, buy and certify their opinions.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <a href="https://github.com/h-a-m-r-time/grace-shopper" target="_blank">
              <Button animated color="black">
              <Button.Content hidden>Github</Button.Content>
              <Button.Content visible>
                <Icon name='github' />
              </Button.Content>
              </Button>
              </a>
              <a href="https://opinionated-oasis-4.herokuapp.com/" target="_blank">
              <Button animated color="violet">
              <Button.Content hidden>Heroku</Button.Content>
              <Button.Content visible>
                <Icon name='hand spock outline' />
              </Button.Content>
              </Button>
              </a>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default CertifiedOpinions
