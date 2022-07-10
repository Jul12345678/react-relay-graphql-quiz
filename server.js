const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    getPost: Post
    viewer: Viewer

  }

  type Post {
    description: String!
    imageUrl: String!
    id: ID
    edges: [Post]
    node: Post
  }

  type Viewer {
    edges: [Post]
    allPosts: [Post]
    id: ID
    allPosts(last: Int, orderBy: String): [Post]
    createdAT: String
    last: Int
  }

`);

const root = {
  getPost: () => ({
    description: 'Hello World',
    imageUrl: 'https://source.unsplash.com/random',
  }),
  getViewer: () => ({
    createdAT: new Date(),
    allPosts: () => [
      {
        last: 5,
        orderBy: 'createdAt_DESC',
      },
    ],
  }),
};

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

const PORT = process.env.PORT || 4000;
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
