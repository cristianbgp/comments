import React from "react";
import styled from "styled-components";
import { Card, Title } from "./ui.js";

function Comment({ comment, deleteComment }) {
  const CommentCard = styled(Card)`
    margin: 1em 0;
    position: relative;
    word-break: break-word;
  `;

  const DeleteButton = styled.button`
    position: absolute;
    right: 0.6em;
    top: 0.6em;
    padding: 0;
    background: #000000;
    box-shadow: 0 4px 15px 0 rgba(37, 37, 37, 0.75);
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: bold;
    transition: all 0.4s ease-in-out;
    text-align: center;
    width: 40px;
    height: 40px;
    outline: none;
    &:hover {
      background: #3a3a3a;
      color: #ffffff;
      transition: all 0.3s ease-in-out;
    }
  `;

  function handleClick() {
    deleteComment(comment.id);
  }

  return (
    <CommentCard>
      <Title>{comment.author.username}</Title>
      <p>{comment.content}</p>
      <DeleteButton onClick={handleClick}>
        <span>X</span>
      </DeleteButton>
    </CommentCard>
  );
}

export default Comment;
