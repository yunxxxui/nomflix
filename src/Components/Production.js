import React from "react";
import styled from "styled-components";

const Container = styled.div`
  line-height: 1.7;
  display: flex;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 8px;
`;

const PCompanies = styled.div`
  margin: 16px;
`;

const PCountries = styled.div`
  margin: 16px;
`;

const Img = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
  margin-top: 8px;
  width: 100%;
  height: 100px;
`;

const Item = styled.div`
  width: 240px;
  height: auto;
  background-color: #202020;
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
`;

const Production = ({
  result: { production_companies, production_countries },
}) => (
  <Container>
    <PCompanies>
      <Title>Production Companies</Title>
      {production_companies && production_companies.length > 0
        ? production_companies.map((company, index) => (
            <Item>
              <h4>{company.name}</h4>
              <Img
                bgUrl={
                  company.logo_path
                    ? `https://image.tmdb.org/t/p/w300${company.logo_path}`
                    : null
                }
              />
            </Item>
          ))
        : "None"}
    </PCompanies>
    <PCountries>
      <Title>Production Countries</Title>
      {production_countries && production_countries.length > 0 ? (
        production_countries.map((country, index) => (
          <Item>{country.name}</Item>
        ))
      ) : (
        <Item>None</Item>
      )}
    </PCountries>
  </Container>
);

export default Production;
