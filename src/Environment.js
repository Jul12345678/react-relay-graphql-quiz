const { Environment, Network, RecordSource, Store } = require('relay-runtime');

// 1
const source = new RecordSource();
// 2
const store = new Store(source);
// 3
const network = Network.create((operation, variables) => {
  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
});
// 4
const handlerProvider = null;
// 5
const environment = new Environment({
  handlerProvider, // Can omit.
  network,
  store,
});

// 6
export default environment;
