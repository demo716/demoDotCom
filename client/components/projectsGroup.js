import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Button, Card, Image, Segment, ButtonContent, Icon } from 'semantic-ui-react';
import CertifiedOpinions from './CertifiedOpinionsCard';
import HoopUp from './HoopUpCard';
import GitGUI from './GitGUICard';

/**
 * COMPONENT
 */
class ProjectsGroup extends Component {

  render() {
    return (
      <div id="projectsGroup">
      <Segment>
      <Card.Group itemsPerRow={3}>
        <CertifiedOpinions />
        <HoopUp />
        <GitGUI />
      </Card.Group>
      </Segment>
      </div>
    )
  }
}

export default ProjectsGroup

