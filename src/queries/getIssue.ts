import { gql } from "@apollo/client";

export default gql`
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
