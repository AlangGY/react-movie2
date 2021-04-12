import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = keyframes`
    0%{
        transform:scaleY(1);
    }
    50%{
        transform:scaleY(10);
    }
    100%{
        transform:scaleY(1);
    }
`;

const LoadingBarContainer = styled.div`
  width: 80px;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;
const LoadingBar = styled.div`
  height: 5px;
  width: 10px;
  background-color: white;
  animation: ${Loading} 0.5s ease-in-out infinite;
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => (
  <Container>
    <LoadingBarContainer>
      <LoadingBar></LoadingBar>
      <LoadingBar></LoadingBar>
      <LoadingBar></LoadingBar>
      <LoadingBar></LoadingBar>
      <LoadingBar></LoadingBar>
    </LoadingBarContainer>
  </Container>
);

export default Loader;
