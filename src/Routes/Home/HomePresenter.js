import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
const Container = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const HomePresenter = ({
  nowPlaying,
  topRated,
  popular,
  upcoming,
  error,
  loading,
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imgUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imgUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imgUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imgUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message text={error} color="#c0392b" />}
    </Container>
  );
HomePresenter.propTypes = {
  nowPlaying: Proptypes.array,
  topRated: Proptypes.array,
  popular: Proptypes.array,
  upcoming: Proptypes.array,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired,
};

export default HomePresenter;
