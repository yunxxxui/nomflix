import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contaienr = styled.div`
  margin-bottom: 16px;
  margin-right: 16px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-color: #202020;
  height: 184px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: height 0.1s linear;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 8px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`;

const Title = styled.h2`
  margin-bottom: 4px;
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Year = styled.span`
  font-size: 14px;
  color: #9e9e9e;
`;

const SeasonPotster = ({ id, imageUrl, title, year }) => (
  <Link to={`/show/${id}`}>
    <Contaienr>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/Popcorn_Time_logo.png")
          }
        />
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Contaienr>
  </Link>
);

SeasonPotster.propTyes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
};

export default SeasonPotster;
