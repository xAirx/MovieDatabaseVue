import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/services/ApiService";
import MovieData from "@/services/types/MovieData";
import MovieDetails from "@/services/types/MovieDetails";
import DefaultMovieData from "@/services/types/DefaultMovieData";
import Favorite from "@/services/types/Favorite";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [] as MovieData[],
    movieDetails: [] as MovieDetails[],
    defaultMovies: [] as DefaultMovieData[],
    loading: false,
    error: null as string | null,
    favorites: [] as Favorite[],
    drawer: false,
    query: null as string | null,
    favoriteSuccess: false,
    removedFavoriteSuccess: false,
    showSearch: true,
    overlay: false,
  },

  mutations: {
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
      const index = state.favorites.findIndex(
        (favorite) => favoriteId.id == favorite.id
      );

      if (index < 0) {
        throw new Error(
          `Could not find favorite with id '${favoriteId}'. This should never happen`
        );
      }
      state.favorites.splice(index, 1);
    },

    SET_FAVORITES_EXISTS(state, payload: Favorite[]) {
      state.favorites = payload;
    },
    /////////////////////////////////////////////////////////////////
  },

  actions: {
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
  },

  getters: {
    shouldLoadDefaultMovies(state): boolean {
      return !state.defaultMovies.length;
    },
    shouldLoadMovieDetails(state): boolean {
      return !state.movieDetails;
    },
  },
});
