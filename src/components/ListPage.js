import React from 'react';
import Post from './Post';

const mockPostData = [
  {
    node: {
      id: '1',
      description: 'This is a post',
      imageUrl: 'https://source.unsplash.com/random',
    },
  },
];

class ListPage extends React.Component {
  render() {
    return (
      <div className="list-page">
        <div className="list-page-header" style={{ maxWidth: 400 }}>
          {mockPostData.map(({ node }) => (
            <Post key={node.id} post={node} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListPage;
