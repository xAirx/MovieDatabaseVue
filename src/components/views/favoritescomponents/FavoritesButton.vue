<template>
  <button
    @click="
      findIfFavorite
        ? unfavoriteMovie('unfavoriteMovie')
        : favoriteMovie('favoriteMovie')
    "
  >
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { mapState, mapActions, mapMutations } from "vuex";
import MovieData from "@/services/types/MovieData";
import Favorite from "@/services/types/Favorite";

export default Vue.extend({
  name: "FavoritesButton",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    favoritedMovie: {
      type: [] as PropType<Favorite>,
    },
  },
  computed: {
    ...mapState(["favorites", "loading", "error"]),
    buttonText(): string {
      return this.findIfFavorite ? "Remove from Favorites" : "Add to favorites";
    },
    findIfFavorite(): boolean {
      return this.favorites.some(
        (movie: MovieData) => movie?.id === this.favoritedMovie.id
      );
    },
  },
  methods: {
    ...mapActions(["favoriteExists", "addToFavorites", "removeFromFavorites"]),
    ...mapMutations(["FAVORITE_SUCCESS", "REMOVED_FAVORITE_SUCCESS"]),
    favoriteMovie() {
      this.addToFavorites(this.favoritedMovie);
      this.FAVORITE_SUCCESS(true);
      setTimeout(() => {
        this.FAVORITE_SUCCESS(false);
      }, 2000);
    },
    unfavoriteMovie() {
      this.removeFromFavorites(this.favoritedMovie);
      this.REMOVED_FAVORITE_SUCCESS(true);
      setTimeout(() => {
        this.REMOVED_FAVORITE_SUCCESS(false);
      }, 2000);
    },
  },
});
</script>
