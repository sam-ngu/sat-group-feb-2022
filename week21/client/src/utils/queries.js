import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query GetCurrentUser {
    me {
      _id
      bookCount
      email
      bookCount
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
      username
    }
}
`;

