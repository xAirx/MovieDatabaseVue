import MovieData from "@/services/types/MovieData";

export default {
  shouldLoadDefaultMovies(state): boolean {
    return !state.defaultMovies.length;
  },
  shouldLoadMovieDetails(state): boolean {
    return !state.movieDetails;
  },
};
