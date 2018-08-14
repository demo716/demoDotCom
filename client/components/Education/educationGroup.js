import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Card, Segment, Grid, GridRow, Header } from 'semantic-ui-react';
import Fullstack from './FullstackCard';
import Nyu from './CollegeCard';

/**
 * COMPONENT
 */
class EducationGroup extends Component {

  render() {
    return (
      <div>
      <Segment>
        <Grid>
          <GridRow>
          <Header size='large'>Education</Header>
          </GridRow>
          <GridRow>
          <div id="educationGroup">
          <Card.Group itemsPerRow={2}>
            <Fullstack />
            <Nyu  />
          </Card.Group>
          </div>
          </GridRow>
        </Grid>
      </Segment>
      </div>
    )
  }
}

export default EducationGroup

