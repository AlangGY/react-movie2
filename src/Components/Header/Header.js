/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  -webkit-box-shadow: 0px 2px 15px 0px #353535;
  box-shadow: 0px 2px 15px 0px #353535;
  background-color: rgba(20, 20, 20, 1);
  z-index: 2;
`;

const List = styled.ul`
  display: flex;
  width: 33vw;
  height: inherit;
  justify-content: space-around;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: inherit;
  width: 33%;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#c0392b" : "transparent")};
`;

const SLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TVs</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
