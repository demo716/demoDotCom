import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Grid, Header, GridRow, GridColumn } from 'semantic-ui-react'

/**
 * COMPONENT
 */
class Skills extends Component {

  render() {
    return (
      <div id="skillGroup">
      <Header as='h1'>Skills</Header>
      <Header as='h2'>Proficient</Header>
        <Grid columns="equal">
          <GridRow>
            <GridColumn>
              <i className="devicon-javascript-plain"></i>
            </GridColumn>
            <GridColumn>
              <i className="devicon-html5-plain-wordmark"></i>
            </GridColumn>
            <GridColumn>
              <i className="devicon-css3-plain-wordmark"></i>
            </GridColumn>
            <GridColumn>
              <i className="devicon-nodejs-plain-wordmark"></i>
            </GridColumn>
            <GridColumn>
              <i className="devicon-react-original-wordmark"></i>
            </GridColumn>
            <GridColumn>
              <i className="devicon-express-original-wordmark"></i>
            </GridColumn>
            <GridColumn>
              <i className="devicon-postgresql-plain-wordmark"></i>
            </GridColumn>
            <GridColumn>
              <i className="devicon-sequelize-plain-wordmark"></i>
            </GridColumn>
            <GridColumn>
              <i className="devicon-git-plain-wordmark  "></i>
            </GridColumn>
          </GridRow>
        </Grid>
        <Header as='h2'>Knowledgeable</Header>
        <Grid>
          <GridRow>
            <GridColumn>
              <i className="devicon-javascript-plain"></i>
            </GridColumn>
            <GridColumn>
              <i className="devicon-html5-plain-wordmark"></i>
            </GridColumn>
            <GridColumn>
              <i className="devicon-css3-plain-wordmark"></i>
            </GridColumn>
          </GridRow>
        </Grid>
      </div>
    )
  }
}

export default Skills
