import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'http://localhost:3000/graphql',
  // Use explicit `window.fetch` so tha outgoing requests
  // are captured and deferred until the Service Worker is ready.
  //@ts-ignore
  fetch: (...args) => fetch(...args),
});

const client = new ApolloClient({
  ssrMode: true,
  ssrForceFetchDelay: 100,
  cache,
  link,
});

export { client }
