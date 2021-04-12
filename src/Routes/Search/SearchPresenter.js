import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  all: unset;
  font-size: 32px;
  opacity: 0.8;
  text-align: center;
  &::placeholder {
    text-align: center;
  }
`;

const SearchPresenter = ({
  tvSearch,
  movieSearch,
  query,
  error,
  loading,
  handleSubmit,
  handleInput,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TVs"
        value={query}
        onChange={handleInput}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieSearch && movieSearch.length > 0 && (
          <Section title="Movie Search">
            {movieSearch.map((movie) => (
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
        {tvSearch && tvSearch.length > 0 && (
          <Section title="TV Search">
            {tvSearch.map((tv) => (
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
        {tvSearch &&
          movieSearch &&
          movieSearch.length === 0 &&
          tvSearch.length === 0 && <Message text="Not Found" color="#7f8c8d" />}
        {error && <Message text={error} color="#c0392b" />}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  tvSearch: Proptypes.array,
  movieSearch: Proptypes.array,
  query: Proptypes.string,
  error: Proptypes.string,
  loading: Proptypes.bool,
  handleSubmit: Proptypes.func,
  handleInput: Proptypes.func.isRequired,
};

export default SearchPresenter;
