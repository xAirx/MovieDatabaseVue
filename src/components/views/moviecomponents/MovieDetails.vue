<template>
  <card :height="height">
    <div v-if="loading">
      <li v-for="data in movieDetails" :key="data.id">
        <skeleton-component />
      </li>
    </div>
    <div>
      <li v-for="data in movieDetails" :key="data.id">
        <v-img
          v-if="data.backdrop_path"
          :src="baseimg + data.backdrop_path"
          :height="height"
          gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .90)"
        >
          <!---------------------- DETAILS ------------------->
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
              >
                <v-img
                  :src="baseimg + data.production_companies[0].logo_path"
                  align-center
                  contain
                  height="28"
                  width="100"
                  max-width="100"
                />
              </v-chip>
              <v-chip
                label
                class="mx-0 mb-10 mr-5"
                color="grey darken-3"
                text-color="white"
                medium
                >Category: Movie details</v-chip
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
              <h1 class="original_title font-weight-light">
                {{ data.original_title }}
              </h1>
              {{ data.production_companies[0].name }}
              {{ data.production_companies[0].origin_country }}
              <div class="textcontainer" d-flex>
                <v-card-text>{{ data.overview }}</v-card-text>
              </div>
              <youtube :video-id="data.videos.results[0].key"></youtube>
            </v-col>
            <v-col align-self="end">
              <router-link :to="{ path: '/' }">
                <v-chip class="ma-0" color="primary" label large
                  >Go home</v-chip
                >
              </router-link>
            </v-col>
          </v-row>
        </v-img>
      </li>
    </div>
  </card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters, mapActions } from "vuex";
import Card from "@/components/views/layout/Card.vue";
import { enums } from "@/components/views/utils/helpers/Enums";
import SkeletonComponent from "@/components/views/layout/Skeleton.vue";
import VueYouTubeEmbed from "vue-youtube-embed";
Vue.use(VueYouTubeEmbed);
export default Vue.extend({
  components: {
    Card,
    SkeletonComponent,
  },
  data() {
    return {
      baseimg: enums.BASEIMAGEURL,
      basevideo: enums.BASEVIDEO,
      height: "1000",
    };
  },
  computed: {
    ...mapGetters(["shouldLoadMovieDetails"]),
    ...mapState(["movieDetails", "loading"]),
  },
  mounted() {
    this.retrieveMovieDetails(this.$route.params.id);
  },
  methods: {
    ...mapActions(["retrieveMovieDetails"]),
  },
});
</script>

<style lang="scss">
.componentTitle {
  padding: 39px;
}
.textcontainer {
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 30px;
}
.original_title {
  margin-bottom: -61px;
}
</style>
