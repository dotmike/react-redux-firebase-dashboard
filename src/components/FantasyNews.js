import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFantasy } from '../actions';
import _ from 'lodash';
import { Item, Segment } from 'semantic-ui-react';
import Navbar from './Navbar';

class FantasyNews extends Component {
  componentWillMount() {
    this.props.fetchFantasy();
  }

  renderFantasy() {
    return _.map(this.props.fantasy, article => {
      let re = /&apos;/g;
      let quotes = /&quot;/g;
      let bodyStr = article.body;
      let analysisStr = article.analysis;
      let newAnalysis = analysisStr.replace(re, "'");
      let newerAnalysis = newAnalysis.replace(quotes, '"');
      let newBody = bodyStr.replace(re, "'");
      let newerBody = newBody.replace(quotes, '"');

      return(
        <Segment raised key={article.id}>
          <Item>
            <Item.Content>
              <Item.Header as='a'>{newerBody}</Item.Header>
              <Item.Meta>{article.firstName} {article.lastName}</Item.Meta>
              <Item.Description>
                {newerAnalysis}
              </Item.Description>
            </Item.Content>
          </Item>
        </Segment>
      )
    })
  }

  render() {
    return (
      <div>
        <Navbar activeNav="fantasy"/>
        <Item.Group>
          {this.renderFantasy()}
        </Item.Group>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fantasy: state.fantasy
  };
}

export default withRouter(connect(mapStateToProps, { fetchFantasy })(FantasyNews));
