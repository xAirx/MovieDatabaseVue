<template>
  <div>
    <v-skeleton-loader
      type="list-item-avatar-three-line, image,  image,  image"
    ></v-skeleton-loader>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  name: "SkeletonComponent",
  computed: {
    ...mapState(["loading"]),
  },
});
</script>
