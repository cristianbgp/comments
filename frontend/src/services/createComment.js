import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CREATE_COMMENT = gql`
  mutation($content: String!, $authorId: ID!) {
    createComment(content: $content, authorId: $authorId) {
      id
      content
      authorId
    }
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
  const [createComment] = useMutation(CREATE_COMMENT);

  return ({ content, authorId }) => {
    return createComment({
      variables: { content, authorId },
      refetchQueries: [{ query: GET_COMMENTS }]
    });
  };
};
