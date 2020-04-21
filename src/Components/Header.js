import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background-color: rgba(20, 20, 20, 0.7);
  backdrop-filter: saturate(180%) blur(32px);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  color: ${(props) => (props.current ? "white" : "#bdbdbd")};
  width: 72px;
  height: 48px;
  text-align: center;
  border-bottom: 2px solid transparent;
  border-bottom: 2px solid
    ${(props) => (props.current ? "#3498db" : "transperent")};
  transition: border 0.5s ease-in-out;
`;

const ALink = styled(Link)`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <ALink to="/">Movie</ALink>
      </Item>
      <Item current={pathname === "/tv"}>
        <ALink to="/tv">TV</ALink>
      </Item>
      <Item current={pathname === "/search"}>
        <ALink to="/search">Search</ALink>
      </Item>
    </List>
  </Header>
));
