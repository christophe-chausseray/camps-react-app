import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'http://localhost:3000/graphql'
});

const client = new ApolloClient({
  cache,
  link,
});

export { client }
