<template>
  <div>
    <DefaultComponent v-if="!movies.length" />
    <MovieComponent v-else />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import MovieComponent from "@/components/views/moviecomponents/MovieComponent.vue";
import DefaultComponent from "@/components/views/moviecomponents/DefaultComponent.vue";

export default Vue.extend({
  name: "MainComponent",
  components: {
    MovieComponent,
    DefaultComponent,
  },
  computed: {
    ...mapState(["movies"]),
  },
});
</script>

<style lang="scss" scoped></style>

<style lang="scss">
.col-md-12 {
  background-color: #363636;
}

li {
  list-style-type: none;
}

.v-application .text-h2 {
  font-size: 1.2rem !important;
  line-height: 6.75rem !important;
}

.v-main__wrap {
  background-color: #363636;
}

.v-image__image {
  background-position: inherit !important;
}
</style>
