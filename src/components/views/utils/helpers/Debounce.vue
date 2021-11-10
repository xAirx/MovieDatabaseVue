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
    ...mapState(["showSearch", "empty", "movies"]),
  },
  watch: {
    searchQuery() {
      if (this.searchQuery.length > 5) {
        this.expensiveOperation();
        this.callEmpty(false);
      }

      if (this.searchQuery === "" && this.searchQuery.length < 4) {
        this.callEmpty(true);
      }
    },
  },
  methods: {
    ...mapActions(["retrieveMoviesData", "setEmpty"]),
    expensiveOperation: _.debounce(function (this: any) {
      this.retrieveMoviesData(this.searchQuery);
    }, 500),
    callEmpty(payload) {
      this.setEmpty(payload);
      console.log(this.empty);
    },
  },
});
</script>
