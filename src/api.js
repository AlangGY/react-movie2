import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "0f9bfa7aedb7210fc5179d2779352ed3",
    language: "ko-KR",
    region: "KR",
  },
});

export const tvAPI = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos,images",
      },
    }),
  tvSearch: (query, include_adult = false) =>
    api.get("search/tv", {
      params: {
        query,
        include_adult,
      },
    }),
};

export const movieAPI = {
  nowPlaying: () => api.get("movie/now_playing"),
  topRated: () => api.get("movie/top_rated"),
  popular: () => api.get("movie/popular"),
  upcoming: () => api.get("movie/upcoming"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos,images",
      },
    }),
  movieSearch: (query, include_adult = false) =>
    api.get("search/movie", {
      params: {
        query,
        include_adult,
      },
    }),
};

const imdbApi = axios.create({
  baseURL: "https://www.imdb.com/title/",
});

export const getImdb = {
  getById: (id) => imdbApi.get(id),
};

export default api;
