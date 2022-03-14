import store from "../store";
import DefaultMovieData from "@/services/types/DefaultMovieData";
import MovieData from "@/services/types/MovieData";
import MovieDetails from "@/services/types/MovieDetails";
import Favorite from "@/services/types/Favorite";

export default {
  ////////// SEARCH ///////////////////////////////////////
  SHOW_SEARCH: (state, payload: boolean) => (state.showSearch = payload),
  ////////////////////////////////////////////////////////

  ////////// Query ///////////////////////////////////////
  SET_QUERY: (state, payload: string) => (state.query = payload),
  ////////////////////////////////////////////////////////

  /////////////// DRAWER //////////////////////////////
  TOGGLE_DRAWER: (state, drawer: boolean | null = null) => {
    if (drawer === null) {
      state.drawer = !state.drawer;
    } else {
      state.drawer = drawer;
    }
  },
  /////////////////////////////////////////////////////

  /////////////////// MOVIES DATA AND DETAILS ///////////////////
  SET_DEFAULTMOVIES_DATA(state, defaultMovies: DefaultMovieData[]) {
    state.defaultMovies = defaultMovies;
  },
  SET_MOVIES_DATA(state, moviesData: MovieData[]) {
    state.movies = moviesData;
  },

  SET_MOVIE_DETAILS_DATA(state, movieDetails: MovieDetails[]) {
    state.movieDetails = movieDetails;
  },
  /////////////////////////////////////////////////////////////////

  /////////////////// APPSTATES ///////////////////

  ERROR(state, error: string) {
    state.error = error;
  },

  LOADING(state, loading: boolean) {
    state.loading = loading;
  },

  /////////////////////////////////////////////////////////////////

  /////////////////// FAVORITES ///////////////////

  REMOVED_FAVORITE_SUCCESS(state, payload: boolean) {
    state.removedFavoriteSuccess = payload;
  },

  FAVORITE_SUCCESS(state, payload: boolean) {
    state.favoriteSuccess = payload;
  },

  SAVE_FAVORITES(state, newFavorite: Favorite) {
    state.favorites.push(newFavorite);
  },

  DELETE_FAVORITES(state, favoriteId: Favorite) {
    function findIndex(): number {
      return state.favorites.findIndex(
        (favorite: Favorite) => favoriteId.id === favorite.id
      );
    }

    const index = findIndex();

    if (index > -1) {
      state.favorites.splice(index, 1);
    }
  },

  SET_FAVORITES_EXISTS(state, payload: Favorite[]) {
    state.favorites = payload;
  },

  SET_EMPTY(state, payload: boolean) {
    state.empty = payload;
    state.movies = [];
  },
  /////////////////////////////////////////////////////////////////
};
