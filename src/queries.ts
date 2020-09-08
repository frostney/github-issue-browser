import { gql } from "@apollo/client";

export const GET_ISSUE = gql`
  query($name: String!, $owner: String!, $id: Int!) {
    repository(name: $name, owner: $owner) {
      issue(number: $id) {
        title
        closed
        createdAt
        bodyHTML
        author {
          login
          avatarUrl
        }
        comments(last: 20) {
          nodes {
            bodyHTML
            author {
              login
              avatarUrl
            }
          }
        }
      }
    }
  }
`;

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
