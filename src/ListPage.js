import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Post from './Post';

class ListPage extends React.Component {
  render() {
    return (
      <div className="list-page">
        <div className="list-page-header" style={{ maxWidth: 400 }}>
          {this.props.viewer.allPosts.edges.map(({ node }) => (
            <Post key={node.id} post={node} />
          ))}
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(
  ListPage,
  graphql`
    fragment ListPage_viewer on Viewer {
      allPosts(last: 5, orderBy: createdAt_DESC)
        @connection(key: "ListPage_allPosts", filters: []) {
        edges {
          node {
            ...Post_post
          }
        }
      }
    }
  `,
);
