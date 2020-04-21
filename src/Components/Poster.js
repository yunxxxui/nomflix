import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contaienr = styled.div`
  margin-bottom: 16px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 184px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: height 0.1s linear;
`;

const Rating = styled.span`
  opacity: 0;
  transition: 0.1s linear;
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 8px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
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

const Potster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Contaienr>
      <ImageContainer>
        <Image
          bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : null}
        />
        <Rating>
          <span rol="img" aria-label="rating">
            ⭐
          </span>
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Contaienr>
  </Link>
);

Potster.propTyes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.number,
  isMovie: PropTypes.bool,
};

export default Potster;
