import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import Video from "../../Components/Video";
import Production from "../../Components/Production";
import Seasons from "../../Components/Seasons";

const Container = styled.div`
  margin: 24px;
  width: 100%;
`;

const TabList = styled.ul`
  display: flex;
  justify-content: center;
`;

const Tab = styled.li`
  margin: 24px;
  padding-bottom: 4px;
  color: ${(props) => (props.current ? "white" : "#bdbdbd")};
  border-bottom: 2px solid
    ${(props) => (props.current ? "white" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const TabContent = styled.div``;

const Tabs = withRouter(({ location, result }) => (
  <Container>
    <TabList>
      <Tab current={location.search === "?tab=video" || location.search === ""}>
        <NavLink to={`${location.pathname}?tab=video`}>Videos</NavLink>
      </Tab>
      <Tab current={location.search === "?tab=production"}>
        <NavLink to={`${location.pathname}?tab=production`}>Production</NavLink>
      </Tab>
      <Tab current={location.search === "?tab=seasons"}>
        <NavLink to={`${location.pathname}?tab=seasons`}>Seasons</NavLink>
      </Tab>
    </TabList>

    <TabContent>
      {(location.search === "?tab=video" || location.search === "") && (
        <Video result={result} />
      )}
      {location.search === "?tab=production" && <Production result={result} />}
      {location.search === "?tab=seasons" && <Seasons result={result} />}
    </TabContent>
  </Container>
));

export default Tabs;
