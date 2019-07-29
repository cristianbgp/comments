import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_COMMENTS = gql`
  query {
    comments {
      id
      content
      author {
        id
        username
      }
    }
  }
`;

export default () => useQuery(GET_COMMENTS);
