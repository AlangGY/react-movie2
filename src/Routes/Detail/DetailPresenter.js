import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  width: 100%;
  height: 95vh;
  padding: 20px 5vw;
  background-color: rgba(0, 0, 0, 0.2);
`;
const Movie = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.4fr 0.5fr;
  grid-template-rows: 30px 1fr;
  grid-template-areas:
    "info1 . ."
    "poster info2 video";
  background-color: rgba(0, 0, 0, 0.2);
  cursor: default;
  padding: 10px;
  padding-top: 5px;
  border-radius: 2px;
  > * {
    border-radius: 5px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  z-index: -1;
`;

const Info1 = styled.div`
  grid-area: info1;
  display: flex;
  height: 100%;
  padding-left: 10px;
  align-items: center;
  font-size: 13px;
  overflow: hidden;
  a {
    color: #f39c12;
    font-weight: 600;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const Poster = styled.div`
  grid-area: poster;
  justify-self: center;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-right: 5px;
`;
const Info2 = styled.div`
  grid-area: info2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 120px 40px 40px 1fr 60px;
  grid-template-areas:
    "title title"
    "production production"
    "tagline tagline"
    "overview overview"
    "genres rating";
  align-items: center;
  padding: 35px;
  background-color: rgba(0, 0, 0, 0.05);
`;
const Info2Title = styled.div`
  grid-area: title;
  font-size: 40px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`;
const Info2Production = styled.div`
  grid-area: production;
  display: flex;
  justify-content: flex-end;
`;
const Info2Tagline = styled.div`
  grid-area: tagline;
  justify-self: flex-end;
`;

const Info2Overview = styled.div`
  grid-area: overview;
  padding: 20px 5px;
  font-size: 18px;
  white-space: pre-line;
  line-break: loose;
  line-height: 1.4em;
  align-self: flex-start;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 15px;
`;

const Info2Genres = styled.div`
  grid-area: genres;
  width: 100%;
  justify-self: center;
  font-size: 30px;
  opacity: 0.8;
  display: flex;
  justify-content: space-around;
  span {
    text-align: center;
  }
`;

const Info2Rating = styled.div`
  grid-area: rating;
  justify-self: center;
  font-size: 20px;
`;
const Videos = styled.div`
  grid-area: video;
  width: 100%;
  height: 100%;
  z-index: 3;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    &:first-child {
      margin-top: 10px;
    }
    img {
      width: calc(100% - 30px);
      margin-bottom: 5px;
    }
  }
`;

const Video = styled.iframe`
  width: calc(100% - 5px);
  margin-bottom: 10px;
  &:first-child {
    margin-top: 10px;
  }
`;
// backdrop_path,
// title,
// tagline,
// overview,
// genres,
// vote_average,
// poster_path,
// release_date,
// runtime,
// videos,
const DetailPresenter = ({ result, error, loading, isMovie }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgUrl={
          result.backdrop_path &&
          `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
        }
      />
      <Movie>
        <Info1>
          <span>
            Release Date :{" "}
            {isMovie ? result.release_date : result.first_air_date} / 상영시간 :{" "}
            {isMovie ? result.runtime : result.episode_run_time}분{" "}
            {isMovie && (
              <a
                href={`https://www.imdb.com/title/${result.imdb_id}`}
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                / <i class="fas fa-link"></i>
                Link to IMDB
              </a>
            )}
          </span>
        </Info1>
        <Poster
          bgUrl={
            result.poster_path &&
            `https://image.tmdb.org/t/p/original/${result.poster_path}`
          }
        />
        <Info2>
          <Info2Title>{isMovie ? result.title : result.name}</Info2Title>
          <Info2Production>
            {result.production_companies
              .map((company) => company.name)
              .join(" , ")}{" "}
            /{" "}
            {result.production_countries
              .map((country) => country.name)
              .join(" , ")}
          </Info2Production>
          <Info2Tagline>
            {isMovie
              ? result.tagline
              : `${result.number_of_seasons} 시즌 / ${result.number_of_episodes} 에피소드`}
          </Info2Tagline>
          <Info2Overview>{result.overview}</Info2Overview>
          <Info2Genres>
            {result.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </Info2Genres>
          <Info2Rating> ⭐ {result.vote_average}</Info2Rating>
        </Info2>
        <Videos>
          {isMovie
            ? result.videos.results.map((result) => (
                <Video
                  src={`https://www.youtube-nocookie.com/embed/${result.key}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
                  allowFullScreen="allowFullScreen"
                  title="YouTube video player"
                ></Video>
              ))
            : result.seasons.map((season) => (
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`}
                    alt={season.name}
                  ></img>
                  <span>
                    {season.name} / {season.episode_count} 에피소드
                  </span>
                </div>
              ))}
        </Videos>
      </Movie>
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: Proptypes.object,
  error: Proptypes.object,
  loading: Proptypes.bool.isRequired,
  isMovie: Proptypes.bool.isRequired,
};

export default DetailPresenter;
