import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const DELETE_COMMENT = gql`
  mutation($id: ID!) {
    deleteComment(id: $id)
  }
`;

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

export default () => {
  const [deleteComment] = useMutation(DELETE_COMMENT);

  return id => {
    return deleteComment({
      variables: { id },
      refetchQueries: [{ query: GET_COMMENTS }]
    });
  };
};
