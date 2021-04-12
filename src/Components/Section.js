import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
const Container = styled.div``;

const Title = styled.span`
  font-size: 32px;
  font-weight: 500;
  text-shadow: 2px 2px 7px rgba(132, 132, 132, 0.75);
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: 30vh;
  grid-auto-rows: 30vh;
  margin-top: 20px;
  column-gap: 10px;
  row-gap: 10px;
`;
const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.oneOfType([
    Proptypes.arrayOf(Proptypes.node),
    Proptypes.node,
  ]),
};

export default Section;
