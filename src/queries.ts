import { gql } from "@apollo/client";

export const GET_REPO_ISSUES = gql`
  query($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      issues(
        first: 20
        states: [OPEN]
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          title
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
