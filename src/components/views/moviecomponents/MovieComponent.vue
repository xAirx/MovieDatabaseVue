<template>
  <!-------- TODO: LOGIC TO HANDLE PAGINATION-------->
  <Card :height="height">
    <div v-if="loading">
      <li v-for="data in movies" :key="data.id">
        <SkeletonComponent />
      </li>
    </div>
    <div v-else>
      <li v-for="data in movies" :key="data.id" transition="fade-transition">
        <v-img
          v-if="data.backdrop_path"
          :src="baseimg + data.backdrop_path"
          :height="height"
          gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .90)"
        >
          <v-row
            v-if="data.backdrop_path"
            class="text-h2 fill-height text-center ma-0"
          >
            <v-col cols="12">
              <v-chip
                label
                class="mx-0 mb-10 mr-5"
                color="grey darken-3"
                text-color="white"
                medium
                >Category: Your search</v-chip
              >
              <v-chip
                label
                class="mx-0 mb-10 mr-5"
                color="grey darken-3"
                text-color="white"
                medium
                >Release: {{ data.release_date }}</v-chip
              >

              <v-chip
                label
                class="mx-0 mb-10 mr-5"
                color="grey darken-3"
                text-color="white"
                medium
                >Rating: {{ data.vote_average }}</v-chip
              >
            </v-col>

            <v-col cols="12">
              <h1 class="original_title font-weight-light">
                {{ data.original_title }}
              </h1>
            </v-col>

            <v-col align-self="end">
              <v-chip class="text-uppercase ma-0" color="primary" label large>
                <FavoritesButton :favorited-movie="data" />
              </v-chip>
            </v-col>
          </v-row>
        </v-img>
      </li>
    </div>
  </Card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import Card from "@/components/views/layout/Card.vue";
import FavoritesButton from "@/components/views/favoritescomponents/FavoritesButton.vue";
import { enums } from "@/components/views/utils/helpers/Enums";
import SkeletonComponent from "@/components/views/layout/Skeleton.vue";

export default Vue.extend({
  name: "MovieComponent",
  components: {
    Card,
    FavoritesButton,
    SkeletonComponent,
  },
  data() {
    return {
      baseimg: enums.BASEIMAGEURL,
      height: 600,
    };
  },
  computed: {
    ...mapState(["movies", "loading"]),
  },
  methods: {
    ...mapActions(["addToFavorites", "removeFromFavorites"]),
  },
});
</script>

<style lang="scss">
.componentTitle {
  padding: 39px;
}
</style>
