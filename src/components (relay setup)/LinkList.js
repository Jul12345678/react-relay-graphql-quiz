import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Link from './Link';

class LinkList extends Component {
  render() {
    return (
      <div>
        {this.props.viewer.allLinks.edges.map(({ node }) => (
          <Link key={node.__id} link={node} />
        ))}
      </div>
    );
  }
}
export default createFragmentContainer(
  LinkList,
  graphql`
    fragment LinkList_link on Viewer {
      allLinks(last: 100, oderBy: createdAt_DESC)
        @connection(key: "LinkList_allLinks", filters: []) {
        edges {
          node {
            ...Link_link
          }
        }
      }
    }
  `,
);
