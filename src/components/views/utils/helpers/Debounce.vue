<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import _ from "lodash";

export default Vue.extend({
  name: "Debounce",
  props: {
    searchQuery: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState(["showSearch"]),
  },
  watch: {
    searchQuery() {
      if (this.searchQuery.length) {
        this.expensiveOperation();
      }
    },
  },

  methods: {
    ...mapActions(["retrieveMoviesData"]),
    expensiveOperation: _.debounce(function (this: any) {
      this.retrieveMoviesData(this.searchQuery);
    }, 500),
  },
});
</script>
