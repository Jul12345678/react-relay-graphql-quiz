import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from './Environment';
import ListPage from './ListPage';

const appAllPostQuery = graphql`
  query appAllPostQuery {
    viewer {
      ...ListPage_viewer
    }
  }
`;

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={appAllPostQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <ListPage viewer={props.viewer} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default App;
