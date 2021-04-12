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
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="TopRated">
          {topRated.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              title={tv.name}
              imgUrl={tv.poster_path}
              rating={tv.vote_average}
              year={tv.first_air_date}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              title={tv.name}
              imgUrl={tv.poster_path}
              rating={tv.vote_average}
              year={tv.first_air_date}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              title={tv.name}
              imgUrl={tv.poster_path}
              rating={tv.vote_average}
              year={tv.first_air_date}
            />
          ))}
        </Section>
      )}
      {error && <Message text={error} color="#c0392b" />}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: Proptypes.array,
  popular: Proptypes.array,
  airingToday: Proptypes.array,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired,
};

export default TVPresenter;
