import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import Tabs from "./DetailTabs";

const Container = styled.div`
  height: calc(100vh - 48px);
  width: 100%;
  position: relative;
`;

const BackDrop = styled.div`
  position: absolute;
  top: -48px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to top,
      rgba(20, 20, 20, 1) 50%,
      rgba(20, 20, 20, 0)
    ),
    url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

const Cover = styled.div`
  margin-top: 160px;
  width: 160px;
  height: 240px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
`;

const Data = styled.div`
  margin-top: 160px;
  width: 640px;
  margin-left: 24px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const ItemContainer = styled.div`
  margin: 16px 0;
  line-height: 1.7;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 8px;
`;

const Overview = styled.p`
  color: #bdbdbdbd;
  line-height: 1.7;
  width: 80%;
`;

const A = styled.a`
  position: relative;
`;

const Svg = styled.svg`
  position: absolute;
  top: 2px;
  left: 0;
  width: 40px;
  height: 20px;
  background-image: url(https://ia.media-imdb.com/images/M/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@._V1_.png);
  background-size: cover;
  background-position: center center;
`;

const Rating = styled.div`
  font-size: 24px;
  color: #ffbf00;
  margin-bottom: 8px;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Nomflix
        </title>
      </Helmet>
      <BackDrop
        bgImage={`https:///image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https:///image.tmdb.org/t/p/w300${result.poster_path}`
              : null
          }
        ></Cover>
        <Data>
          <Rating>
            {["☆", "☆", "☆", "☆", "☆"]
              .fill("★", 0, Math.round(result.vote_average / 2))
              .join(" ")}
          </Rating>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              <span role="img" aria-label="date">
                {"📆 "}
              </span>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>·</Divider>
            <Item>
              <span role="img" aria-label="date">
                {"⏰ "}
              </span>
              {result.runtime ? result.runtime : result.episode_run_time} min
            </Item>
            <Divider>·</Divider>
            <Item>
              <span role="img" aria-label="date">
                {"👁‍🗨 "}
              </span>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            {result.imdb_id ? (
              <>
                <Divider>·</Divider>
                <Item>
                  <A
                    href={`https://www.imdb.com/title/${result.imdb_id}`}
                    target="blank"
                  >
                    <Svg></Svg>
                  </A>
                </Item>
              </>
            ) : null}
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
      <Content>
        <Tabs result={result} />
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
