import store from "../store";
import ApiService from "@/services/ApiService";
import Favorite from "@/services/types/Favorite";

export default {
  setEmpty({ commit }, payload: boolean) {
    commit("SET_EMPTY", payload);
  },
  // ////////////////////////////// Grab data from API via ApiService ///////////////////////////////////////

  async retrieveDefaultMovies({ commit }): Promise<void> {
    commit("LOADING", true);

    try {
      const response = await ApiService.getDefaultMovies();
      commit("SET_DEFAULTMOVIES_DATA", response.data.results);
    } catch (e) {
      commit("ERROR", e);
    } finally {
      commit("LOADING", false);
    }
  },

  async retrieveMoviesData({ commit }, query: string): Promise<void> {
    commit("LOADING", true);

    try {
      const response = await ApiService.getMoviesData(query);
      commit("SET_MOVIES_DATA", response.data.results);
    } catch (e) {
      commit("ERROR", e);
    } finally {
      commit("LOADING", false);
    }
  },

  async retrieveMovieDetails({ commit }, movieId: string): Promise<void> {
    commit("LOADING", true);

    try {
      const response = await ApiService.getMovieDetails(movieId);
      commit("SET_MOVIE_DETAILS_DATA", response);
    } catch (e) {
      commit("ERROR", e);
    } finally {
      commit("LOADING", false);
    }
  },

  // ////////////////////////////// //////////////////////////////// ////////////////////////////////

  // ////////////////////////////// FAVORITES //////////////////////////// ////////////////////////////////////

  addToFavorites({ commit, state }, chosenFavorite: Favorite): void {
    if (state.favorites.some((movie) => movie.id === chosenFavorite.id)) {
      return;
    }
    commit("SAVE_FAVORITES", chosenFavorite);
  },

  removeFromFavorites({ commit }, favoriteId: number): void {
    commit("DELETE_FAVORITES", favoriteId);
  },

  // ////////////////////////////// //////////////////////////////// ////////////////////////////////

  // ////////////////////////////// QUERY //////////////////////////// ////////////////////////////////////
  storeQuery({ commit }, query: string): void {
    commit("SET_QUERY", query);
  },

  // ////////////////////////////// //////////////////////////////// ////////////////////////////////
};
