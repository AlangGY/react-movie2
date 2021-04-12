import { movieAPI, tvAPI } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends React.Component {
  state = {
    tvSearch: null,
    movieSearch: null,
    query: "",
    error: null,
    loading: null,
  };

  handleInput = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      query: value,
    });
  };
  handleSubmit = (event) => {
    // PreventDefault
    event.preventDefault();
    // 상태값 Loading= true
    this.setState({ loading: true });
    // 검색 시작
    this.searchQuery();
  };

  searchQuery = async () => {
    try {
      // state내부의 query를 가져옴
      const { query } = this.state;
      // toSearch,movieSearch 함수에 query를 대입하여 결과값 출력
      if (query !== "") {
        const {
          data: { results: tvSearch },
        } = await tvAPI.tvSearch(query);
        const {
          data: { results: movieSearch },
        } = await movieAPI.movieSearch(query);

        this.setState({ tvSearch, movieSearch });
      }
    } catch {
      this.setState({ error: "Cannot Search Movies or TVs" });
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    const { tvSearch, movieSearch, error, loading, query } = this.state;
    return (
      <SearchPresenter
        tvSearch={tvSearch}
        movieSearch={movieSearch}
        query={query}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        handleInput={this.handleInput}
      />
    );
  }
}

export default SearchContainer;
