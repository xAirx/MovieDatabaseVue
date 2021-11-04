<template>
  <div>
    <div v-if="!favorites.length" class="nofavorites">
      <v-alert v-if="!favorites.length" type="warning"
        >You have no favorites yet</v-alert
      >
    </div>
    <Card v-if="favorites.length" :height="height">
      <div v-if="loading">
        <li v-for="data in favorites" :key="data.id">
          <SkeletonComponent />
        </li>
      </div>
      <div v-if="favorites.length">
        <li
          v-for="data in favorites"
          :key="data.id"
          transition="fade-transition"
        >
          <v-img
            :height="height"
            :src="baseimg + data.backdrop_path"
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
                  >Category: Your Favorites</v-chip
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
              <v-col align-self="end">
                <router-link :to="{ path: '/details/' + data.id }">
                  <v-chip class="ma-0" color="primary" label large
                    >See details</v-chip
                  >
                </router-link>
              </v-col>
            </v-row>
          </v-img>
        </li>
      </div>
    </Card>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { enums } from "@/components/views/utils/helpers/Enums";
import FavoritesButton from "@/components/views/favoritescomponents/FavoritesButton.vue";
import Card from "@/components/views/layout/Card.vue";
import SkeletonComponent from "@/components/views/layout/Skeleton.vue";

import { mapState } from "vuex";
export default Vue.extend({
  name: "FavoritesComponent",
  components: {
    Card,
    FavoritesButton,
    SkeletonComponent,
  },
  data() {
    return {
      baseimg: enums.BASEIMAGEURL,
      absolute: true,
      overlay: false,
      height: "600",
    };
  },
  computed: {
    ...mapState(["favorites", "loading"]),
  },
});
</script>

<style lang="scss">
.nofavorites {
  background-color: #ffc107;
}

.componentTitle {
  padding: 39px;
}
</style>
