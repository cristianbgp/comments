import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import styled, { createGlobalStyle } from "styled-components";
import Comments from "./components/comments";

import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

function App() {
  const httpLink = createHttpLink({
    uri: "http://localhost:4000"
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });

  const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, #f8fafb 0%, #a0a0a0 100%);
  `;

  const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Rubik", sans-serif;
    margin: 0;
  }
`;

  return (
    <ApolloHooksProvider client={client}>
      <GlobalStyle />
      <Container>
        <Comments />
      </Container>
    </ApolloHooksProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

serviceWorker.unregister();
