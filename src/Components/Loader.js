import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Container = styled.div`
  height: 100vh-48px;
  width: 100vw-48px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  padding: 24px;
`;

export default () => (
  <Container>
    <Helmet>
      <title>Loading... | Nomflix</title>
    </Helmet>
    <span role="img" aria-label="loading">
      ⏰
    </span>
  </Container>
);
