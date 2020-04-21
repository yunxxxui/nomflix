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
`;

const TabContent = styled.div``;

const Tabs = withRouter(({ location, result }) => (
  <Container>
    <TabList>
      <Tab>
        <NavLink
          to={`${location.pathname}?video`}
          current={location.search === "?video" || location.search === ""}
        >
          Videos
        </NavLink>
      </Tab>
      <Tab>
        <NavLink
          to={`${location.pathname}?production`}
          current={location.search === "?production"}
        >
          Production
        </NavLink>
      </Tab>
      <Tab>
        <NavLink
          to={`${location.pathname}?seasons`}
          current={location.search === "?seasons"}
        >
          Seasons
        </NavLink>
      </Tab>
    </TabList>

    <TabContent>
      {(location.search === "?video" || location.search === "") && (
        <Video result={result} />
      )}
      {location.search === "?production" && <Production result={result} />}
      {location.search === "?seasons" && <Seasons result={result} />}
    </TabContent>
  </Container>
));

export default Tabs;
