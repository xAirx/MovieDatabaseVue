<template>
  <div>
    <v-card elevation="12" :height="height" color="transparent" dark flat tile>
      <slot></slot>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Card",
  props: {
    height: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      absolute: true,
      hovered: true,
    };
  },
});
</script>

<style scoped>
.v-image__image {
  transition: 0.3s linear;
}
.original_title {
  color: white;
  line-height: 1;
}
</style>
