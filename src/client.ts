import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_KEY}`,
  },
});

export default client;
