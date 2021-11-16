import Vue from "vue";
import Vuex from "vuex";
import MovieData from "@/services/types/MovieData";
import MovieDetails from "@/services/types/MovieDetails";
import DefaultMovieData from "@/services/types/DefaultMovieData";
import Favorite from "@/services/types/Favorite";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [] as MovieData[],
    movieDetails: [] as MovieDetails[],
    defaultMovies: [] as DefaultMovieData[],
    loading: false,
    error: null as string | null,
    empty: true,
    favorites: [] as Favorite[],
    drawer: false,
    query: null as string | null,
    favoriteSuccess: false,
    removedFavoriteSuccess: false,
    showSearch: true,
    overlay: false,
  },
  mutations,
  actions,
  getters,
});
