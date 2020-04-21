import React from "react";
import styled from "styled-components";
import SeasonPoster from "./SeasonPoster";

const Container = styled.div`
  line-height: 1.7;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 24px;
`;

const Seasons = ({ result: { seasons: seasons } }) => (
  <Container>
    {seasons && seasons.length > 0 && (
      <Item>
        {seasons.map((season) => (
          <SeasonPoster
            key={season.id}
            id={season.id}
            imageUrl={season.poster_path}
            title={season.name}
            year={season.air_date && season.air_date.substring(0, 4)}
          />
        ))}
      </Item>
    )}
  </Container>
);

export default Seasons;
