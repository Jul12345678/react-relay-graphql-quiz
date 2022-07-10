const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    getPost: Post
  }

  type Post {
    id: ID!
    description: String!
    imageUrl: String!
    edges: [Post]
    node: Post
  }



`);

const root = {
  getPost: () => ({
    description: 'Hello World',
    imageUrl: 'https://source.unsplash.com/random',
    id: '1',
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
