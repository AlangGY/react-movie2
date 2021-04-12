import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  font-size: 24px;
  font-weight: 500;
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.propTypes = {
  text: Proptypes.string.isRequired,
  color: Proptypes.string.isRequired,
};

export default Message;
