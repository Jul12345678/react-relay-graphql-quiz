const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { userInfo } = require('os');

const schema = buildSchema(`
  type Query {
    quiz: Quiz
    viewer: Viewer
  }

  type Quiz {
    id: ID
    question: String
    answer: Boolean
  }

  type Viewer {
id: ID
    allPosts: [Quiz]
    userId: String
  }


`);

const root = {
  getQuestion: () => ({
    id: '1',
    question: 'What is the best programming language?',
    answer: true,
  }),
  viewer: () => ({
    id: '1',
    userId: '1',
    allPosts: [
      {
        id: '1',
        question: 'What is the best programming language?',
        answer: true,
      },
      {
        id: '2',
        question: 'What is the best programming language?',
        answer: true,
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
