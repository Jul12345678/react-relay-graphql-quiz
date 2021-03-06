// relay.config.js
module.exports = {
  src: './src',
  language: 'javascript' | 'typescript' | 'flow',
  schema: './src/schema/schema.graphql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
};
