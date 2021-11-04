<template>
  <div>
    <v-alert
      v-if="favoriteSuccess"
      border="bottom"
      dark
      elevation="10"
      type="success"
      dismissible
      max-width="200"
      max-height="100"
      dense
    >
      Your movie is now favorited
    </v-alert>
    <v-alert
      v-if="removedFavoriteSuccess"
           border="bottom"
      dark
      elevation="10"
      type="warning"
      dismissible
      max-width="200"
      max-height="100"
      dense
    >
      Your movie is now un-favorited
    </v-alert>
    <v-alert
      v-if="error"
           border="bottom"
      dark
      elevation="10"
      type="error"
      dismissible
      max-width="200"
      max-height="100"
      dense
    >
      Something went wrong, most likely the API call.
    </v-alert>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  name: "ToastComponent",
  computed: {
    ...mapState(["error", "favoriteSuccess", "removedFavoriteSuccess"]),
  },
});
</script>


<style scoped lang="scss">

.v-alert {
  font-size:12px!important;
}
</style>