import { movieAPI, tvAPI } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    // Movie or TV
    const {
      location: { pathname },
    } = this.props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }
  async componentDidMount() {
    // id Number from props
    const {
      match: {
        params: { id },
      },
    } = this.props;
    // push Function from props
    const {
      history: { push },
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    try {
      const { isMovie } = this.state;
      let result;
      if (isMovie) {
        ({ data: result } = await movieAPI.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvAPI.tvDetail(parsedId));
      }
      this.setState({
        result,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { result, error, loading, isMovie } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        isMovie={isMovie}
      />
    );
  }
}

export default DetailContainer;
