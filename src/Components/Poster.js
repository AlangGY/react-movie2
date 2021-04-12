import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Image = styled.div`
  width: 150px;
  height: 200px;
  background-image: url(${(props) => props.imgUrl});
  background-size: 100%;
  z-index: 2;
  transition: all 0.3s ease-in-out;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 200px;
  margin-bottom: 5px;
  &:hover {
    ${Rating} {
      opacity: 0.9;
    }
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-size: 18px;
  text-align: center;
  margin-bottom: 5px;
  height: 35px;
`;

const Year = styled.span`
  align-self: flex-end;
  color: #7f8c8d;
`;

const DetailLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    ${Image} {
      -webkit-box-shadow: 0px 0px 14px 3px rgba(127, 127, 127, 0.78);
      box-shadow: 0px 0px 14px 3px rgba(127, 127, 127, 0.78);
      opacity: 0.9;
    }
  }
`;

const Poster = ({ id, title, imgUrl, rating, year, isMovie = false }) => (
  <Container>
    <DetailLink to={isMovie ? `movie/${id}` : `tv/${id}`}>
      <ImageContainer>
        <Image
          imgUrl={imgUrl && `https://image.tmdb.org/t/p/w300/${imgUrl}`}
        ></Image>
        <Rating> ⭐ {rating} / 10</Rating>
      </ImageContainer>
      <DescriptionContainer>
        <Title>
          {title && title.length > 10 ? `${title.substring(0, 10)}...` : title}
        </Title>
        <Year>{year ? year.substring(0, 4) : null}</Year>
      </DescriptionContainer>
    </DetailLink>
  </Container>
);

Poster.propTypes = {
  id: Proptypes.number,
  title: Proptypes.string,
  imgUrl: Proptypes.string,
  rating: Proptypes.number,
  year: Proptypes.string,
  isMovie: Proptypes.bool,
};

export default Poster;
