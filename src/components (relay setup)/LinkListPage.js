import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../Environment';
import LinkList from './LinkList';

const LinkListPageQuery = graphql`
  query LinkListPageQuery {
    viewer {
      ...LinkList_viewer
    }
  }
`;

class LinkListPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={LinkListPageQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <div>Loading...</div>;
          }
          return <LinkList viewer={props.viewer} />;
        }}
      />
    );
  }
}
