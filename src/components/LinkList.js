import React, { Component } from 'react';
import Link from './Link';

class LinkList extends Component {
  render() {
    const linksToRender = [
      {
        id: '1',
        url: 'localhost:4000/graphql',
        description: 'This is a link to the GraphQL API',
      },
      {
        id: '2',
        url: 'https://facebook.github.io/relay/',
        description: 'GraphQL client from facebook',
      },
    ];
    return (
      <div>
        {linksToRender.map((link) => (
          <Link key={link.id} link={link} />
        ))}
      </div>
    );
  }
}

export default LinkList;
