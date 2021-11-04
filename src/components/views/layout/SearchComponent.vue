<template>
  <div>
    <v-text-field
      v-if="showSearch"
      append-icon="mdi-magnify"
      solo-inverted
      style="max-width: 500"
      v-model="searchQuery"
      placeholder="Search for a Movie"
    />
    <debounce :searchQuery="searchQuery" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
import Debounce from "@/components/views/utils/helpers/Debounce.vue";

export default Vue.extend({
  name: "SearchComponent",
  components: {
    Debounce,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    ...mapState([
      "showSearch",
    ])
  },
  methods: {
    ...mapMutations(["SHOW_SEARCH"]),
  },
});
</script>
