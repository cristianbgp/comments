import React from "react";
import styled from "styled-components";
import { TextArea, Button, Title } from "./ui";
import Comment from "./comment.js";
import getComments from "../services/allComments";
import deleteComments from "../services/deleteComment";
import createComments from "../services/createComment";

function Comments() {
  const { loading, data } = getComments();
  const deleteComment = deleteComments();
  const createComment = createComments();

  const Wrapper = styled.div`
    width: 50%;
    height: 100vh;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 720px) {
      width: 80%;
    }
  `;

  const Form = styled.form`
    width: 100%;
  `;

  const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
  `;

  const CommentList = styled.div`
    height: 75%;
    overflow-y: auto;
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar {
      width: 6px;
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #000;
    }
  `;

  function handleSubmit(event) {
    event.preventDefault();
    const inputComment = event.target.elements.inputComment.value;
    if (inputComment === "") return;
    createComment({ content: inputComment, authorId: "1" });
    event.target.reset();
  }

  if (loading) return <p>Loading...</p>;

  return (
    <Wrapper>
      <Title>Comments</Title>
      <Main>
        <CommentList>
          {data.comments.map(comment => {
            return (
              <Comment
                key={comment.id}
                comment={comment}
                deleteComment={deleteComment}
              />
            );
          })}
        </CommentList>
        <Form onSubmit={handleSubmit}>
          <TextArea name="inputComment" />
          <Button>Send Comment</Button>
        </Form>
      </Main>
    </Wrapper>
  );
}

export default Comments;
