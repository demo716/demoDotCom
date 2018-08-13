import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Button, Card, Image, Segment, ButtonContent, Icon } from 'semantic-ui-react'

/**
 * COMPONENT
 */
class ProjectsGroup extends Component {

  render() {
    return (
      <div id="projectsGroup">
      <Segment>
      <Card.Group>
        <Card>
          <Card.Content>
            {/* <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' /> */}
            <Card.Header>Certified Opinions</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
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
              <Button.Content hidden>Deployed</Button.Content>
              <Button.Content visible>
                <Icon name='hand spock outline' />
              </Button.Content>
              </Button>
          </Card.Content>
        </Card>
      </Card.Group>
      </Segment>
      </div>
    )
  }
}

export default ProjectsGroup

