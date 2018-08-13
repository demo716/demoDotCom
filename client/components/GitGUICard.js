import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Button, Card, Image, Segment, ButtonContent, Icon } from 'semantic-ui-react'

/**
 * COMPONENT
 */
class GitGUI extends Component {

  render() {
    return (
      <div id="singleCard">
        <Card>
          <Card.Content>
            {/* <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' /> */}
            <Card.Header>GitGUI</Card.Header>
            <Card.Meta>Developer</Card.Meta>
            <Card.Description>
              An Electron based GUI of Github where users can view, commit, push and pull from their repositories.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <a href="https://github.com/CapstoneGitGui/Github_gui" target="_blank">
              <Button animated color="black">
              <Button.Content hidden>Github</Button.Content>
              <Button.Content visible>
                <Icon name='github' />
              </Button.Content>
              </Button>
              </a>
              <a href="https://youtu.be/Mf5f1PtdSNw" target="_blank">
              <Button animated color="red">
              <Button.Content hidden>Youtube</Button.Content>
              <Button.Content visible>
                <Icon name='youtube' />
              </Button.Content>
              </Button>
              </a>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default GitGUI
