import styled from "styled-components";

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  resize: none;
  outline: none;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  border-image: initial;
  padding: 1em;
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

export const Button = styled.button`
  background: #000000;
  box-shadow: 0 4px 15px 0 rgba(37, 37, 37, 0.75);
  border: none;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.75rem 0;
  transition: all 0.4s ease-in-out;
  text-align: center;
  text-transform: uppercase;
  background-size: 300% 100%;
  width: 100%;
  outline: none;
  &:hover {
    background: #ffffff;
    color: #000000;
    transition: all 0.3s ease-in-out;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 0.5em;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  padding: 2rem;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  margin: 1em 0;
`;
