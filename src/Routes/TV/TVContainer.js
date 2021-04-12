import { tvAPI } from "api";
import React from "react";
import TVPresenter from "./TVPresenter";

class TVContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvAPI.topRated();
      const {
        data: { results: popular },
      } = await tvAPI.popular();
      const {
        data: { results: airingToday },
      } = await tvAPI.airingToday();

      this.setState({ topRated, popular, airingToday });
    } catch {
      this.setState({ error: "Cannot find TVs" });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { topRated, popular, airingToday, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}

export default TVContainer;
