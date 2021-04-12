import React from "react";
import HomePresenter from "./HomePresenter";
import { movieAPI } from "api";

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    topRated: null,
    popular: null,
    upcoming: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieAPI.nowPlaying();
      const {
        data: { results: topRated },
      } = await movieAPI.topRated();
      const {
        data: { results: popular },
      } = await movieAPI.popular();
      const {
        data: { results: upcoming },
      } = await movieAPI.upcoming();
      this.setState({
        nowPlaying,
        topRated,
        popular,
        upcoming,
        loading: false,
      });
    } catch {
      this.setState({ error: "Cannot find a Movie" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const {
      nowPlaying,
      topRated,
      popular,
      upcoming,
      error,
      loading,
    } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        topRated={topRated}
        popular={popular}
        upcoming={upcoming}
        error={error}
        loading={loading}
      />
    );
  }
}

export default HomeContainer;
