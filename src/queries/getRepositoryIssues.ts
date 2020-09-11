import { gql } from "@apollo/client";

export default gql`
  query($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      issues(first: 20, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          title
          body
          number
          createdAt
          closed
          comments {
            totalCount
          }
          author {
            login
            avatarUrl
          }
        }
      }
    }
  }
`;
